import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1 style={{ textDecoration: "none", color: "rgb(255, 167, 196)" }}>
          Project Planner
        </h1>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
