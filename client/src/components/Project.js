import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 100%;
  color: #fff;
  text-align: left;
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  width: 600px;
  max-width: 100%;
`;

function Project({ location }) {
  return (
    <ProjectContainer>
      <Body>
        <h2>{location.state.name}</h2>
        <p>{location.state.description}</p>
      </Body>
    </ProjectContainer>
  );
}

export default Project;
