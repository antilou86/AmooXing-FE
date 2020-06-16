import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 98%;
margin-bottom: 20px;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
`
const CardP = styled.p`
margin: 0;
padding-left: 10px;
text-align: left;
`
const ParagraphContainer = styled.div`
width: 66%;
text-align: left;
`

const ItemsCard = ({ item }) => {

    const { name, image_url, sell_price, location, northern_season, northern_availability } = item;

    return (
        <Card>

            <img src={image_url} alt={`pic of ${name}`} style={{width: `33%`}}/>

            <ParagraphContainer>

                <h2 style={{margin: 0, paddingLeft: `10px`, backgroundColor:`tan`, color: `green`}}>{name}</h2>
                <h3 style={{margin: 0, paddingLeft: `10px`, paddingBottom: `5px`, color: `yellow`, backgroundColor:`tan`}}>
                    Worth {sell_price} bells
                </h3>
                
                <CardP>Location: {`${location}`} </CardP>
                {/*season availability will eventually use a function called checkHemisphere() that'll return true if the 
                logged in user is in the northern hemisphere or false for southern hemisphere, allowing me to toss into a
                ternery that will render northern or southern hemisphere based on relevant user location. since this
                app was built specifically for my friends and family it is going to default to northern for now*/}
                <CardP>Months Available: {`${northern_season}`}</CardP>

                {northern_availability==="N/A" ? 
                    <CardP style={{paddingBottom: `10px`}}>Hours: Unknown</CardP> 
                    : <CardP style={{paddingBottom: `10px`}}>Hours: {northern_availability}</CardP>}

            </ParagraphContainer>

        </Card>
    )
};

export default ItemsCard;