import axios from 'axios';
import { render, fireEvent, getByText } from 'react-testing-library';
import React from 'react';

import StoreLocator from './StoreLocator';

const getShops = () => [
    {
        location: 'Portland',
        imageName: 'portland.png',
        address: ''
    },
    {
        location: 'Astoria',
        imageName: 'astoria.png',
        address: ''
    },
    {
        location: 'All Locations',
        imageName: 'none.png',
        address: ''
    }
];

describe('StoreLocator Data Fetch', () => {
    beforeEach(() => {
        // TODO: disable ugly warning (will get rid when react 16.9 will be out)
        console.error = jest.fn();
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: {
                shops: getShops()
            }
        });
    });

    it("should have been calling axios's get", () => {
        render(<StoreLocator />);

        expect(axios.get).toHaveBeenCalledWith('/data/shops.json');
    });
});

describe('ChooseMap works', () => {
    let storeContainer;

    beforeEach(() => {
        const locatorShops = {
            shops: getShops()
        };

        const { container } = render(<StoreLocator {...locatorShops} />);
        storeContainer = container;
    });

    it('should update currentMap using the location passed to it', async () => {
        const portlandButton = getByText(storeContainer, 'Portland');
        let img = storeContainer.querySelector(
            `img[src="images/portland.png"]`
        );

        expect(img).toBe(null);

        fireEvent(
            portlandButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
        );
        img = storeContainer.querySelector(`img[src="images/portland.png"]`);

        expect(img).toBeDefined();
    });
});
