import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
    err:"",
  },
  reducers: {
    increment: state => {
      if(state.value < 40){
        state.value += 1;
        state.err ="" 
      }else{
          state.err ="We cannot increment the value" 
        }
      },
    decrement: state => {
      if(state.value > 0){
      state.value -= 1;
      state.err =""}else{
        state.err ="We cannot decrement the value"
      }
    },
    incrementByAmount: (state, action) => {
      if(action.payload >= 1 && action.payload <= 6){
       state.value += action.payload
        state.err =""}else{
         state.err ="Value is less than 1 or greater than 6"
        }/*
        if(action.payload <= 6){
          state.value += action.payload;
          state.err =""}else{
            state.err ="Value is greater than 6"
            state.value = state.value;
          }*/
          if(action.payload == ""){
              state.err ="Input is empty"
            }
      }
  },
});

export const { increment, decrement,incrementByAmount } = slice.actions;

export const selectCount = state => state.counter.value;
export const errors = state => state.counter.err;


export default slice.reducer;
