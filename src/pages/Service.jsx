import React from 'react'
import '../css/Service.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";


const Service = () => {
  return (
    <div className='services'>
        <div className="serv-container">
            <h1 className="sub-title">My Services</h1>
            <div className="service-list">
            <div> 
               
               <i className='web-icon'> <FaCode /> </i>
                <h2>Web Developer</h2>
            <p>A Web developer from A-Tech Academy learnt backend and frontend 
                 between 5 months and open for jobs 
                from a lot of remote job website.</p>
                <a href="#">Learn more</a>
                </div>
        
        <div>
            <i class="crop-icon"><FaShoppingCart /></i>
            <h2>E-commerce website</h2>
            <p>Built an E-commerce app This app allows users to add new products
                 and remove existing ones with ease, providing a clean
                  interface for basic inventory handling.</p>
                <a href="#">Learn more</a>
                </div>
             <div>
                  <i className='app-icon'> <FaAppStore /></i>
            <h2>Mern Websites</h2>
            <p> Am a passionate MERN Stack Developer with 5 months of hands-on 
                experience building modern web applications using 
                MongoDB, Express.js, React, and Node.js.</p>
                <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
