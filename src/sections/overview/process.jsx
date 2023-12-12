import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getJson, getUEData, getVideoUrl } from '../../store/reducers/products'

import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'

import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})
// ----------------------------------------------------------------------

export default function AppWidgetSummary ({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
  // const scenes = {
  //   scene1: {
  //     action: [
  //       {
  //         character_id: 'Robot',
  //         script: 'According to calculations, we should take the next left.',
  //         animation: 'talking1',
  //         voice_id: '1',
  //         duration: 0.976
  //       },
  //       {
  //         character_id: 'Revenant',
  //         script: 'Shut up and keep walking.',
  //         animation: 'talking3',
  //         voice_id: '2',
  //         duration: 0.54
  //       }
  //     ],
  //     total_duration: 1.516,
  //     camera_type: 'c2_m'
  //   },
  //   scene2: {
  //     action: [
  //       {
  //         character_id: 'Robot',
  //         script: 'Did you know, in a time like this...',
  //         animation: 'talking1',
  //         voice_id: '2',
  //         duration: 0.673
  //       },
  //       {
  //         character_id: 'Revenant',
  //         script: 'Enough! just keep silent!',
  //         animation: 'talking2',
  //         voice_id: '1',
  //         duration: 0.635
  //       }
  //     ],
  //     total_duration: 1.308,
  //     camera_type: 'c2_cu'
  //   },
  //   scene3: {
  //     action: [
  //       {
  //         character_id: 'Robot',
  //         script: 'Final chance, bare left here.',
  //         animation: 'talking3',
  //         voice_id: '1',
  //         duration: 0.569
  //       },
  //       {
  //         character_id: 'Revenant',
  //         script: ' Or what?! Furious servlet?',
  //         animation: 'talking3',
  //         voice_id: '2',
  //         duration: 0.607
  //       }
  //     ],
  //     total_duration: 1.176,
  //     camera_type: 'c2_f'
  //   },
  //   scene4: {
  //     action: [
  //       {
  //         character_id: 'Robot',
  //         script: 'Or we multiply the chances of getting doomed.',
  //         animation: 'talking1',
  //         voice_id: '1',
  //         duration: 0.843
  //       },
  //       {
  //         character_id: 'Revenant',
  //         script: 'Cut the crap and guide.',
  //         animation: 'talking2',
  //         voice_id: '2',
  //         duration: 0.55
  //       }
  //     ],
  //     total_duration: 1.393,
  //     camera_type: 'c2_t'
  //   }
  // }
  // const convertJsonObjectToJsonArrayForUE = (scenes) => {
  //   const convertedArray = Object.keys(scenes).map(sceneKey => {
  //     const scene = scenes[sceneKey]

  //     return {
  //       action: scene.action.map(action => {
  //         return {
  //           character_id: action.character_id,
  //           script: action.script,
  //           animation: action.animation,
  //           voice_id: action.voice_id,
  //           duration: action.duration
  //         }
  //       }),
  //       total_duration: scene.total_duration,
  //       camera_type: scene.camera_type
  //     }
  //   })
  //   // Output the converted array
  //   console.log(convertedArray)
  // }
  // convertJsonObjectToJsonArrayForUE(scenes)

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const product = useSelector(state => state.products)
  const productData = product.productData
  const videoUrl = productData.videoUrl

  const steps = [
    {
      id: 1,
      name: 'Choose the world'
    },
    {
      id: 2,
      name: 'Choose the character'
    },
    {
      id: 3,
      name: 'New Project'
    },
    {
      id: 4,
      name: 'Making Video'
    },
    {
      id: 5,
      name: 'Finished Video'
    }
  ]

  const [step, setStep] = useState({ id: steps[0].id })
  const [stepName, setStepName] = useState({ name: 'Choose the world' })

  const [snackData, setSnackData] = useState({ open: false, text: '' })

  const handleClose = () => {
    setSnackData({ open: false })
  }

  const handleNext = () => {
    if ((step.id === 1) & (Object.keys(productData.world).length !== 0)) {
      const updatedStep = { ...step, id: step.id + 1 }
      setStep(updatedStep)
    }
    if ((step.id === 1) & (Object.keys(productData.world).length === 0)) {
      setSnackData({ open: true, text: 'Please select world' })
    }
    if ((step.id === 2) & (Object.keys(productData.character).length === 2)) {
      const updatedStep = { ...step, id: step.id + 1 }
      setStep(updatedStep)
    }
    if ((step.id === 2) & (Object.keys(productData.character).length !== 2)) {
      setSnackData({ open: true, text: 'Please select 2 character' })
    }
    if (
      (step.id === 3) &
      (productData.newProject.title !== '' &&
        productData.newProject.character1Info !== '' &&
        productData.newProject.character2Info !== '' &&
        productData.newProject.storyIdea !== '')
    ) {
      setLoading(true)
      // setFirstApiStep(true)

      axios
        .post(
          `${import.meta.env.VITE_BACKEND_API_URL}/process/json_process`,
          product
        )
        .then(response => {       
          setLoading(false)  
          const updatedStep = { ...step, id: step.id + 1 }
          setStep(updatedStep)
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
              const updatedStep = { ...step, id: step.id + 1 }
              setStep(updatedStep)
            } else if (error.response.status === 404) {
              setSnackData({ open: true, text: 'There is no API found' })
              //setSnackData({ open: true, text: result.payload.error })
              const updatedStep = { ...step, id: step.id + 1 }
              setStep(updatedStep)
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

      // const jsonData = dispatch(getJson(productData))

      // jsonData.then(result1 => {
      //   // const updatedStep = { ...step, id: step.id + 1 }
      //   // setStep(updatedStep)
      //   setLoading(false)
      //   console.log(result1)
      //   // if(result1.payload.status === 200) {
      //   //   const updatedStep = { ...step, id: step.id + 1 }
      //   //   setStep(updatedStep)
      //   // }
      //   if (result1.payload.status === 404) {
      //     setSnackData({ open: true, text: 'There is no API found' })
      //     //setSnackData({ open: true, text: result.payload.error })
      //     const updatedStep = { ...step, id: step.id + 1 }
      //     setStep(updatedStep)
      //   } else if (result1.payload.status === 500) {
      //     setSnackData({ open: true, text: 'Internal Server Error' })
      //   } else if (result1.payload.status === 503) {
      //     setSnackData({
      //       open: true,
      //       text: 'Server is busy. Please try again later.'
      //     })
      //   } else if (result1.payload.status === 400) {
      //     setSnackData({ open: true, text: 'Error parsing JSON data.' })
      //   } else if (result1.payload.status === 405) {
      //     setSnackData({ open: true, text: 'Unsupported HTTP method.' })
      //   } else {
      //     setSnackData({ open: true, text: 'Network Error.' })
      //   }
      // })
    }
    if (
      (step.id === 3) &
      (productData.newProject.title == '' ||
        productData.newProject.character1Info == '' ||
        productData.newProject.character2Info == '' ||
        productData.newProject.storyIdea == '')
    ) {
      setSnackData({ open: true, text: 'Please input all data' })
    }
  }
  const handlePrev = () => {
    setLoading(false)
    const updatedStep = { ...step, id: step.id - 1 }
    setStep(updatedStep)
  }
  const handleFinish = () => {
    setLoading(false)
    const updatedStep = {
      id: 1,
      name: 'Choose the world'
    }
    setStep(updatedStep)
  }

  useEffect(() => {
    const resultStep = steps.find(obj => obj.id === step.id)
    setStepName(resultStep.name)
  }, [step])

  useEffect(() => {
    setLoading(false);
    if (videoUrl !== null) {
      const updatedStep = { ...step, id: step.id + 1 }
      setStep(updatedStep)
    }
  }, [videoUrl])

  const CircularColor = () => {
    return (
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ height: '60vh' }}
      >
        <h2>One moment please...</h2>
        <h2>Making Script...</h2>
        <CircularProgress color='info' size={50} />
      </Stack>
    )
  }

  return (
    <Card
      xs={12}
      component={Stack}
      spacing={3}
      direction='row'
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx
      }}
      {...other}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' component='h2'>
            {`${stepName} (Step ${step.id} of 5)`}
          </Typography>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={snackData.open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity='warning'
              sx={{ width: '100%' }}
            >
              {snackData.text}
            </Alert>
          </Snackbar>
        </Grid>
        <Grid item xs={12}>
          {step.id !== 1 && (
            <Button
              variant='contained'
              onClick={handlePrev}
              sx={{ left: '3%', position: 'absolute', zIndex: 1 }}
            >
              Prev
            </Button>
          )}
          {step.id !== 5 ? (
            <Button
              variant='contained'
              onClick={handleNext}
              sx={{ right: '3%', position: 'absolute', zIndex: 1 }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant='contained'
              sx={{ right: '5%', position: 'absolute', zIndex: 1 }}
              onClick={handleFinish}
            >
              Finish
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <br />
          {loading ? (
            <CircularColor />
          ) : (
            <>
              {step.id === 1 && <Step1 />}
              {step.id === 2 && <Step2 />}
              {step.id === 3 && <Step3 />}
              {step.id === 4 && <Step4 />}
              {step.id === 5 && <Step5 />}
            </>
          )}
        </Grid>
      </Grid>
    </Card>
  )
}

// AppWidgetSummary.propTypes = {
//   color: PropTypes.string,
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//   sx: PropTypes.object,
//   title: PropTypes.string,
//   total: PropTypes.number
// }
