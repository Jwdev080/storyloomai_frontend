import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  loading: false,
  logined: {
    success: user ? true : false,
    token: user ? user.token : null,
    user: user
      ? user
      : {
          _id: null,
          username: null,
          email: null,
          token: null
        }
  }
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      console.log({ name, email, password })
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/users/register`,
        { username: name, email, password },
        config
      )
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        console.log(error)
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/users/login`,
        { email, password },
        config
      )
      //console.log(data)

      let user = data.user
      user.token = data.token
      user = JSON.stringify(user)
      //store user's token in local storage
      localStorage.setItem('user', user)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userLogout = createAsyncThunk(
  'auth/logout',
  async ({ user }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/users/logout`, user, {
        headers: { Authorization: user.token }
      })
      localStorage.removeItem('user')
      // const navigate = useNavigate()
      // navigate('/')
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        //state.user = { ...state, user: action.payload }
      })
      .addCase(registerUser.rejected, state => {
        state.loading = false
      })
      .addCase(userLogin.pending, state => {
        state.loading = true
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false
        state.logined = action.payload
        //return action.payload
      })
      .addCase(userLogin.rejected, state => {
        state.loading = false
      })
      .addCase(userLogout.pending, state => {
        state.loading = true
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.loading = false
        state.logined = {
          success: false,
          token: null,
          user: {
            _id: null,
            username: null,
            email: null,
            token: null
          }
        }       
      })
      .addCase(userLogout.rejected, state => {
        state.loading = false
      })
  }
})
// export const {  } = usersSlice.actions
export default usersSlice.reducer
