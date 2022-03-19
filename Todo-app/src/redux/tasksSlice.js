import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "task",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id:  +1,
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;