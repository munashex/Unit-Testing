import { render, screen } from '@testing-library/react';
import App from './App';



test('testing button', () => {
    render(<App/>)
    const button = screen.getByRole('button', {name: 'Click me'}) 
    expect(button).toBeInTheDocument()
})

test("check munashe text", () => {
    render(<App/>) 
    const h1text = screen.getByRole('heading') 
    expect(h1text).toHaveTextContent('munashe')
})

test("testing link", () => {
    render(<App/>) 
    const linktext = screen.getByRole('link', {name: 'munashe'}) 
    expect(linktext).toHaveAttribute('href', 'muna')
})

test("testing checkbox", () => {
    render(<App/>) 
    const checkbox = screen.getByRole('checkbox') 
    expect(checkbox).toBeChecked()
})

