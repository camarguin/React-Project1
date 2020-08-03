import React from 'react';
import '../css/Skills.css';

// const References = () => {
//     return (
//         <h1>hello</h1>
//     )
// }

const Skills = () => {
    

    const skillList = ['Java', 'Html', 'CSS', 'Javascript', 'Python', 'C#', 'C'];
    // const list = skillList.map((skill) =>
    //     <li>{skill}</li>
    // );
    return (
        <div>
            <ul>
                {skillList.map((skill, index) => (
                    <li key={index}>✓ {skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;