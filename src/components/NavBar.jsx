import React from 'react';
import PropTypes from 'prop-types';

const NavBar = props => {
    const menuOptions = ['Home', 'About', 'Contact']

    return (
        <div>
            <ul id="menuUl">
                <li><a href="#">{menuOptions[0]}</a></li>
                <li><a href="#aboutInfo">{menuOptions[1]}</a></li>
                <li><a href="#contactInfo">{menuOptions[2]}</a></li>
                <li></li>
                <li><a href="https://github.com/camarguin" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a href="https://codepen.io/camarguin" target="_blank"><i class="fab fa-codepen"></i></a></li>
                <li><a href="https://www.linkedin.com/in/lucas-gerhardt-de-camargo-358396190/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
            <span />
            <span />
            <span />
        </div>
    );
};

export default NavBar;