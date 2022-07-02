import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
            <div className="box">
                <h1>Enache Vlad</h1>
                <p>This site was made using React JS</p>
                <div className="icon d_flex">
                    <div className="img d_flex">
                        <i className="fa-brands fa-google-play"></i>
                        <span>Google Play</span>
                    </div>
                    <div className="img d_flex">
                        <i className="fa-brands fa-app-store-ios"></i>
                        <span>Apple Store</span>
                    </div>
                </div>
            </div>

            <div className="box">
                <h2>About Us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cares</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="box">
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track your order</li>
                <li>Bulk Purchasing </li>
                <li>Returns and Refunds</li>
              </ul>
            </div>
            <div className="box">
              <h2>Contact Us</h2>
              <ul>
                <li>Bucharest,Romania</li>
                <li>Email: randomemail@gmail.com</li>
                <li>Phone: +40 123 456 789</li>
              </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
