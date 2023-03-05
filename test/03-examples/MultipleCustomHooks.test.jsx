import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    //al estar definido aquí en todas las pruebas va a tener el mock del counter
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    //para cada una de las funciones que le hago el mock sean reseteadas en su estado inicial
    //usamos una parte del ciclo de vida de las pruebas que es el beforeEach (antes de cada prueba)

    beforeEach(() => {
        jest.clearAllMocks(); //limpiamos cada una de las pruebas
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Rick&Morty'));
        const nextButton = screen.getByRole('button');
        expect(nextButton.disabled).toBeTruthy();
        screen.debug();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ name: 'Silvia', species: 'Hola' }],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        // expect(screen.getByText('Hola')).toBeTruthy();
        // expect(screen.getByText('Silvia')).toBeTruthy();
        const nextButton = screen.getByRole('button');
        expect(nextButton.disabled).toBeFalsy();
        screen.debug();
    });

    test('debe llamar la función incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ name: 'Silvia', species: 'Hola' }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button');
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();


    });

});