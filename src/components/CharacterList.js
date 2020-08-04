import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import "../Loader.css"
import styled from 'styled-components';

const ListDiv = styled.div`
    width: 98%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    `
    
const CharacterList = (props) => {
    const [characters, setCharacters] = useState([]);

    //pull in api data on pageload.
    useEffect(() => {
        const getCharacters = () => {
            axios
                .get('https://amoo-xing.herokuapp.com/villagers')
                .then(response => {setCharacters(response.data);})
                .catch(error => {console.error('Server Error', error);});
        }
        getCharacters();
    }, [props.query])

    //if characters array is empty, call loader div
    if (characters.length == 0) {
        return <div class="loader">Loading...</div>
    }
    return (
        //container for the whole list.
        <ListDiv>
            {/* if items exist, check if there is anything in the search box*/}
            {(
                props.query.name.trim() || props.query.dropVal ? 
                    // map over what matches and render
                    characters.map(character => {
                        if (character.name.toLowerCase().includes(props.query.name.toLowerCase() || character.birthday == props.query.dropVal)) {
                            return <CharacterCard key={character.name} character={character}/>}})
                    //otherwise just render everything
                    : characters.map(character => <CharacterCard key={character.name} character={character}/>))
            }
        </ListDiv>
    )
}

export default CharacterList;