import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`

const NavBar = () => {
    return (
        <NavContainer>
            <h1>Where To?</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/sellables">Creatures</Link>
            </div>
            <div>
                <Link to="/villagers">Villagers</Link>
            </div>
            {/* <div>
                <Link to="/profile">Profile</Link>
            </div> */}
        </NavContainer>
    )
}

export default NavBar