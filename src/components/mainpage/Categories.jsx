import React from 'react'

const Categories = () => {
    const data = [
      {
          cateImg:"./images/category/cat1.png",
          cateName:"Fashion",
      },
      {
        cateImg:"./images/category/cat2.png",
        cateName:"Books",
      },
      {
        cateImg:"./images/category/cat3.png",
        cateName:"Perfumes",
      },
      {
        cateImg:"./images/category/cat4.png",
        cateName:"Sport Gear",
      },
      {
        cateImg:"./images/category/cat5.png",
        cateName:"Smart Phones",
      },
      {
        cateImg:"./images/category/cat6.png",
        cateName:"Smart Gear",
      },
      {
        cateImg:"./images/category/cat7.png",
        cateName:"Pets",
      },
      {
        cateImg:"./images/category/cat8.png",
        cateName:"Art",
      },
      {
      cateImg:"./images/category/cat9.png",
      cateName:"Hobbies",
      },
      {
      cateImg:"./images/category/cat10.png",
      cateName:"Time",
      },
      {
      cateImg:"./images/category/cat11.png",
      cateName:"Magazines",
      },
      
      
    ]
  return (
    <>
      <div className="category">
        {
            data.map((value,index) =>{
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Categories
