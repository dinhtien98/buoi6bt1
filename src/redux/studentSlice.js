import { createSlice } from "@reduxjs/toolkit";

const initialState={
    student:{
        name:"lê mèo",
        age: 2,
        math:9,
        pro:8,
        avg:0
    },
    checked: false
}

const studentSlice=createSlice({
    name:"student",
    initialState,
    reducers:{
        avg(state){
            state.student.avg=(state.student.math+state.student.pro)/2
        },
        changeChecked(state){
            state.checked=!state.checked
        }
    }
})

export const {avg,changeChecked} = studentSlice.actions
export default studentSlice.reducer