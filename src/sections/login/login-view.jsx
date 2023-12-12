import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userLogin } from 'src/store/reducers/user'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LoadingButton from '@mui/lab/LoadingButton'
import { alpha, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

import { useNavigate } from 'react-router-dom'

import { useRouter } from 'src/routes/hooks'

import { bgGradient } from 'src/theme/css'

import Logo from 'src/components/logo'
import Iconify from 'src/components/iconify'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

// ----------------------------------------------------------------------

export default function LoginView () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme()

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  
  const [snackData, setSnackData] = useState({ open: false, text: '' })

  const handleLoginClick = () => {
    if (email === '' || password === '') {
      setSnackData({ open: true, text: 'Please input all data' })
    } else {
      let response = dispatch(userLogin({ email, password }))
      response.then(result => {
        // 'result' here is the resolved value of the promise
        //console.log(result.payload.success);
        if (result.payload.success) navigate('/overview')
        else setSnackData({ open: true, text: "Wrong Credintial" })
        // You can now access the 'arg' property of the resolved object
        //const argObject = result.arg;
        //console.log(argObject);
        // You can also access other properties of the resolved object if needed
        //const requestId = result.requestId;
        //console.log(requestId);
      })
    }
  }
  const handleClose = () => {
    setSnackData({...snackData, open: false })
  }
  function SignUp () {
    navigate('/register')
  }
  const renderForm = (
    <>
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

      <Stack spacing={3}>
        <TextField
          name='email'
          label='Email'
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          name='password'
          label='Password'
          type={showPassword ? 'text' : 'password'}
          onChange={e => {
            setPassword(e.target.value)
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge='end'
                >
                  <Iconify
                    icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                  />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Stack>

      <Stack
        direction='row'
        alignItems='center'
        justifyContent='flex-end'
        sx={{ my: 3 }}
      >
        <Link variant='subtitle2' underline='hover'>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size='large'
        type='submit'
        variant='contained'
        color='inherit'
        onClick={handleLoginClick}
      >
        Login
      </LoadingButton>
    </>
  )

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg'
        }),
        height: 1
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          width: '300px',
          height: '300px'
        }}
      />

      <Stack alignItems='center' justifyContent='center' sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420
          }}
        >
          <Typography variant='h4'>Sign in Stroy Loom AI</Typography>

          <Typography variant='body2' sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant='subtitle2' sx={{ ml: 0.5 }} onClick={() => SignUp()}>
              Get started
            </Link>
          </Typography>

          <Stack direction='row' spacing={2}>
            <Button
              fullWidth
              size='large'
              color='inherit'
              variant='outlined'
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon='eva:google-fill' color='#DF3E30' />
            </Button>

            <Button
              fullWidth
              size='large'
              color='inherit'
              variant='outlined'
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon='eva:facebook-fill' color='#1877F2' />
            </Button>

            <Button
              fullWidth
              size='large'
              color='inherit'
              variant='outlined'
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon='eva:twitter-fill' color='#1C9CEA' />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  )
}
