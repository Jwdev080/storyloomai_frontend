import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getVideo } from '../../store/reducers/products'

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

import Snackbar from '@mui/material/Snackbar'
import CircularProgress from '@mui/material/CircularProgress'
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
  const dispatch = useDispatch()
  const [loading, setLoading] = useState()
  const product = useSelector(state => state.products)
  const productData = product.productData

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
      dispatch(getVideo(productData))
      setLoading(true)
      setTimeout(() => {
        const updatedStep = { ...step, id: step.id + 1 }
        setStep(updatedStep)
        setLoading(false)
      }, 10000)
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
    if (step.id === 4) {
      console.log('last')
    }
  }

  const handlePrev = () => {
    const updatedStep = { ...step, id: step.id - 1 }
    setStep(updatedStep)
  }

  useEffect(() => {
    const result = steps.find(obj => obj.id === step.id)
    setStepName(result.name)
  }, [step])
  useEffect(() => {
    setLoading(false)
  }, [])
  const CircularColor = () => {
    return (
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ height: '60vh' }}
      >
        <h4>One moment please...</h4>
        <CircularProgress color='info' />
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
      {/* <Grid container spacing={3}> */}
        {/* <Grid item xs={12}>
          <Typography variant='h5' component='h2'>
            {`${stepName} (Step ${step.id} of 4)`}
          </Typography>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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
          {step.id !== 4 ? (
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
            </>
          )}
        </Grid> */}
      {/* </Grid> */}
      <Grid container padding="20px">
        <Grid item md={6}>
          <Step1 />
        </Grid>
        <Grid item md={6}>
          <Step2 />
        </Grid>
        <Grid item md={6}>
          <Step3 />
        </Grid>
        <Grid item md={6}>
          <Step4 />
        </Grid>
      </Grid>
    </Card>
  )
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number
}
