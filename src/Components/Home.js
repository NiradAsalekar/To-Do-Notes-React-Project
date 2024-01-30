import React from 'react'
import { NavLink } from 'react-router-dom'
import Cards from './Cards'

function Home() {
  return (
    <>
        <div className='container'>

            <div className='header text-center my-5'>
                <h1>To Do App</h1>
                <NavLink to="/form" className="btn btn-outline-success my-3">Create New To-Do</NavLink>
                <hr/>
            </div>

            <div className='cards'>
              <Cards/>
            </div>

        </div>
    </>
  )
}

export default Home