import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add_Status} from '../Redux/action'
import {useParams} from 'react-router-dom'

export const Id = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const todo = useSelector((store) => {
        return store.todo.find(todo => todo.id === id)
    });
    console.log(todo);
    const [change, setChange] = useState(todo.status)
    const handleData = () =>{
        setChange(!todo.status);
    }
    useEffect(()=>{
        handleData();
    },[])
    return (
        <div>
        <div className="data">
            <p>{todo.id}</p>
            <p>{todo.text}</p>
            <button onClick={()=>{
                handleData()
                dispatch(add_Status(id))
            }}>{change ? 'true' : 'false'}</button>
        </div>
    </div>
    )
}