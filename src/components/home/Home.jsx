import React from 'react'
import { Link } from 'react-router-dom';
import style from './Home.module.css'
import banner from '../../assets/pbanner.png'
import { FaFacebook } from "react-icons/fa";
import Category from '../category/Category'

export default function Home() {
  return (
    <>
    <div className={style.banner}>
      <img className={style.bannerimg} src={banner}/>
      <Link to='https://www.facebook.com/purefashion26' className={style.socialFacebook} ><FaFacebook /></Link>
    </div>
    <div>
      <Category/>
    </div>
    </>
  )
}
