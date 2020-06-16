import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

import styled from 'styled-components';

    
    //STYLING UNTIL LINE
const ListDiv = styled.div`
    `
    
const ItemsList = (props) => {
    const [items, setItems] = useState([]);

    //pull in api data on pageload.
    useEffect(() => {
        const getItems = () => {
            axios
                .get('https://amoo-xing.herokuapp.com/sellables')
                .then(response => {setItems(response.data);})
                .catch(error => {console.error('Server Error', error);});
        }
        getItems();
    }, [props.query])

    return (
        //container for the whole list.
        <ListDiv>

            {/*map over state and return a collectables (fish/bug) card for each item*/}
            <div>
                {/* if items exist, check if there is anything in the search box*/}
                {items && props.query.name.trim() ? 
                    // map over what matches and render
                    items.map(item => {
                        if (item.name.toLowerCase().includes(props.query.name.toLowerCase())) {
                            return <ItemsCard key={item.name} item={item}/>}}) 
                    //otherwise just render everything
                    : items.map(item => <ItemsCard key={item.name} item={item}/>)}
            </div>
        
            {/* a div to hold our filter bar. */}
            <div></div>

        </ListDiv>
    )
}

export default ItemsList;