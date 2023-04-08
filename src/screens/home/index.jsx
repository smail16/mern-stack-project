import { Box, Stack } from '@mui/material'
import { CardDetails, NavBar } from 'components'
import { SelectInput } from 'design-system'
import { articles } from 'mocks/articles'
import { sizes } from 'mocks/size'
import React from 'react'

function Home() {
  return (
    <Box>
      <NavBar />
      {/* <CardDetails/> */}
      {/* <SelectInput items={sizes}/> */}
      {/* <Box width="33.33%" height="100vh" overflow="hidden">
        <img
          src="https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg?w=740&t=st=1680877145~exp=1680877745~hmac=dd6fadc930bee45d217b116ee84526019385f7946c9d8f2a340c4f89c5c8e24e"
          alt=""
          width="100%"
          height="100%"
        />
      </Box> */}
    </Box>
  )
}

export default Home
