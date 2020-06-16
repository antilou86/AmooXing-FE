import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

import styled from 'styled-components';

const ItemsList = () => {
    const [items, setItems] = useState([]);
    
    //STYLING UNTIL LINE
    const ListDiv = styled.div`
    `
    
    //pull in api data on pageload.
    useEffect(() => {
        const getItems = () => {
            axios
                .get('https://amoo-xing.herokuapp.com/sellables')
                .then(response => {setItems(response.data);})
                .catch(error => {console.error('Server Error', error);});
        }
        getItems();
    }, [])

    return (
        //container for the whole list.
        <ListDiv>

            {/*map over state and return a collectables (fish/bug) card for each item*/}
            <div>
                {items && items.map(item => <ItemsCard key={item.name} item={item}/>)}
            </div>
        
            {/* a div to hold our filter bar. */}
            <div></div>

        </ListDiv>
    )
}

export default ItemsList;