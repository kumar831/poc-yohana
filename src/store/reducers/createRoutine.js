import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    routine: [],
    showActionPopup: false,
    showFormPopup: false,
    allActions: '',
    allRoutines: ''
}

export const createRoutine = createSlice({
    name: 'routine',
    initialState,
    reducers: {
        setRoutineDetails: (state, action) => {
            state.routine.push(action.payload);
        },
        setShowActionPopup: (state, action) => {
            state.showActionPopup = action.payload;
        },
        setFormPopup: (state, action) => {
            state.showFormPopup = action.payload;
        },
        setActions: (state, action) => {
            state.allActions = action.payload;
        },
        setAllRoutines: (state,action) => {
            state.allRoutines = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setRoutineDetails, setShowActionPopup, setFormPopup, setActions, setAllRoutines } = createRoutine.actions

export default createRoutine.reducer