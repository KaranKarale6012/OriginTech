import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../Components/Navbar.css'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <div>
                    <img src={Logo} className='Logo' alt='' />
                </div>
                <div className='list'>
                    <div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product'>Product</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>



                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
