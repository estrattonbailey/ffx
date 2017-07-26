import React from 'react'
import { render } from 'react-dom'
import { Flex, Box, getCSS } from '../package/dist/index.js'

const App = props => (
  <div className="container">
    <h1>Micro Grid</h1>

    <Flex wrap={true} gutter={1}>
      <Box width={[
        1,
        [500, 1/2],
        [1000, 1/4]
      ]}>
        <div className="filler">25%</div>
      </Box>
      <Box width={[
        1,
        [500, 1/2],
        [1000, 1/4]
      ]}>
        <div className="filler">25%</div>
      </Box>
      <Box width={[
        1,
        [500, 1/2],
        [1000, 1/4]
      ]}>

      <Flex gutter={1}>
        <Box width={1/2}>
          <div className="filler">50%</div>
        </Box>
        <Box width={1/2}>
          <div className="filler">50%</div>
        </Box>
      </Flex>

      </Box>
      <Box width={[
        1,
        [500, 1/2],
        [1000, 1/4]
      ]}>
        <div className="filler">25%</div>
      </Box>
    </Flex>

    <Flex gutter={1} wrap={[
      true,
      [500, false]
    ]}>
      <Box width={[
        1,
        [500, '200px'],
      ]}>
        <div className="filler">
          200px
        </div>
      </Box>
      <Box width={[
        1,
        [500, 3/4],
        [500, 'calc(100% - 200px)'],
      ]}>
        <div className="filler">
          flex-auto
        </div>
      </Box>
    </Flex>

    <Flex gutter={1}>
      <Box width={[
        1,
        [500, 1 / 2],
      ]} offset={[
        [1000, 1/2]
      ]}>
        <div className="filler">
          #1
        </div>
      </Box>
      <Box width={[
        1,
        [500, 1 / 2]
      ]} order={[
        'unset',
        [1000, -1]
      ]}>
        <div className="filler">
          #2
        </div>
      </Box>
    </Flex>

    <div className="pv2">
      <pre><code>
        {`
<Flex wrap={true} gutter={1}>
  <Box width={[
    [1],
    [500, 1/2],
    [1000, 1/4]
  ]}>
    <div className="filler">25%</div>
  </Box>
  <Box width={[
    [1],
    [500, 1/2],
    [1000, 1/4]
  ]}>
    <div className="filler">25%</div>
  </Box>
  <Box width={[
    [1],
    [500, 1/2],
    [1000, 1/4]
  ]}>

  <Flex gutter={1}>
    <Box width={1/2}>
      <div className="filler">50%</div>
    </Box>
    <Box width={1/2}>
      <div className="filler">50%</div>
    </Box>
  </Flex>

  </Box>
  <Box width={[
    [1],
    [500, 1/2],
    [1000, 1/4]
  ]}>
    <div className="filler">25%</div>
  </Box>
</Flex>

<Flex gutter={1} wrap={[
  [true],
  [500, false]
]}>
  <Box width={[
    [1],
    [500, '200px'],
  ]}>
    <div className="filler">
      200px
    </div>
  </Box>
  <Box width={[
    [1],
    [500, 3/4],
    [500, 'auto'],
  ]}>
    <div className="filler">
      flex-auto
    </div>
  </Box>
</Flex>

<Flex gutter={1}>
  <Box width={[
    [1],
    [500, 1 / 2],
  ]} offset={[
    [1000, 1/2]
  ]}>
    <div className="filler">
      #1
    </div>
  </Box>
  <Box width={[
    [1],
    [500, 1 / 2]
  ]} order={[
    ['unset'],
    [1000, -1]
  ]}>
    <div className="filler">
      #2
    </div>
  </Box>
</Flex>
`
        }
      </code></pre>
    </div>
  </div>
)

render(<App/>, document.getElementById('root'))

console.log(`micro-grid rendered CSS:\n \n${getCSS()}`)
