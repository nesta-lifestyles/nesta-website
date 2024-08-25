import { configureStore } from "@reduxjs/toolkit";
import overlayReducer  from "./components/overlay/overlay_reducer";


export const appStore = configureStore({
    reducer:{
        showOverlayState : overlayReducer,
    }
});