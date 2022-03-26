import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/action'
import {Output} from "../Components/Output"

 export const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id : '',
    text : '',
    status : false,
  })
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addTodo({...data, id:uuid()}));
  }
  return (
    <>
    <div className="container">
      <h1>Add Todo Task</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" placeholder="enter your task" onChange={(e)=>{
          let value = e.target.value;
          setData({...data, text : value})
        }} />
        <button>
          Submit
        </button>
      </form>
    </div>
      <Output />
  </>
  )
}