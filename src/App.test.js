import { render, screen } from '@testing-library/react';
import App from './App';



test('testing button', () => {
    render(<App/>)
    const button = screen.getByRole('button', {name: 'Click me'}) 
    expect(button).toBeInTheDocument()
})