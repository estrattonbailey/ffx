import React from 'react'
import { Flex, Box } from 'micro-grid'

export default props => (
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
)
