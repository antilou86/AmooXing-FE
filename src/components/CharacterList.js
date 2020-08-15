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
    const [bdayTable, setBdayTable] = useState({});
    console.log("query from props", props.query)
    //pull in api data on pageload.
    useEffect(() => {
        const getCharacters = () => {
            axios
                .get('https://amoo-xing.herokuapp.com/villagers')
                .then(response => {
                    setCharacters(response.data)
                    let tempTable = {
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
                        'TBD': []
                    }
                    for(const character of response.data) {
                        if(character.birthday[0] === "1"){
                            if(character.birthday[1] === "/"){
                                let tempArr = [...tempTable.Jan, character.birthday]
                                tempTable.Jan = tempArr
                            } else if (character.birthday[1] === "0") {
                                let tempArr = [...tempTable.Oct, character.birthday]
                                tempTable.Oct = tempArr
                            } else if ( character.birthday[1] === "1") {
                                let tempArr = [...tempTable.Nov, character.birthday]
                                tempTable.Nov = tempArr
                            } else if ( character.birthday[1] === "2") {
                                let tempArr = [...tempTable.Dec, character.birthday]
                                tempTable.Dec = tempArr
                            }
                        } else if(character.birthday[0] === "2") {
                            let tempArr = [...tempTable.Feb, character.birthday]
                            tempTable.Feb = tempArr
                        } else if(character.birthday[0] === "3") {
                            let tempArr = [...tempTable.Mar, character.birthday]
                            tempTable.Mar = tempArr
                        } else if(character.birthday[0] === "4") {
                            let tempArr = [...tempTable.Apr, character.birthday]
                            tempTable.Apr = tempArr
                        } else if(character.birthday[0] === "5") {
                            let tempArr = [...tempTable.May, character.birthday]
                            tempTable.May = tempArr
                        } else if(character.birthday[0] === "6") {
                            let tempArr = [...tempTable.Jun, character.birthday]
                            tempTable.Jun = tempArr
                        } else if(character.birthday[0] === "7") {
                            let tempArr = [...tempTable.Jul, character.birthday]
                            tempTable.Jul = tempArr
                        } else if(character.birthday[0] === "8") {
                            let tempArr = [...tempTable.Aug, character.birthday]
                            tempTable.Aug = tempArr
                        } else if(character.birthday[0] === "9") {
                            let tempArr = [...tempTable.Sep, character.birthday]
                            tempTable.Sep = tempArr
                        } else {
                            let tempArr = [...tempTable.TBD, character.birthday]
                            tempTable.TBD = tempArr
                        }
                    }
                    setBdayTable(tempTable)
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
                    : props.query.dropVal && props.query.dropVal !== "TBD" ? 
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