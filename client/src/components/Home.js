import React from 'react';
import styled from 'styled-components';

import withData from '../lib/withData';
import ProjectCard from './ProjectCard';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

function Home({ projects }) {
    return (
        <Container>
            { projects.map(project => <ProjectCard key={project.id} {...project} />) }
        </Container>
    )
}

export default withData(Home);
