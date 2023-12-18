import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, {AxiosError} from 'axios'

import.meta.env.BACKEND_API_URL

const initialState = {
  loading: false,
  productData: {
    world: {},
    character: {},
    newProject: {
      title: "They are lost in a soul city",
      character1Info:
        'character1 is a small annoying robot, that talks to much and thinks it knows everything.',
      character2Info:
        'character2 is A sci fi gun slinger, whose first response is to shoot.',
      storyIdea: 'They are lost in a soul city'
    },
    videoUrl: null
  }
}

export const getJson = createAsyncThunk(
  'products/getJson',
  async (productData, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      console.log(productData)
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/process/json_process`,
        {
          productData,
          config
        }
      )
      console.log(response.data)
      return response.response
    } catch (error) {

      console.log(error.response.status);
      return error.response;
      // if (error.response) {
      //   // The request was made and the server responded with a status code
      //   console.log(error.response.data); // This will contain the response data
      //   console.log(error.response.status); // This will contain the status code
      //   console.log(error.response.headers); // This will contain the response headers
      // } else if (error.request) {
      //   // The request was made but no response was received
      //   console.log(error.request);
      // } else {
      //   // Something happened in setting up the request that triggered an error
      //   console.log('Error', error.message);
      // }
      // console.log(error.config);


      //console.log(error)
      //throw error
      return rejectWithValue(error.response.data);
    }
  }
)

export const getUEData = createAsyncThunk(
  'products/getUEData',
  async (jsonData, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/process/media_process`,
        {
          jsonData,
          config
        }
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
)

export const getVideoUrl = createAsyncThunk(
  'products/getVideoUrl',
  async (ueData, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }      
      //console.log(ueData)
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/process/get_url`,
        {
          ueData,
          config
        }
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      
      return error.response;
      // console.log(error)
      // throw error
    }
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductWorld: (state, action) => {
      state.productData = { ...state.productData, world: action.payload }
    },
    addProductCharacter: (state, action) => {
      state.productData = { ...state.productData, character: action.payload }
    },
    addProductNewProject: (state, action) => {
      state.productData = { ...state.productData, newProject: action.payload }
    },
    videoUrlSet: (state, action) => {
      state.productData = { ...state.productData, videoUrl: action.payload }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getJson.pending, state => {
        state.loading = true
      })
      .addCase(getJson.fulfilled, (state, action) => {
        //state.loading = false
        //state.productData = { ...state.productData, jsonData: action.payload }
      })
      .addCase(getJson.rejected, state => {
        state.loading = false
      })
      .addCase(getUEData.pending, state => {
        state.loading = true
      })
      .addCase(getUEData.fulfilled, (state, action) => {
        state.loading = false
        state.productData = { ...state.productData, UEData: action.payload }
      })
      .addCase(getUEData.rejected, state => {
        state.loading = false
      })
      .addCase(getVideoUrl.pending, state => {
        state.loading = true
      })
      .addCase(getVideoUrl.fulfilled, (state, action) => {
        state.loading = false
        state.productData = { ...state.productData, url: action.payload }
      })
      .addCase(getVideoUrl.rejected, state => {
        state.loading = false
      })
  }
})
export const {
  setHeaders ,
  addProductWorld,
  addProductCharacter,
  addProductNewProject,
  videoUrlSet,
  setWaitingTimeTrue,
  setWaitingTimeFalse
} = productsSlice.actions
export default productsSlice.reducer
