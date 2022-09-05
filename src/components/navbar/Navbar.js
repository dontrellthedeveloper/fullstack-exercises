import React, {useState} from 'react';

import './Navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav>
            {/*<div className='app__navbar-logo'>*/}
            {/*    <img src={images.logo3} alt="logo"/>*/}
            {/*</div>*/}
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>

            <div className='app__navbar-menu'>
                <div onClick={() => setToggle(true)}/>

                {toggle && (
                    <div
                    >
                        <div onClick={() => setToggle(false)}/>
                        <ul>
                            {['home','about','work','skills','contact'].map((item)=> (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
