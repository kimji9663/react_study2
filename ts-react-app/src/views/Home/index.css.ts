import { style, globalStyle } from "@vanilla-extract/css"

export const showScene0 = style({
  
})
export const showScene1 = style({
  
})
export const showScene2 = style({
  
})
export const showScene3 = style({
  
})

export const scrollSectionCommon = style({
  position: 'relative',
  paddingTop: '50vh',
})

export const scrollSec0 = {
  root: scrollSectionCommon,
  title: style({
    position: 'relative',
    top: '-10vh',
    zIndex: 5,
    fontSize: '4rem',
    textAlign: 'center',
  }),
}
export const scrollSec1 = {
  root: scrollSectionCommon,  
}
export const scrollSec2 = {
  root: scrollSectionCommon,  
}
export const scrollSec3 = {
  root: scrollSectionCommon,  
}

export const mainMessagewerw = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '35vh',
  height: '3em',
  margin: '3px 0',
  fontSize: '2.5rem',
  opacity: 0,
  selectors: {
    [`${scrollSec0.root} &`]: {
      display: 'block',
    }
  }
})

export const stickyElem = style({
  display: 'none',
  position: 'fixed',
  left: 0,
  width: '100%',
  selectors: {
    [`${showScene0} ${scrollSec0.root} &`]: {
      display: 'block'
    },
    [`${showScene1} ${scrollSec1.root} &`]: {
      display: 'block'
    },
    [`${showScene2} ${scrollSec2.root} &`]: {
      display: 'block'
    },
    [`${showScene3} ${scrollSec3.root} &`]: {
      display: 'block'
    },
  }
})
export const mainMessage = {
  root: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '35vh',
    height: '3em',
    margin: '3px 0',
    fontSize: '2.5rem',
    opacity: 0,
    selectors: {
      [`${scrollSec0.root} &`]: {
        display: 'block',
      },
      [`${scrollSec2.root} &`]: {
        fontSize: '3.5rem',
      }
    }
  }),
  text: style({
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 1.2,
  }),
  small: style({
    display: 'block',
    marginBottom: '.5em',
    fontSize: '1rem',
  })
}
