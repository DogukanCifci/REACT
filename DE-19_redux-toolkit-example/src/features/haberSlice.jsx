import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const API_KEY = '02d142c50d8b4247b974b25323435174';

export const getData = createAsyncThunk(
"haberSlice/getData",
async()=>{
 const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

 const data= await axios(url)
// console.log(data);
return data.data.articles;
}

)



export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },
  reducers: {
    clearList: (state) => {
      state.haberler = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.haberler = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearList } = haberSlice.actions;

export default haberSlice.reducer;