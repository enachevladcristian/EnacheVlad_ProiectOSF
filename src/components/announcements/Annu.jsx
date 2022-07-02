import React from 'react'

const Annu = () => {
    const myStyle = {
        width:"30%",
        height:"340px",
    }
    const myStyle1 = {
        width:"68%",
        height:"340px",
    }
  return (
    <>
        <section className="annouc background">
            <div className="container d_flex">
                <div className="image-banner" style={myStyle}>
                    <img src="./images/banner-1.png" width='100%' height='100%' />
                </div>
                <div className="image-banner" style ={myStyle1}>
                    <img src="./images/banner-2.png" width='100%' height='100%' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Annu
