import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {
    useTodo.mockReturnValue({ //es el resultado cuando se manda llamar el hook con el estado que quiera que tenga
        todos: [
            { id: 1, description: 'Todo #1', donde: false },
            { id: 2, description: 'Todo #2', donde: true },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('debe de mostrar el componente correctamente', () => {

        render(<TodoApp />);
        screen.debug();
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        console.log(screen.getByRole('textbox').name);
    });
});