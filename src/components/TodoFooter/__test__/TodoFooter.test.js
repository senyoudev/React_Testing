import { screen,render } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ count }) => {
    return <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={count} />
    </BrowserRouter>
}

describe("TodoFooter", () => {
    it("should render the correct amount of tasks left", () => {
        render(<MockTodoFooter count={5} />);
        const countElement = screen.getByText(/5 tasks left/i);
        expect(countElement).toBeInTheDocument();
    })

    it("should render 'task' when the number of uncomplete tasks is 1", () => {
        render(<MockTodoFooter count={1} />);
        const countElement = screen.getByText(/1 task left/i);
        expect(countElement).not.toBeNull();
    })
});

