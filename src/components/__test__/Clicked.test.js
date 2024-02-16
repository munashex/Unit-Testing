import { render, fireEvent, screen } from "@testing-library/react"; 
import Clicked from "../Clicked";

test("testing button with user event", () => {
    render(<Clicked/>)
    const button = screen.getByText('click me') 
    fireEvent.click(button) 
    expect(button.textContent).toBe('click me')
}) 

test('testing text input', () => {
    render(<Clicked/>) 
    const inputElement = screen.getByPlaceholderText('name') 
    fireEvent.change(inputElement, {target: {value: "munashe"}}) 
    expect(inputElement.value).toBe("munashe")
})