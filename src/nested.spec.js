// import '@testing-library/jest-dom/extend-expect'

import { render, cleanup } from '@testing-library/svelte'

import Nested from './Nested.svelte'

describe('#Nested Component', () => {
    let container;
    let pTag;

    beforeEach(() => {
        const { container: rContainer } = render(Nested);
        container = rContainer;
        pTag = container.querySelector('.container > p');
    })

    afterEach(() => cleanup())

    test('is rendered', () => {
        expect(container).toBeInTheDocument();
    })

    test('shows correct text when rendering', () => {
        expect(pTag).toHaveTextContent('Number of generated Barcodes:')
    })

    test('shows an initial count of zero', () => { 
        expect(pTag).toHaveTextContent('0');
    })
})
