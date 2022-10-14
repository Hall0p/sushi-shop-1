import { configureStore } from '@reduxjs/toolkit'
import {sumReducer} from "./sumReducer";

export default configureStore({
  reducer: {sum: sumReducer}
})