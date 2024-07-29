import React from 'react'
import { countDown, countUp } from '../redux/countSlice'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName } from '../redux/userSlice'
import { avg, changeChecked } from '../redux/studentSlice'

export default function Bt1() {
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.count.value)
    const user=useSelector(state=>state.user.user)
    const student=useSelector(state=>state.student.student)
    const checked= useSelector(state=>state.student.checked)
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=>dispatch(countUp())}>count up</button>
        <button onClick={()=>dispatch(countDown())}>count down</button>
        <h1>name: {user.name}</h1>
        <h1>age: {user.age}</h1>
        <button onClick={()=>dispatch(changeName("lê gà"))}>changeName</button>
        <button onClick={()=>dispatch(changeAge(6))}>changeAge</button>
        <h1>name: {student.name}</h1>
        <h1>age: {student.age}</h1>
        <h1>math: {student.math}</h1>
        <h1>pro: {student.pro}</h1>
        <h1>avg: {student.avg}</h1>
        <h1>checked: {checked?"true":"false"}</h1>
        <button onClick={()=>dispatch(changeChecked())}>changeChecked</button>
        <button onClick={()=>dispatch(avg())}>Ave</button>
    </div>
  )
}
