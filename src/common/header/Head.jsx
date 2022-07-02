import React from 'react'
import './Header.css'

const Head = () => {
  return (
   <>
        <section className='head'>
            <div className="container d_flex">
                <div className="left row">
                    <i className='fa fa-phone'></i>
                    <label> +40 123 456 789</label>
                    <i className='fa fa-envelope'></i>
                    <label> randomemail@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ</label>
                    <label>Need Help?</label>
                    <span>.....</span>
                    <label htmlFor="">RO</label>
                    <span>.....</span>
                    <label htmlFor="">RON</label>
                </div>
            </div>
        </section>
   </>
  )
}

export default Head
