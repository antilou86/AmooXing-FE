import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';
import "../Loader.css"
import styled from 'styled-components';

const ListDiv = styled.div`
    width: 98%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
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

    //if items array is empty, call loader div
    if (items.length == 0) {
        return <div class="loader">Loading...</div>
    }
    return (
        //container for the whole list.
        <ListDiv>
            {/* if items exist, check if there is anything in the search box*/}
            {(
                props.query.name.trim() ? 
                    // map over what matches and render
                    items.map(item => {
                        if (item.name.toLowerCase().includes(props.query.name.toLowerCase())) {
                            return <ItemsCard key={item.name} item={item}/>}}) 
                    //otherwise just render everything
                    : items.map(item => <ItemsCard key={item.name} item={item}/>))
            }
        </ListDiv>
    )
}

export default ItemsList;