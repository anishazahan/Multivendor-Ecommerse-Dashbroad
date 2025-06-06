import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      // console.log(data);
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const seller_login = createAsyncThunk(
  "auth/seller_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const seller_register = createAsyncThunk(
  "auth/seller_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      // console.log(info);
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      console.log(data);
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
    // role: returnRole(localStorage.getItem('accessToken')),
    // token: localStorage.getItem('accessToken')
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [admin_login.pending]: (state, _) => {
      state.loader = true;
    },
    [admin_login.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [admin_login.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      // state.token = payload.token;
      // state.role = returnRole(payload.token);
    },
    [seller_login.pending]: (state, _) => {
      state.loader = true;
    },
    [seller_login.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [seller_login.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      // state.token = payload.token;
      // state.role = returnRole(payload.token);
    },
    [seller_register.pending]: (state, _) => {
      state.loader = true;
    },
    [seller_register.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [seller_register.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      // state.token = payload.token;
      // state.role = returnRole(payload.token);
    },
    //     [get_user_info.fulfilled]: (state, { payload }) => {
    //         state.loader = false
    //         state.userInfo = payload.userInfo
    //         state.role = payload.userInfo.role
    //     },
    //     [profile_image_upload.pending]: (state, _) => {
    //         state.loader = true
    //     },
    //     [profile_image_upload.fulfilled]: (state, { payload }) => {
    //         state.loader = false
    //         state.userInfo = payload.userInfo
    //         state.successMessage = payload.message
    //     },
    //     [profile_info_add.pending]: (state, _) => {
    //         state.loader = true
    //     },
    //     [profile_info_add.fulfilled]: (state, { payload }) => {
    //         state.loader = false
    //         state.userInfo = payload.userInfo
    //         state.successMessage = payload.message
    //     },
  },
});
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
