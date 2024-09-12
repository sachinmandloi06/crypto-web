import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoin, fetchCoins } from "./coinService";

const coinSlice = createSlice({
      name:"coin",
      initialState : {
        isLoading: false,
        isError : false,
        isSuccess : false,
        coins :[],
        coin : null,
        message : "",
      },
      extraReducers : (builder) => {
        builder
        .addCase(getCoins.pending , (state , action) => {
            state.isLoading = true ;
            state.isError = false ;
            state.isSuccess = false;
    
        })
        .addCase(getCoins.fulfilled , (state , action) => {
            state.isLoading = false ;
            state.isError = false ;
            state.isSuccess = true;
            state.coins = action.payload;
        })
        .addCase(getCoins.rejected , (state , action) => {
            state.isLoading = false ;
            state.isError = true ;
            state.isSuccess = false;
            state.message = action.payload;
        })
        .addCase(getCoin.pending , (state , action) => {
          state.isLoading = true ;
          state.isError = false ;
          state.isSuccess = false;
  
      })
      .addCase(getCoin.fulfilled , (state , action) => {
          state.isLoading = false ;
          state.isError = false ;
          state.isSuccess = true;
          state.coin = action.payload;
      })
      .addCase(getCoin.rejected , (state , action) => {
          state.isLoading = false ;
          state.isError = true ;
          state.isSuccess = false;
          state.message = action.payload;
      })
      },
});

export default coinSlice.reducer;

// Get Coin

export const getCoins = createAsyncThunk("FETCH/COINS" , async(_ , thunkAPI) => {

   try {
        return await fetchCoins();
   } catch (error) {
    return thunkAPI.rejectWithValue(error);
   }

}) 

export const getCoin = createAsyncThunk("FETCH/COIN" , async(id , thunkAPI) => {

  try {
       return await fetchCoin(id);
  } catch (error) {
   return thunkAPI.rejectWithValue(error);
  }

}) 