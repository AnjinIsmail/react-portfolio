import React from 'react';
import Portfolio from '../Portfolio';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
    const { currentProject } = props;
    return (
        <section>
            <h1>{(currentProject.name)}</h1>
            <p>{currentProject.description}</p>
            <Portfolio project={currentProject.name} />
        </section>
    );

}

export default Project;