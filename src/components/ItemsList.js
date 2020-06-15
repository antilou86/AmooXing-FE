import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

const ItemsList = () => {
    //load data into a state object.(useState)
    const [items, setItems] = useState([]);

    //pull in all data on pageload. (useEffect)
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
        // container for the whole ass page.
        <div className = "item-list">
            {/* a div to hold our filter bar. */}
            <div></div>

            {/* div to contain the results of the api call*/}
            <div>
                {/*map over state and return a collectables (fish/bug) card for each item*/}
                {items && items.map(item => <ItemsCard key={item.name} item={item}/>)}
            </div>
        </div>
    )
}

export default ItemsList;