import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {deleteTodo} from '../Redux/action'
import {Link} from 'react-router-dom'

 export const Output = () => {
    const todos = useSelector((store) => store.todo);
    const dispatch = useDispatch();
    
    return (
        <div className="output_div">
        <div>
        {
          todos.map(({text, id, status})=> {
            return (
              <div className="output_main" key={id}>
                <div className='output_div1'>
                <Link to={`/todo/${id}`} >
                <p>{text}</p>
              </Link>
                </div>
                <div>
                  <p>
                      Status : <span>{status ? 'true' : 'false'}</span>
                  </p>
                </div>
                <div className='output_last'>
                  <button onClick={()=>{
                  dispatch(deleteTodo(id))
                  }}>
                  Delete
                  </button>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
}
