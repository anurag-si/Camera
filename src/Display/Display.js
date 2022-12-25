import React from 'react'
import './Display.css'
import { Navigate, useNavigate } from 'react-router-dom';

const Display = ({img,setImg}) => {
  const navigate=useNavigate();
  return (
    <div className='display'>
      <img src={img}/>
      <h2 className='text1'>Great Pic!</h2>
      <button className='btn-2' onClick={() => {
                navigate("/")}}>Click Again</button>
    </div>
  )
}

export default Display
