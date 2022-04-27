import React from 'react'
import { Link } from 'react-router-dom'
import style from "../css/card.module.css"

export default function Card(props) {
  const {image,caption,id} = props
  return (
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Link className={style.card} to={`/recipe/${id}`}>
            <img className={style.img} src={image} alt="Food Image" />
            <p className={style.carouselCaption}>{caption}</p>
          </Link>
          </div>

  )
}
