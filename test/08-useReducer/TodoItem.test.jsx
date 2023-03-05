import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra de la esperanza',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el Todo pendiente de completar', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />);
        const liElement = screen.getByRole('listitem');
        console.log(liElement.innerHTML);
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        console.log(spanElement.className);
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

    });
    test('debe de mostrar el Todo completado', () => {

        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />);
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span debe de llamar el ToogleTodo cuando se hace click', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });
    test('button debe de llamar el deleteTodo cuando se hace click', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

});