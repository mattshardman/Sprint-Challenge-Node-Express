import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  height: 200px;
  width: 600px;
  max-width: 100%;
  padding: 20px 0;
  color: #fff;
  text-align: left;
`;

function ProjectCard({ id, name, description }) {
  const formattedName = `${name.charAt(0).toUpperCase()} ${name.slice(1)}`;

  return (
    <Card>
      <h2>{formattedName}</h2>
      <p>{description}</p>
      <Link to={{ pathname: "/project", state: { id, name: formattedName, description } }}>
        <small style={{ color: "rgb(255, 167, 196)" }}>View project</small>
      </Link>
    </Card>
  );
}

export default ProjectCard;
