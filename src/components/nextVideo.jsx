import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nextVideo.css'

export default function Next(props) {
  const {image,title,user,date} = props
  return (
      <>
    <div className="video">
    <img src={image} alt="video" />
    </div>
    <div className="name">
        <Link to="/video">
        {title}
        </Link>
    </div>
    <div className="from">
        <Link to="/profile">{user}</Link>
        {date}
    </div>
    </>
  )
}