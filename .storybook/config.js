import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import infoAddon from '@storybook/addon-info'
import pkg from '../package.json'

import '../src/index.styl' // Load bee polen :3

const requires = require.context('../src/', true, /storybook\.js$/)
const choreRequires = require.context('../.storybook', true, /storybook\.js$/)

const loadStories = () => {
  choreRequires.keys().forEach(choreRequires)
  requires.keys().forEach(requires)
}

setAddon(infoAddon)

setOptions({ name: `RM LP DS v${pkg.version}` })

configure(loadStories, module)
