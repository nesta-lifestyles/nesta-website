import { configureStore } from "@reduxjs/toolkit"
import getNestedReducer from "../reducer/index"

export default configureStore({
    reducer:{
        getNested: getNestedReducer,
    }
})
