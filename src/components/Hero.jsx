import React from 'react'
import 'bootstrap'
import { Link } from 'react-router-dom';

export default function Hero(props) {
   const {title,subTitle,image,desc,isBorder} =  props;

  return (
    <section>
    <div className="container">
      <h4>{title}</h4>
      <div className="content-for-you">
        <div className="image">
          <img src={image} alt="Food Image" />
          <div className={isBorder ? 'border' : 'boxs'}></div>
        </div>
        <div className="form-desc">
          <ul>
            <h3>{subTitle}</h3>
            <div className="line"></div>
            <h6>
              {desc}
            </h6>
            <Link to="/recipe" className='button'>Learn More</Link>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
