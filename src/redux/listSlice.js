import {createSlice} from '@reduxjs/toolkit';

const initialState={
    students:[
        {id:1,name:"lê mèo",checked:false},
        {id:2,name:"lê nai",checked:false},
        {id:3,name:"lê gà",checked:true},
    ],
    checkedAll:false,
}
const listSlice=createSlice({
    name:"students",
    initialState,
    reducers:{
       addNewStudent(state,action){
        let maxId = state.students.reduce(
            (index, item) => Math.max(item.id, index),
            -Infinity
          );
        state.students=[...state.students,{id:state.students.length<=0?1:maxId+1,name:action.payload,checked:false}]
       },
       deleteStudent(state,action){
        state.students=state.students.filter(item=>item.id!==action.payload)
       }
    }
})
export const {addNewStudent, deleteStudent} = listSlice.actions
export default listSlice.reducer