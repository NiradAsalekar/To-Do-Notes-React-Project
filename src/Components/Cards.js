import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom';


function Cards() {

    const[task,setTask] = useState([]);

    async function fetchdata(){
        const result = await axios.get('http://localhost:5000/Todo-List');
        setTask(result.data)
    }

    useEffect(()=>{
        fetchdata();
    },[]);

  return (
    <>
        <div className="row row-cols-1 row-cols-md-2 g-4">
        {
            task.map(ele=>{
                return(
                   
                    <div className="col-sm-6">
                        <div className="card border-dark">
                        <div className="card-body">
                            <h5 className="card-title">{ele.task}</h5>
                            <p className="card-text">{ele.desc}</p>
                            <NavLink to={`/update/${ele.id}`} className="btn btn-outline-warning btn-sm">Update</NavLink>
                            <NavLink to={`/delete/${ele.id}`} className="btn btn-outline-danger btn-sm mx-3">Delete</NavLink>
                        </div>
                        </div>
                    </div> 
                )
            })
        }
        </div>   
    </>
  )
}

export default Cards