import React from 'react';
import Portfolio from '../Portfolio';

const modalProject = ({ onClose, currentProject }) => {
    const { name, description, github, deployed, index } = currentProject;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${index}.png`).default} alt="current project" />
                <p>
                    {description}
                    <br />
                   Github Repo: <a href={github}> {github} </a>
                    <br />
                        Deployed App: <a href ={deployed}> {deployed} </a>
                </p>
                <button onClick={onClose} type="button"> Close this modal</button>
            </div>
        </div>
    );
}

export default modalProject;