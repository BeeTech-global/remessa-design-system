// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

// Ensure environment variables are read.
// require('../config/env');

const babel = require('babel-core')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')
const webpack = require('webpack')
const exec = require('child_process').exec
const config = require('../config/webpack.config.prod')
const paths = require('../config/paths')
const pkg = require('../package.json')

const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild

// Warn and crash if required files are missing
// if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
//   process.exit(1);
// }

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.

measureFileSizesBeforeBuild(paths.appBuild)
.then(previousFileSizes => {
  // Remove all content but keep the directory so that
  // if you're in it, you don't end up in Trash
  fs.emptyDirSync(paths.appBuild)

  return Promise.all([
    build(previousFileSizes),
    compileJs()
  ])
})
.then(responses => {
  console.log()
  const {
    stats,
    warnings,
    previousFileSizes
  } = responses[0]

  generatePollenJs()
  getPublishFiles()

  fs.readdirSync(path.resolve(paths.appBuild))
  .forEach(fileName => {
    const folderPath = path.resolve(paths.appBuild, fileName)

    if (!fs.lstatSync(folderPath).isDirectory()) {
      stats.compilation.assets[`${fileName}`] = Object.create(
        stats.compilation.assets['remessa-lp-ds.css']
      )

      return
    }

    fs.readdirSync(folderPath)
    .forEach(moduleName => {
      // Getting some stats :P
      stats.compilation.assets[`${fileName}/${moduleName}`] = Object.create(
        stats.compilation.assets['remessa-lp-ds.css']
      )
    })
  })

  if (warnings.length) {
    console.log(chalk.yellow('Compiled with warnings.\n'))
    console.log(warnings.join('\n\n'))
    console.log(
        `\nSearch for the ${
          chalk.underline(chalk.yellow('keywords'))
          } to learn more about each warning.`
      )
    console.log(
        `To ignore, add ${
          chalk.cyan('// eslint-disable-next-line')
          } to the line before.\n`
      )
  } else {
    console.log(chalk.green('Compiled successfully.\n'))
  }

  console.log('File sizes after gzip:\n')
  printFileSizesAfterBuild(
    stats,
    previousFileSizes,
    paths.appBuild
  )

  console.log()
}, err => {
  console.log(chalk.red('Failed to compile.\n'))
  console.log(`${err.message || err}\n`)
  process.exit(1)
})

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  console.log('Creating an optimized production build...')

  const compiler = webpack(config)

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }

      const messages = formatWebpackMessages(stats.toJson({}, true))
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')))
      }

      if (process.env.CI && messages.warnings.length) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
            'Most CI servers set it automatically.\n'
          )
        )

        return reject(new Error(messages.warnings.join('\n\n')))
      }

      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      })
    })
  })
}

function compileJs() {
  return new Promise((resolve, reject) => {
    const buildComp = exec('npm run build:components', {
      cwd: path.resolve(__dirname, '../')
    })

    // buildComp.stdout.on('data', stdout => process.stdout.write(stdout))

    buildComp.stderr.on('data', stderr => process.stderr.write(stderr))

    buildComp.on('close', code => {
      if (code > 0) {
        reject({
          message: 'Erro ao transpilar'
        })
        return
      }

      resolve()
    })
  })
}

function generatePollenJs() {
  const babelrc = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../.babelrc'), 'utf-8')
  )
  const output = []

  fs.readdirSync(path.resolve(paths.appBuild))
  .forEach(name => {
    const folderPath = path.resolve(paths.appBuild, name)

    if (!fs.lstatSync(folderPath).isDirectory()) {
      return
    }

    output.push(`export { default as ${name} } from './${name}';`)
  })

  const transpiled = babel.transform(output.join('\n'), babelrc)

  fs.writeFileSync(
    path.resolve(paths.appBuild, 'remessa-lp-ds.js'),
    transpiled.code
  )
}

function getPublishFiles() {
  // delete pkg.jest
  // delete pkg.scripts
  // delete pkg.devDependencies

  // fs.copySync(
  //   paths.src,
  //   path.resolve(paths.appBuild, 'src')
  // )

  // fs.copySync(
  //   path.resolve(__dirname, '../.npmignore'),
  //   path.resolve(paths.appBuild, '.npmignore')
  // )

  // fs.outputJsonSync(
  //   path.resolve(paths.appBuild, 'package.json'),
  //   pkg,
  //   { spaces: 2 }
  // )
}
