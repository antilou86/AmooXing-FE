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

            {/*checkHemisphere() will need to return true if the logged in user is in the northern or southern hemisphere
            since this was built specifically for my friends and family it is going to default to northern for now*/}
            <p>Location: {`${props.location}`}</p>
            <p>Available: {`${props.northern_season}`}</p>
            {props.northern_availability=="N/A" ? <p>Hours: Unknown</p> :<p>Hours: {props.northern_availability}</p> }
        </div>
    )
}

export default Bugs_and_fish_card;