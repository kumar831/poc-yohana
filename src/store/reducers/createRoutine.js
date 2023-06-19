import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    routine: {}
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
            state.routine = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setRoutineName, setRoutineType, setDays, setFrequency, setRoutineDetails} = createRoutine.actions

export default createRoutine.reducer