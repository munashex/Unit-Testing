import {render, screen} from '@testing-library/react' 
import Header from '../Header' 


test('testing prop in header component', () => {
    render(<Header name="munashe"/>) 
    const heading = screen.getByText(/munashe/i) 
    expect(heading).toBeInTheDocument()
})