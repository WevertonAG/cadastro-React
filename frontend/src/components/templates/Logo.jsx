import './Logo.css'
import Coder from '../../assets/imgs/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
       <Link to="/" className='logo'>
           <img src={Coder} alt="logo" />
       </Link>
    </aside>
    