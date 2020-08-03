import React, { useState } from 'react';

const NavBarHamburger = () => {
    const [open, setOpen] = useState(false);
    const showMenu = () => {
        setOpen(!open);
    }

    return (
        <div id="menuHamburger">
            <button id="hamburgerBtn" onClick={showMenu}><i class="fas fa-bars"></i></button>
            {open &&
                <ul id="hamburgerMenuBar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutInfo">About</a></li>
                    <li><a href="#contactInfo">Contact</a></li>
                    <ul id="socialMediasBurger">
                        <li><a href="https://github.com/camarguin" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://codepen.io/camarguin" target="_blank"><i class="fab fa-codepen"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/lucas-gerhardt-de-camargo-358396190/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </ul>
            }
        </div>
    );
};

export default NavBarHamburger;