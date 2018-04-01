const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp)

module.exports = {
  nodePaths,
  packageJSON: resolveApp('package.json'),
  appBuild: resolveApp('dist'),
  src: resolveApp('src'),
  beePollen: resolveApp('src/index.styl'),
  publish: resolveApp('.publish')
}
