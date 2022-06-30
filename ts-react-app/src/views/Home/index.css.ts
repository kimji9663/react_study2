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
  border: '1px solid red',
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
  top: 0,
  left: 0,
  width: '100%',
  selectors: {
    [`#show_scroll_section_0 #scroll_section_0 &`]: {
      display: 'block'
    },
    [`#show_scroll_section_1 #scroll_section_1 &`]: {
      display: 'block'
    },
    [`#show_scroll_section_2 #scroll_section_2 &`]: {
      display: 'block'
    },
    [`#show_scroll_section_3 #scroll_section_3 &`]: {
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
