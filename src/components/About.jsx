import React, { useState } from 'react';
import profile from '../img/profile.jpg'
import Skills from './Skills';
import '../css/About.css';
import Languages from './Languages';
import Education from './Education';
import Certificates from './Certificates';
import Recommendations from './Recommendations';
import Experience from './Experience';
import Projects from './Projects';

const About = () => {
    const [showSkills, setShowSkill] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [showEducation, setShowEducation] = useState(false);

    const showHandlerButton = () => {
        setShowSkill(!showSkills)
    }
    const showLHandlerButton = () => {
        setShowLanguages(!showLanguages)
    }
    const showEHandlerButton = () => {
        setShowEducation(!showEducation)
    }

    return (
        <div>
            <h1 id="aboutInfo">About me</h1>
            <img src={profile} alt="" />
            <p>My name is Lucas, I was born in Brazil and I moved to Vancouver seeking to improve my knowledge in
            Web/Mobile Development and English. I am currently studying Web and Mobile Development at
            CICCC(Cornerstone International Community College of Canada). I am a motived student who believes
                that working as a team can grant a lot of success in the carrer such as life.</p>
            <div className="phone-email">
                <h6><i class="fas fa-envelope"></i> lucasgcamargo@icloud.com</h6>
                <h6><i class="fas fa-mobile-alt"></i> +1(778)318-3796</h6>

            </div>
            <div className="about-info">
                <div className="about-skill">
                    <h4 id="skill" onClick={showHandlerButton}>Skills {showSkills ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-circle-down"></i>}</h4>
                    <br />
                    {showSkills && <Skills />}
                </div>
                <div className="about-language">
                    <h4 onClick={showLHandlerButton}>Languages {showLanguages ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-circle-down"></i>}</h4>
                    <br />
                    {showLanguages && <Languages />}
                </div>
                <div className="about-education">
                    <h4 onClick={showEHandlerButton}>Education {showEducation ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-circle-down"></i>}</h4>
                    <br />
                    {showEducation && <Education />}
                </div>
                <Certificates />
                <Recommendations />
                <Experience />
                <Projects />



            </div>

            {/* <button onClick={showHandlerButton}>SHOW?</button>
            { showSkill && <Skills /> } */}

        </div>
    );
};

export default About;