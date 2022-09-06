import React, {useState} from 'react';

import './Navbar.css';
// import './Navbar2.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    // const [toggle, setToggle] = useState(false);

    return (
        <nav style={{marginBottom: '100px', backgroundColor: '#e0e0e0'}}>
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
                <li className='main-nav-inline'><NavLink to='/hook/useState' className='main-nav-link'>React Hooks</NavLink>
                    <ul>
                        {/*<li><a href="#">HTML</a></li>*/}
                        <li><NavLink to='/hook/useState' className='main-nav-link'>useState</NavLink>
                            <ul>
                                <li>
                                    <NavLink to='/hook/useState' className='main-nav-link'>useState Counter</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/hook/useState2' className='main-nav-link'>useState Input</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li><NavLink to='/hook/useReducer' className='main-nav-link'>useReducer</NavLink>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <NavLink to='/hook/useReducer' className='main-nav-link'>useReducer</NavLink>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                        <li><NavLink to='/hook/useEffect' className='main-nav-link'>useEffect</NavLink>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <NavLink to='/hook/useEffect' className='main-nav-link'>useEffect</NavLink>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                        <li><NavLink to='/hook/useRef' className='main-nav-link'>useRef</NavLink>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <NavLink to='/hook/useRef' className='main-nav-link'>useRef</NavLink>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                        <li><NavLink to='/hook/useLayoutEffect' className='main-nav-link'>useLayoutEffect</NavLink>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <NavLink to='/hook/useRef' className='main-nav-link'>useRef</NavLink>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                        <li><NavLink to='/hook/useImperativeHandle' className='main-nav-link'>useImperativeHandle</NavLink>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <NavLink to='/hook/useRef' className='main-nav-link'>useRef</NavLink>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                        <li><NavLink to='/hook/useContext' className='main-nav-link'>useContext</NavLink>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <NavLink to='/hook/useRef' className='main-nav-link'>useRef</NavLink>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                        {/*<li><a href="#">JavaScript</a>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href="#">Ajax</a></li>*/}
                        {/*        <li><a href="#">jQuery</a></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </li>
                {/*<li className='main-nav-inline'><NavLink to='/sql' className='main-nav-link'>React SQL</NavLink>*/}
                {/*</li>*/}
                <li className='main-nav-inline'><NavLink to='/sql' className='main-nav-link'>Databases</NavLink>
                    <ul>
                        {/*<li><a href="#">HTML</a></li>*/}
                        <li><NavLink to='/sql' className='main-nav-link'>SQL</NavLink>
                            <ul>
                                <li>
                                    <NavLink to='/sql' className='main-nav-link'>Add Employee to SQL DB</NavLink>
                                </li>
                                {/*<li>*/}
                                {/*    <NavLink to='/hook/useState2' className='main-nav-link'>useState Input</NavLink>*/}
                                {/*</li>*/}
                            </ul>
                        </li>

                        <li><NavLink to='/hook/useReducer' className='main-nav-link'>MongoDB</NavLink>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <NavLink to='/hook/useReducer' className='main-nav-link'>useReducer</NavLink>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                    </ul>
                </li>
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
