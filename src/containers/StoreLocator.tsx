import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Button from '../views/Button';
import Header from '../views/Header';
import Map from '../views/Map';

export interface Shop {
    location: string;
    imageName: string;
    address: string;
}

interface LocatorProps {
    children?: React.ReactNode;
    shops?: Shop[]
}

const StoreLocator: React.FC<LocatorProps> = (props: LocatorProps) => {
    const [currentMap, setCurrentMap] = useState('none.png');
    const [shops, setShops] = useState<Shop[]>(props.shops || []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get<{ shops: Shop[] }>('/data/shops.json');
            setShops(result.data.shops);
        };

        fetchData();
    }, []);

    let storeButtons = shops.map(({location, imageName}: Shop, index: number) => (
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
