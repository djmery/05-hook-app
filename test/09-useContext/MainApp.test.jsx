import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "../../src/09-useContext/Router";



describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el HomePage', async () => {
        const router = createMemoryRouter(routesConfig, { initialEntries: ["/"] });
        render(<RouterProvider router={router} />);
        screen.debug();
        expect(screen.getByText('HomePage:')).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', async () => {
        const router = createMemoryRouter(routesConfig, { initialEntries: ["/login"] });
        render(<RouterProvider router={router} />);
        screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });



});