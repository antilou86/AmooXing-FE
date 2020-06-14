import React from 'react';

const Bugs_and_fish_card = (props) => {

    return (
        // container
        <div>
            {/*will this look horrible?*/}
            <h2>{props.name}</h2>
            <img src={`${props.image_url}`}>
                <h3>{props.sell_price}</h3>
            </img>
            <p>Location: {`${props.location}`}</p>
            {/*season availability will eventually use a function called checkHemisphere() that'll return true if the 
            logged in user is in the northern hemisphere or false for southern hemisphere, allowing me to toss into a
            ternery that will render northern or southern hemisphere props based on relevant user location. since this
            app was built specifically for my friends and family it is going to default to northern for now*/}
            <p>Available: {`${props.northern_season}`}</p>
            {props.northern_availability=="N/A" ? <p>Hours: Unknown</p> :<p>Hours: {props.northern_availability}</p> }
        </div>
    )
}

export default Bugs_and_fish_card;