// import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Nested from './Nested.svelte'

test('shows correct text when rendering', () => {
    const { container } = render(Nested);
    const pTag = container.querySelector('.container > p');

    expect(pTag).toHaveTextContent('Number of generated Barcodes:')
})