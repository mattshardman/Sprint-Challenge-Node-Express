import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 167, 196);
`;

function Header () {
    return(
        <HeaderContainer>
            <h1>Project Planner</h1>
        </HeaderContainer>
    )
}

export default Header;
