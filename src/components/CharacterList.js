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
    
    //need to rebuild the bdayTable object as a state object and try again


    //pull in api data on pageload.
    let bdayTable = {
        'Jan': [],
        'Feb': [],
        'Mar': [],
        'Apr': [],
        'May': [],
        'Jun': [],
        'Jul': [],
        'Aug': [],
        'Sep': [],
        'Oct': [],
        'Nov': [],
        'Dec': [],
        'TBD': [],
    }
    useEffect(() => {
        const getCharacters = () => {
            axios
                .get('https://amoo-xing.herokuapp.com/villagers')
                .then(response => {
                    setCharacters(response.data)
                    for(const character of response.data) {
                        if(character.birthday[0] === "1"){
                            if(character.birthday[1] === "/"){
                                bdayTable['Jan'] = [...bdayTable['Jan'], character.birthday] 
                            } else if (character.birthday[1] === "0") {
                                bdayTable['Oct'] = [...bdayTable['Oct'], character.birthday] 
                            } else if ( character.birthday[1] === "1") {
                                bdayTable['Nov'] = [...bdayTable['Nov'], character.birthday] 
                            } else if ( character.birthday[1] === "2") {
                                bdayTable['Dec'] = [...bdayTable['Dec'], character.birthday] 
                            }
                        } else if(character.birthday[0] === "2") {
                            bdayTable['Feb'] = [...bdayTable['Feb'], character.birthday] 
                        } else if(character.birthday[0] === "3") {
                            bdayTable['Mar'] = [...bdayTable['Mar'], character.birthday] 
                        } else if(character.birthday[0] === "4") {
                            bdayTable['Apr'] = [...bdayTable['Apr'], character.birthday] 
                        } else if(character.birthday[0] === "5") {
                            bdayTable['May'] = [...bdayTable['May'], character.birthday] 
                        } else if(character.birthday[0] === "6") {
                            bdayTable['Jun'] = [...bdayTable['Jun'], character.birthday] 
                        } else if(character.birthday[0] === "7") {
                            bdayTable['Jul'] = [...bdayTable['Jul'], character.birthday] 
                        } else if(character.birthday[0] === "8") {
                            bdayTable['Aug'] = [...bdayTable['Aug'], character.birthday] 
                        } else if(character.birthday[0] === "9") {
                            bdayTable['Sep'] = [...bdayTable['Sep'], character.birthday] 
                        } else {
                            bdayTable['TBD'] = [...bdayTable['TBD'], character.birthday] 
                        }
                    }
                })
                .catch(error => {console.error('Server Error', error);});
        }
        getCharacters();
        console.log(bdayTable)
    }, [props.query])

    //if characters array is empty, call loader div
    if (characters.length === 0) {
        return <div class="loader"/>
    }
    console.log("just before list render", bdayTable[`${props.query.dropVal}`], "\n","just dropVal",`${props.query.dropVal}`, "\n", "bdayTable.Jan", bdayTable.Jan, "\n", "bdayTable['Jan']", bdayTable["Jan"], "entire bdayTable", bdayTable)
    return (
        //container for the whole list.
        <ListDiv>
            {/* if a value exists in search or dropdown*/}
            {(
                props.query.name.trim() ? 
                    characters.map(character => {
                        if (character.villager_name.toLowerCase().includes(props.query.name.toLowerCase())) {
                            return <CharacterCard key={character.name} character={character}/>
                    }})
                    : props.query.dropVal ? 
                        // map over what matches and render
                        characters.map(character => {
                            if (bdayTable[props.query.dropVal].includes(character.birthday)) {
                                return <CharacterCard key={character.name} character={character}/>
                    }})
                    //otherwise just render everything
                    : characters.map(character => <CharacterCard key={character.villager_name} character={character}/>))
            }
            
        </ListDiv>
    )
}

export default CharacterList;