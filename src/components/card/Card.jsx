import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({card}) {
  return (
    <Link to={card.link} className={style.card}>
      <img src={card.image_url}/>
      {card.title}
    </Link>
  )
}
