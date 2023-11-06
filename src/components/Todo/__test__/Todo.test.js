import { fireEvent, render,screen } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', {name: /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement);
    })
}


describe("Todo", () => {
    it("Should add a task", async() => {
        render(<MockTodo />);
        addTask(['Go Grocery Shopping']);
        const divElement = screen.getByText(/Go Grocery Shopping/i); 
        expect(divElement).toBeInTheDocument();
    })

    it("Should add several tasks", async() => {
        render(<MockTodo />);
        const tasks = ['Go Grocery Shopping','Play Cricket','Watch a movie']
        addTask(tasks);
        const divElement = screen.getAllByTestId("task-container"); 
        expect(divElement.length).toBe(tasks.length);
    })


    it("Should not change the style when the task isnt done yet ", async() => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active")
    })

    it("Should  change the style when the task is done ", async() => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })
})

// Path: src/components/TodoFooter/__test__/TodoFooter.test.js