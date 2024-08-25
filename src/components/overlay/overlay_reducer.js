import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isShowOverlay: false
}



export const overlayReducer = createSlice({
    name:"overlayStateSlice",
    initialState,
    reducers:{
        openOverlay : (state) =>{
            console.log("OPEN OVERLAY CALLED")
            return{...state,
                isShowOverlay :true
            } 
        },
        closeOverlay : (state) => {
            state.isShowOverlay = false
        },
        getOverlay : (state) =>{
            return state
        }
    }
});

// export const selectIsShowOverlay = (state) => state.overlayStateSlice.isShowOverlay;

export const { openOverlay, closeOverlay} = overlayReducer.actions;


export default overlayReducer.reducer;


