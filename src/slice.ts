import { createSlice,PayloadAction } from "@reduxjs/toolkit";
export type SliceState = {
    paginationProps: {
        current: number;
        pageSize: number;
      };    
    
}  
const initialState:SliceState = {
    paginationProps: {
        current: 1,
        pageSize: 10
      }
  }
   const ViewSlice = createSlice({
    name:"ViewSlice",
    initialState:initialState,
    reducers:{
        updatePaginationProps: (state, action) => {
            return {
              ...state,
              paginationProps: {
                current: action.payload.current,
                pageSize: action.payload.pageSize
              }
            };
          }
    }
  })
  const { actions, reducer } = ViewSlice;

  export const {updatePaginationProps} = actions;
  export default reducer;