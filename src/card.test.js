// smoke and snapshot tests for cards.js
import { render } from '@testing-library/react';
import Card from './Card'


test('Card component renders without crashing', () => {
    render(<Card caption="Test-image" src="test.jpg" currNum={1} totalNum={3} />);
});


test('Card component matches snapshot', () => {
    const { asFragment } = render(<Card caption="Test Image" src="test.jpg" currNum={1} totalNum={3} />);
    expect(asFragment()).toMatchSnapshot(); 
});

