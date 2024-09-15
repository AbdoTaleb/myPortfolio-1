import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/underline.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useState } from 'react';

function Services() {

  const [expandedService, setExpandedService] = useState(Array(Services_Data.length).fill(false)); // Manage expanded state for each service

  const toggleExpand = (index) => {
    const newExpandedState = [...expandedService];
    newExpandedState[index] = !newExpandedState[index];
    setExpandedService(newExpandedState);
  };
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index)=>{
          const [isExpanded, setIsExpanded] = useState(false);
          return <div key={index} className={`services-format ${isExpanded ? "expanded" : ""}`}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore" onClick={() => setIsExpanded(!isExpanded)}>
            <p>{isExpanded ? "Read Less" : "Read More"}</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
