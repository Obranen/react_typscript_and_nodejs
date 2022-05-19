import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'

interface INavBar {
}

const Navbar: FC<INavBar> =
  ({}) => {
    return (
      <nav className={classes.Navbar}>
        <ul className={classes.NavbarList}>
          <li><Link to="/">Домой</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
        </ul>
      </nav>
    )
  }

export default Navbar