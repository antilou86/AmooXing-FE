import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 100%;
max-width: 700px;
min-width: 400px;
margin-bottom: 20px;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
font-size: 1.2rem;
border: thin solid black;

@media (max-width: 511px) {
    font-size: 1rem;
}
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

const ImageDiv = styled.img`
width: 33%;
background-color: rgb(247,232,198);
@media (max-width: 138px) {
    width:25%;
}
`
const DummyDiv = styled.div`
width: 33%;
background-color: rgb(247,232,198);
@media (max-width: 138px) {
    width:25%;
}
`

const CharacterCard = ({ character }) => {

    const { villager_name, image_url, birthday, personality } = character;

    return (
        <Card>
            {
            image_url
            ? <ImageDiv src={image_url} alt={`${villager_name}`}/>
            : <DummyDiv>?</DummyDiv>
            }

            <ParagraphContainer>

                <h2 style={{margin: 0, paddingLeft: `10px`, paddingBottom: `5px`, backgroundColor:`rgba(135,112,95,.8)`, color: `black`}}>{villager_name}</h2>
                <CardP>Birthday: {`${birthday}`} </CardP>
                <CardP>Personality: {`${personality}`}</CardP>

            </ParagraphContainer>

        </Card>
    )
};

export default CharacterCard;