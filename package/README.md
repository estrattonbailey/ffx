# ffx
Teeny-tiny flexbox grid for React. **1.9kb gzipped.**

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Features/Goals
1. No boilerplate, no config
2. Outputs Real CSS™
3. Nestable
4. Uses relative units (em)
5. SSR API

## Usage
Basic usage could look like this:
```javascript
import { Flex, Box } from 'ffx'

<Flex gutter={1} wrap={true}>
  <Box width={1/4}>...</Box>
  <Box width={'200px'}>...</Box>
  <Box width={'auto'}>...</Box>
  <Box width={[ 1, [900, 1/2] ]}>...</Box>
</Flex>
```

## SSR
Pseudo-code:
```javascript
import { getCSS } from 'ffx'

const html = renderToString(<App />)
const css = getCSS()

res.send(`
<!DOCTYPE html>
<html>
  <head>
    <style id="ffx">${css}</style>
  </head>
  <body>${html}</body>
</html>
`)
```

## API
In order to define breakpoints, some properties accept arrays of values (`responsive-config`). For example, in the below example, the `Box` is 100% wide below 900 pixels, and 50% wide above 900px:
```javascript
<Box width={[
  1,
  [900, 1/2]
]} />
```

All config values:
- `Flex`
  - `gutter` - `integer` or `responsive-config`, values are converted to em units i.e. `2` becomes `2em`
  - `wrap` - `boolean` or `responsive-config`
  - `alignItems` - `string`, passed directly to `align-items: <config>` CSS property
  - `justifyContent` - `string`, passed directly to `justify-content: <config>` CSS property
- `Box`
  - `width` - `integer`, `string`, or `responsive-config`
  - `order` - `integer` or `responsive-config`
  - `offset` - `integer`, `string`, or `responsive-config`

## TODO
Docs need work, I know.

MIT License
