import { fireEvent, render,screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodos = jest.fn();

describe('AddInput', () => {
    it('Should render the test input', async() => {
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodos}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    })


     it('Should be able to type in input', async() => {
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodos}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: 'Go Grocery Shopping'}})
        expect(inputElement.value).toBe("Go Grocery Shopping");
    })

      it('Should have an empty value in the input when we click the button', async() => {
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodos}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button', {name: /Add/i});
        fireEvent.change(inputElement, {target: {value: 'Go Grocery Shopping'}})
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    })
})
