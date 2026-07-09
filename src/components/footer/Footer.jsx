import style from './Footer.module.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer(){

    return <>
    <div className={style.footer}>
        <div className={style.right}>
            
            <Link to='https://www.facebook.com/purefashion26'><FaFacebook /></Link>
            <Link to='https://www.instagram.com/pure_fashion26'><FaInstagram /></Link>
            <Link to='https://api.whatsapp.com/message/TTQ27DDKE4CTF1?autoload=1&app_absent=0'><FaWhatsapp /></Link>
            
        </div>
    </div>
    </>
}
export default Footer;