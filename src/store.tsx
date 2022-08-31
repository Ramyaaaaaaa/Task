import { Action, combineReducers, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { Api } from "./services/api";
import ViewSliceReducer from "./slice";
const appReducer = combineReducers({[Api.reducerPath]:Api.reducer,
 ViewSlice:ViewSliceReducer,
 
})
export const store = configureStore({  
  reducer:appReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(Api.middleware)
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;