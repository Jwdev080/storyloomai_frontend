import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'

import axios from 'axios'
import Stack from '@mui/material/Stack'

import CircularProgress from '@mui/material/CircularProgress'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  videoUrlSet,
  getUEData,
  getVideoUrl
} from 'src/store/reducers/products'

const App = () => {
  // const url = useSelector(state => state.products.productData.url.url)

  const dispatch = useDispatch()
  const product = useSelector(state => state.products)
  const productData = product.productData
  const videoUrl = productData.url

  const [imageApiStep, setImageApiStep] = useState(true)
  const [videoApiStep, setVideoApiStep] = useState(false)

  const [snackData, setSnackData] = useState({ open: false, text: '' })

  const [loading, setLoading] = useState(true)

  const handleClose = () => {
    setSnackData({ open: false })
  }

  useEffect(() => {
    setTimeout(() => {
      setImageApiStep(false)
      setVideoApiStep(true)
      //const datas = dispatch(getVideoUrl())

      axios
        .post(
          `${import.meta.env.VITE_BACKEND_API_URL}/process/url_get`,
          productData
        )
        .then(response => {
          // Handle success
          dispatch(videoUrlSet(response.data))
          console.log(response.data)
        })
        .catch(error => {
          setLoading(false)
          // Handle error
          if (error.response) {
            // The request was made and the server responded with a status code
            // console.log(error.response.data) // This will contain the response data
            console.log(error.response.status) // This will contain the status code
            //console.log(error.response.headers) // This will contain the response headers
            if (error.response.status === 200) {
            } else if (error.response.status === 404) {
              setSnackData({ open: true, text: 'There is no API found' })
            } else if (error.response.status === 500) {
              setSnackData({ open: true, text: 'Internal Server Error' })
            } else if (error.response.status === 503) {
              setSnackData({
                open: true,
                text: 'Server is busy. Please try again later.'
              })
            } else if (error.response.status === 400) {
              setSnackData({ open: true, text: 'Error parsing JSON data.' })
            } else if (error.response.status === 405) {
              setSnackData({ open: true, text: 'Unsupported HTTP method.' })
            } else {
              setSnackData({ open: true, text: 'Network Error.' })
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error', error.message)
          }
          //console.log(error.config) // This will contain the config used to make the request
        })
    }, 3000)
  }, [])

  return (
    <Box mb={1} ml={0.5}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackData.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='warning' sx={{ width: '100%' }}>
          {snackData.text}
        </Alert>
      </Snackbar>
      {loading ? <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ height: '60vh' }}
        spacing={2}
      >
        <h2>One moment please...</h2>
        {/* {scriptApiStep && <h2>Making Script...</h2>} */}
        {imageApiStep && <h2>Making Model...</h2>}
        {videoApiStep && <h2>Making Video...</h2>}
        <CircularProgress color='info' size={50} />
      </Stack> : 
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ height: '60vh' }}
        spacing={2}
      >
        <h2>Error. Try again</h2>
      </Stack>}
    </Box>
  )
}

export default App
