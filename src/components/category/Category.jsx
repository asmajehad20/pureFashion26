import React from 'react'
import react from '../../assets/react.svg'
import men from '../../assets/men.jpg'
import women from '../../assets/women.jpg'
import baby from '../../assets/baby.jpg'
import kids from '../../assets/kids.jpg'
import others from '../../assets/others.jpg'
import Card from '../card/Card'
import style from './Category.module.css'

export default function Category() {
  return (
    <div className={style.cardList}>
    {/* <Card post={[image_url, title]}/> */}
      
      <Card card={{link:'/men', image_url: men, title: "men" }} />
      <Card card={{link:'/women', image_url: women, title: "women" }} />
      <Card card={{link:'/kids', image_url: kids, title: "kids" }} />
      <Card card={{link:'/baby', image_url: baby, title: "baby" }} />
      <Card card={{link:'/accessories', image_url: others, title: "other" }} />
      {/* <Card card={{link:'/homeProducts', image_url: react, title: "home" }} /> */}
    </div>
  )
}
