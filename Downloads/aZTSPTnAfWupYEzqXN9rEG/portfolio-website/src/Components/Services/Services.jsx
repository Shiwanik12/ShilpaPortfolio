import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='services-format'>
            <img src={service.s_img} alt="" />
            <p>{service.s_name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
