import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

const theme = create({
  base: 'dark',
  brandTitle: 'NCCO UI',
  brandUrl: '/',
  brandImage: '/ncco-white.svg',
  brandTarget: '_self',

//   colorPrimary: '#133341',
//   colorSecondary: '#133341',
})

addons.setConfig({ theme })