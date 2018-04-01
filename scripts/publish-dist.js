const chalk = require('chalk')
const exec = require('child_process').exec
const paths = require('../config/paths')

const pkg = require(`${paths.appBuild}/package`) // eslint-disable-line import/no-dynamic-require

const publish = exec('npm publish', {
  cwd: paths.appBuild
})

publish.stdout.on('data', stdout => process.stdout.write(stdout))

publish.stderr.on('data', stderr => process.stderr.write(stderr))

publish.on('close', code => {
  if (code > 0) {
    console.log()
    console.log(chalk.red('Erro ao publicar'))
    console.log()

    process.exit(1)
  }

  console.log()
  console.log(chalk.green(`${pkg.name} v${pkg.version} publicado com sucesso!`))
  console.log()
})
