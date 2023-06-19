import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    routine: {},
    showActionPopup: false,
    showFormPopup: false,
}

export const createRoutine = createSlice({
    name: 'routine',
    initialState,
    reducers: {

        //Update Later 

        // setRoutineName: (state, action) => {
        //     state.routine_name = action.payload
        // },
        // setRoutineType: (state, action) => {
        //     state.routine_type = action.payload
        // },
        // setDays: (state, action) => {
        //     state.days = action.payload
        // },
        // setFrequency: (state, action) => {
        //     state.frequency = action.payload
        // },
        setRoutineDetails: (state, action) => {
            state.routine = action.payload;
        },
        setShowActionPopup: (state,action) => {
            state.showActionPopup = action.payload;
        },
        setFormPopup: (state,action) => {
            state.showFormPopup = action.payload;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setRoutineDetails, setShowActionPopup, setFormPopup} = createRoutine.actions

export default createRoutine.reducer