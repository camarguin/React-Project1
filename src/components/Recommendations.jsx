import React from 'react';
import Rec1 from '../img/Rec1.png'
import Rec2 from '../img/Rec2.png'



const Recommendations = () => {
    return (
        <div>
            <h1>Recommendations</h1>
            <ul id="recommendationsUl">
                <li><a href="https://docdro.id/jBjeIz2" target="_blank"><img id="rec1" src={Rec1} alt=""/></a></li>
                <li><a href="https://docdro.id/q4whLKi" target="_blank"><img id="rec2" src={Rec2} alt=""/></a></li>
            </ul>
        </div>
    );
};

export default Recommendations;