// Adaptado de http://stackoverflow.com/questions/37408873/delete-or-not-create-a-file-for-each-entry-in-webpack

function RemoveJSFromBundle(options) {
  if (typeof options === 'string') {
    this.options = { skip: [options] }
  } else if (Array.isArray(options)) {
    this.options = { skip: options }
  } else {
    throw new Error('RemoveJSFromBundle requires an array of entry names to strip')
  }
}

RemoveJSFromBundle.prototype.apply = function apply(compiler) {
  const options = this.options

  compiler.plugin('emit', (compilation, callback) => {
    compilation.chunks.forEach(chunk => {
      if (options.skip.indexOf(chunk.name) === -1) return

      chunk.files.forEach(file => {
        if (file.match(/\.js$/)) {
          delete compilation.assets[file] // eslint-disable-line
        }
      })
    })
    callback()
  })
}

module.exports = RemoveJSFromBundle
