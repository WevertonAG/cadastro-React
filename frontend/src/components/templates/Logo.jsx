import './Logo.css'
import Coder from '../../assets/imgs/logo.png'
import React from 'react'

export default props =>
    <aside className="logo">
       <a href="/" className='logo'>
           <img src={Coder} alt="logo" />
       </a>
    </aside>