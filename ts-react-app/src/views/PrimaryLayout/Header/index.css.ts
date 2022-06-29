import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../../styles/sprinkles.css'

export const card = style([
  sprinkles({
    background: {
      lightMode: 'green-50',
      darkMode: 'gray-800',
    },
    borderRadius: {
      mobile: '4x',
      desktop: '5x',
    },
    padding: {
      mobile: '7x',
      desktop: '8x',
    },
  }),
  {
    transition: 'transform 4s ease-in-out',
    ':hover': {
      cursor: 'default',
      transform: 'scale(2) rotate(720deg)',
    },
  },
])

export const globalNav = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  width: '100%',
  height: '44px',
  padding: '0 1rem',
  background: '#f5f5f5',
})

export const localNav = style({
  position: 'absolute',
  top: 45,
  left: 0,
  zIndex: 11,
  width: '100%',
  height: '52px',
  borderBottom: '1px solid #ddd',
})

export const navLinks = style({
  selectors: {
    [`${globalNav} &, ${localNav} &`]: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1000px',
      height: '100%',
      margin: '0 auto',
    },
    [`${globalNav} &`]: {
      justifyContent: 'space-between',
    },
  }
})

export const navItem = style({
  selectors: {
    [`${localNav} &`]: {
      fontSize: '.8rem',
    }
  }
})