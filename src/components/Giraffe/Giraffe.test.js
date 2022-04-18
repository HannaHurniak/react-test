import React from 'react';
import { render } from '@testing-library/react';
import Giraffe from './Giraffe'
import { FormattedMessage, useIntl } from 'react-intl';
import "@testing-library/jest-dom/extend-expect" 

it('should equal to 0', () => {
    const { getByTestId } = render(<Giraffe />);
    expect(getByTestId('name')).toHaveTextContent('I am a Giraffe!')
});