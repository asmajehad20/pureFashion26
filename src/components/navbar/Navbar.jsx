import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import plogo from '../../assets/plogo.png';

function Navbar(){

    return <>
    <div className={style.navbar}>
        <Link className={style.logodiv} to='/'>
        <img className={style.logo} src={plogo}/>
        </Link>
        <div className={style.right}>
            
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    </div>
    </>
}
export default Navbar;