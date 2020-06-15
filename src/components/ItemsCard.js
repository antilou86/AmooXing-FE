import React from 'react';
import styled from 'styled-components';

const ItemsCard = ({ item }) => {
    const { name, image_url, sell_price, location, northern_season, northern_availability } = item;

    return (
        // container
        <div>
            <h2>{name}</h2>
            <h3>Bells: {sell_price}</h3>
            <img src={image_url} alt={`pic of ${name}`}/> 
            <p>Location: {`${location}`}</p>
            {/*season availability will eventually use a function called checkHemisphere() that'll return true if the 
            logged in user is in the northern hemisphere or false for southern hemisphere, allowing me to toss into a
            ternery that will render northern or southern hemisphere based on relevant user location. since this
            app was built specifically for my friends and family it is going to default to northern for now*/}
            <p>Available: {`${northern_season}`}</p>
            {northern_availability==="N/A" ? <p>Hours: Unknown</p> :<p>Hours: {northern_availability}</p> }
        </div>
    )
}

export default ItemsCard;