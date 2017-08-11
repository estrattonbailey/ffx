let id = 0
let sheet = []
let style = null
let rewrite = false
const hash = () => (id++).toString(36)
const cx = () => '⚡︎' + hash()
const cache = {}
const defs = {
  padding: val => `padding-left: ${val/2}em; padding-right: ${val/2}em`,
  margin: val => `margin-left: -${val/2}em; margin-right: -${val/2}em`,
  width: val => (
    /auto/.test(val) ? (
      `flex: 1 1 auto; min-width: 0; min-height: 0`
    ) : (
      `width: ${typeof val === 'number' ? (val * 100) + '%' : val}`
    )
  ),
  wrap: bool => `flex-wrap: ${bool ? 'wrap' : 'nowrap'}`,
  order: num => `order: ${num}`,
  offset: val => `margin-left: ${typeof val === 'number' ? (val * 100) + '%' : val}`
}
const mx = ([ m, v ], cn, type) => [ `@media(min-width:`, m / 16, `em){`, rx(cn, type, v), `}` ]
const rx = (cn, type, val) => Array.isArray(val) ? mx(val, cn, type) : [ `.${cn}{`, defs[type](val), '}' ]

if (typeof window !== 'undefined') {
  let _s = document.getElementById('ffx')
  style = _s || document.createElement('style')
  style.id = 'ffx'
  !_s && document.head.appendChild(style)
}

const gen = (k, o, cs) => {
  if (cache[k + o]) {
    return cache[k + o]
  } else {
    rewrite = true
    cache[k + o] = cx()
    sheet.push(rx(cache[k + o], k, o))
    return cache[k + o]
  }
}

export const writeCSS = () => { style.innerHTML = getCSS() }

export const toClassName = config => {
  let cs = []

  for (let k in config) {
    cs.push(Array.isArray(config[k]) ? config[k].map(o => gen(k, o)).join(' ') : gen(k, config[k]))
  }

  if (rewrite && style) {
    writeCSS()
    rewrite = false
  }

  return cs.join(' ')
}

export const getCSS = () => {
  let a = []
  let b = []

  sheet.forEach(r => /@media/.test(r[0]) ? b.push(r) : a.push(r))

  return a.map(r => r.join('')).join('') + b.sort((a, b) => (
    a[1] - b[1]
  )).map(a => {
    return a.map(a => {
      return Array.isArray(a) ? a.join('') : a
    }).join('')
  }).join('')
}
