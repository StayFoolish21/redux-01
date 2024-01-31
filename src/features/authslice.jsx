// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate ,useLocation} from 'react-router-dom';

const navigate = useNavigate
const location = useLocation


// Thunk untuk pemanggilan API login
// const navigate = useNavigate() ;

export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const response = await axios.post('https://api-car-rental.binaracademy.org/customer/auth/login', {
      email,
      password,
    });
    console.log (response)

    // Simpan token di local storage setelah login berhasil
    localStorage.setItem('accessToken', response.data.access_token);


    return response.data;
  } catch (error) {
    console.log (error)
    throw error.response ? error.response.data.message : error.message;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('accessToken') || null, // Ambil token dari local storage
    isAuthenticated: !!localStorage.getItem('accessToken'), // Periksa apakah token tersedia
    isLoading: false,
    error: null,
    lastVisitedPage: null,
  },
  reducers: {
    logout: (state) => {
      // Hapus token dari local storage setelah logout
      localStorage.removeItem('token');
      state.isAuthenticated = false;
    },

    setLastVisitedPage: (state, action) => {
      state.lastVisitedPage = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export const { setLastVisitedPage } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
