import { globalStyle } from '@vanilla-extract/css';

globalStyle(
  `html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video`, {
    margin: 0,
    padding: 0,
    border: 0,
  }
)

globalStyle(
  'html, body', {
    fontSize: '14px',
  }
)

globalStyle(
  'html', {
    fontFamily: `'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', NanumGothic, 'Malgun Gothic', sans-serif`,
    lineHeight: 1.2,
    wordWrap: 'break-word',
  }
)

globalStyle(
  'body', {
    overflowX: 'hidden',
    color: 'rgb(29, 29, 31)',
    letterSpacing: '-.05em',
    background: 'white',
    WebkitFontSmoothing: 'antialiased',
  }
)

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section', {
    display: 'block',
  }
)

globalStyle(
  'div, span, article, section, header, footer, aside, p, ul, li, fieldset, legend, label, a, nav, form', {
    boxSizing: 'border-box',
  }
)

globalStyle(
  'ol, ul, li', {
    listStyle: 'none',
  }
)

globalStyle(
  'table', {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  }
)

globalStyle(
  'img', {
    maxWidth: '100%',
    height: 'auto',
    border: 0,
  }
)

globalStyle(
  'button', {
    border: 0,
    background: 'transparent',
    cursor: 'pointer'
  }
)

globalStyle(
  'ul', {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  }
)

globalStyle(
  'p', {
    lineHeight: 1.6,
  }
)

globalStyle(
  `a,
  a:hover,
  a:focus`, {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'all 0.2s',
  }
)

globalStyle(
  'a', {
    color: 'rgb(29, 29, 31)',
    textDecoration: 'none',
  }
)