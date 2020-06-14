import React from 'react';

const Bugs_and_fish_card = ({ item }) => {
    const { name, image_url, sell_price, location, northern_season, northern_availability } = item;
    return (
        // container
        <div>
            {/*will this look horrible?*/}
            <h2>{name}</h2>
            <img src={`${image_url}`}>
                <h3>{sell_price}</h3>
            </img>
            <p>Location: {`${location}`}</p>
            {/*season availability will eventually use a function called checkHemisphere() that'll return true if the 
            logged in user is in the northern hemisphere or false for southern hemisphere, allowing me to toss into a
            ternery that will render northern or southern hemisphere based on relevant user location. since this
            app was built specifically for my friends and family it is going to default to northern for now*/}
            <p>Available: {`${northern_season}`}</p>
            {northern_availability=="N/A" ? <p>Hours: Unknown</p> :<p>Hours: {northern_availability}</p> }
        </div>
    )
}

export default Bugs_and_fish_card;