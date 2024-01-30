import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    
    const {taskID} = useParams();

    const Navigate = useNavigate();

    const [task,setTask] = useState({});

    async function fetchdata(){
        const result = await axios.get(`http://localhost:5000/Todo-List/${taskID}`);
        setTask(result.data)
    }

    function deleteStudent(){
        axios.delete(`http://localhost:5000/Todo-List/${taskID}`);
        Navigate('/')
    }

    useEffect(()=>{
        fetchdata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <>
        <div className='container text-center'>
           
            <form onSubmit={()=>deleteStudent()}>
                <div class="card m-5">
                <div class="card-header">
                    Delete Confirmation
                </div>
                <div class="card-body">
                    <h5 class="card-title">{task.task}</h5>
                    <p class="card-text">{task.desc}</p>
                    <input type='submit' value="YES" className='btn btn-outline-danger'></input>
                    <NavLink to='/' className='btn btn-outline-success mx-2'>NO</NavLink>
                </div>
                </div>

            </form>
        </div>
        

    </>
  )
}

export default Delete