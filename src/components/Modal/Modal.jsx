import React from 'react'
import { useState } from 'react'
import './Modal.css'

const Modal = ({closeModal}) => {
    
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <i className="fa-solid fa-xmark" onClick={()=>{
                closeModal(false)
            }}></i>
            <div className="title">
                <h3>Login</h3>
            </div>
            <div className="body">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
            </div>
            <div className="footer">
                <button onClick={()=>{
                closeModal(false)
            }}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Modal

