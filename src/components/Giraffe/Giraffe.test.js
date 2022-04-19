import React from 'react';
import { render } from '@testing-library/react';
import Giraffe from './Giraffe'
import "@testing-library/jest-dom/extend-expect" 

it('should equal to "Giraffe" ', () => {
    const { getByTestId } = render(<Giraffe />);
    expect(getByTestId('name')).toHaveTextContent('Giraffe')
    expect(getByTestId('who')).toHaveTextContent('I am a Giraffe!')
});
