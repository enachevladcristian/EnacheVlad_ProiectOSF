import React from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom"
import Modal from '../../components/Modal/Modal'
import { useState } from 'react'

const Search = ({cartItem}) => {
  const [openModal,setOpenModal] = useState(false)
  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active",window.scrollY > 100)
  })
  return (
    <>
        <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <img src={logo} alt="" />
                </div>

                <div className="search-box f_flex">
                  <i className="fa fa-search"></i>
                  <input type="text" placeholder='Search...' />
                  <span>All category</span>
                </div>
                <div className="icon f_flex width">
                  <i className="fa fa-user icon-circle login-icon" onClick={()=>{
                    setOpenModal(true)
                  }}></i>
                  {
                    openModal && <Modal closeModal={setOpenModal}/>
                  }
                  <div className="cart">
                    <Link to='/cart'>
                      <i className='fa fa-shopping-bag icon-circle'></i>
                      <span>{cartItem.length === 0?"" :cartItem.length}</span>
                    </Link>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Search
