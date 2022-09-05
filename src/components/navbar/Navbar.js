import React, {useState} from 'react';

import './Navbar.css';
// import './Navbar2.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    // const [toggle, setToggle] = useState(false);

    return (
        <nav style={{marginBottom: '150px', backgroundColor: '#e0e0e0'}}>
            {/*<div className='app__navbar-logo'>*/}
            {/*    <img src={images.logo3} alt="logo"/>*/}
            {/*</div>*/}


            <div style={{maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto'}}>
            <ul className="main-navigation">
                <li className='main-nav-inline'>
                    <NavLink className='' to='/'>
                        Home
                    </NavLink>
                </li>

                {/*<li className='main-nav-inline'><a href="#">Home</a></li>*/}
                <li className='main-nav-inline'><a href="#" className='main-nav-link'>React Hooks</a>
                    <ul>
                        {/*<li><a href="#">HTML</a></li>*/}
                        <li><a href="#" className='main-nav-link'>useState</a>
                            <ul>
                                <li>
                                    <NavLink to='/hook/useState' className='main-nav-link'>useState Counter</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/hook/useState2' className='main-nav-link'>useState Input</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li><a href="#" className='main-nav-link'>useReducer</a>
                            <ul>
                                <li>
                                    <NavLink to='/hook/useReducer' className='main-nav-link'>useReducer</NavLink>
                                </li>
                                {/*<li>*/}
                                {/*    <NavLink to='/hook/useState2' className='main-nav-link'>useState Example 2</NavLink>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/*<li><a href="#">JavaScript</a>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href="#">Ajax</a></li>*/}
                        {/*        <li><a href="#">jQuery</a></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </li>
                {/*<li className='main-nav-inline'><a href="#">WordPress Development</a>*/}
                {/*    <ul>*/}
                {/*        <li><a href="#">Themes</a></li>*/}
                {/*        <li><a href="#">Plugins</a></li>*/}
                {/*        <li><a href="#">Custom Post Types</a>*/}
                {/*            <ul>*/}
                {/*                <li><a href="#">Portfolios</a></li>*/}
                {/*                <li><a href="#">Testimonials</a></li>*/}
                {/*            </ul>*/}
                {/*        </li>*/}
                {/*        <li><a href="#">Options</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li className='main-nav-inline'><a href="#">About Us</a></li>*/}
            </ul>
            </div>




            {/* Multi Sub Menu */}


            {/*<ul className="dropdown">*/}
            {/*    <li><a href="#">Menu</a>*/}
            {/*        <ul>*/}
            {/*            <li><a href="">Nice Dropdown Menu</a></li>*/}
            {/*            <li><a href="">Submenu - 1</a></li>*/}
            {/*            <li><a href="#">Dropdown</a>*/}
            {/*                <ul>*/}
            {/*                    <li><a href="">Submenu - 1</a></li>*/}
            {/*                    <li><a href="">Submenu - 2</a></li>*/}
            {/*                    <li><a href="#">Dropdown</a>*/}
            {/*                        <ul>*/}
            {/*                            <li><a href="">Submenu - 1</a></li>*/}
            {/*                            <li><a href="">Submenu - 2</a></li>*/}
            {/*                            <li><a href="">Submenu - 3</a></li>*/}
            {/*                        </ul>*/}
            {/*                    </li>*/}
            {/*                    <li><a href="">Submenu - 3</a></li>*/}
            {/*                </ul>*/}
            {/*            </li>*/}
            {/*            <li><a href="">Submenu - 2</a></li>*/}
            {/*        </ul>*/}
            {/*    </li>*/}
            {/*</ul>*/}






            {/* Mobile Nav */}

            {/*<div className='app__navbar-menu'>*/}
            {/*    <div onClick={() => setToggle(true)}/>*/}

            {/*    {toggle && (*/}
            {/*        <div*/}
            {/*        >*/}
            {/*            <div onClick={() => setToggle(false)}/>*/}
            {/*            <ul>*/}
            {/*                {['home','about','work','skills','contact'].map((item)=> (*/}
            {/*                    <li key={item}>*/}
            {/*                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>*/}
            {/*                    </li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </nav>
    );
};

export default Navbar;
