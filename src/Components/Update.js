import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const {taskID} = useParams();

    const {register,handleSubmit,setValue} = useForm();

    const Navigate = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/Todo-List/${taskID}`);
        setValue('task',result.data.task);
        setValue('desc',result.data.desc);
    }

    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function updateData(data){
        axios.put(`http://localhost:5000/Todo-List/${taskID}`,data);
        Navigate('/');
    }



  return (
    <>
        <div className='container'>
            <h2 className='text-center my-5'>Update To-Do</h2>
            <form onSubmit={handleSubmit(updateData)}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Task</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register('task')}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" {...register('desc')}/>
                </div>
                <input type='submit' value='Update To-Do' className='btn btn-success'/>
            </form>
        </div>
    </>
  )
}

export default Update