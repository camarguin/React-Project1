import React from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';

const Projects = () => {
    const projectsNameList = ['Advocacy Lawyer', 'Cricket Club', 'Pro Lacrosse'];
    // const projectImgList = [{project1}, {project2}, {project3}];


    return (
        <div className="Projects">
            <h1>My Projects</h1>
            {/* <ul className="projectsUl">
                {projectsNameList.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul> */}
            <ul className="projectsUl">
                <li><h6 className="projectTitle">{projectsNameList[0]}</h6><a href="https://camarguin.github.io/Tio-Project/" target="_blank"><img src={project1} alt="" /></a></li>
                <li><h6 className="projectTitle">{projectsNameList[1]}</h6><a href="https://camarguin.github.io/Mid-Term-Project/" target="_blank"><img src={project2} alt="" /></a></li>
                <li><h6 className="projectTitle">{projectsNameList[2]}</h6><a href="http://www.procaliberlacrosse.com/second/" target="_blank"><img src={project3} alt="" /></a></li>
            </ul>

        </div>
    );
};

export default Projects;