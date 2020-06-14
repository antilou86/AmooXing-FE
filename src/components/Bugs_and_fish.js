import React from 'react';
import Bugs_and_fish_card from './Bugs_and_fish_card';

const Bugs_and_fish = () => {
    //pull in all data on pageload. (useEffect)
        //load that data into a state object.(useState)

    return (
        // container for the whole ass page.
        <div>
            {/* a div to hold our filter bar. */}
            <div></div>

            {/* div to contain the results of the api call*/}
            <div>
            {/*map over props and return a collectables (fish/bug) card 
            for each item in state*/}
            </div>
        </div>
    )
}

export default Bugs_and_fish;