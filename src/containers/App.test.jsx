import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('App', () => {
    it('counter increments the count', () => {
        const { container } = render(<App />);
        const storeLocator = container.querySelector('.store-locator');

        expect(storeLocator).toBeTruthy();
    });
});
