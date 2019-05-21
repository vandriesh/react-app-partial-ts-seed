import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Button from '../views/Button';
import Header from '../views/Header';
import Map from '../views/Map';

const StoreLocator = (props) => {
    const [currentMap, setCurrentMap] = useState('none.png');
    const [shops, setShops] = useState(props.shops || []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/data/shops.json');
            setShops(result.data.shops);
        };

        fetchData();
    }, []);

    let storeButtons = shops.map(({location, imageName}, index) => (
        <Button
            key={index}
            location={location}
            onClickEvent={() => setCurrentMap(imageName)}
        />
    ));


    return (
        <div className="store-locator">
            <Header/>
            <div>{storeButtons}</div>
            <Map imagename={currentMap} location={currentMap}/>
        </div>
    );
};

export default StoreLocator;
