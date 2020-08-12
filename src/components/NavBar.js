import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import "./NavBar.css"

const NavContainer = styled.div`
    width: 100%;
    max-width: 700px;
    min-width: 400px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    flex-grow: 1;
    position: fixed;
    padding-bottom: 5px;
    margin-bottom: 10px;
`

const NavBar = () => {
    return (
        <NavContainer>
            <div className="LinkContainer">
                <Link to="/">Home</Link>
            </div>
            <div className="LinkContainer">
                <Link to="/sellables">Creatures</Link>
            </div>
            <div className="LinkContainer">
                <Link to="/villagers">Villagers</Link>
            </div>
            {/* <div className="LinkContainer">
                <Link to="/profile">Profile</Link>
            </div> */}
        </NavContainer>
    )
}

export default NavBar