import React from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Form() {

    const{register,handleSubmit} = useForm()

    const Navigate = useNavigate()

    let saveData=data=>{
        axios.post('http://localhost:5000/Todo-List',data)
        Navigate('/')
    }

  return (
    <>
        
        <div className='container'>
            <h2 className='text-center my-5'>New To-Do</h2>
            <form onSubmit={handleSubmit(saveData)}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Task</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register('task')}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" {...register('desc')}/>
                </div>
                <input type='submit' value='Create To-Do' className='btn btn-success'/>
            </form>
        </div>
    </>
  )
}

export default Form