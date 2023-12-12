import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'

// import backgroundVideo from './demo.mp4'

import { useSelector } from 'react-redux'

const App = () => {

  const url = useSelector(state => state.products.productData.videoUrl.url)
  console.log(url)
  return (
    <Box mb={1} ml={0.5}>
      <div>
        {url && (
          <video loop style={{ width: '100%' }} controls>
            <source
              src={`${import.meta.env.VITE_BACKEND_API_URL + url}`}
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        )}
        {!url && <>Creation Failed</>}
      </div>
    </Box>
  )
}

export default App
