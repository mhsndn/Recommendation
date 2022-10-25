import classes from './Menu.module.scss';
import {  Link } from "react-router-dom";
const Menu =(props)=>{
    return(<div>
          <header className={classes.header}>
            <div>
            <Link to="/" className={classes.logo}>Irancell Labs</Link>
                 <ul className={classes.menu}>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/">Recomendation</Link></li>
                <li><Link to="/admin" >Admin</Link></li>
            </ul>

            </div>
         
</header>
    </div>)
}

export default Menu;