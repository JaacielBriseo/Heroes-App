import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/NavBar';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar/>', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'jaaciel',
    },
    logout: jest.fn(),
  };
  beforeEach(() => jest.clearAllMocks());
  test('debe de mostrar el nombre del usuario', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('jaaciel')).toBeTruthy();
  });

  test('debe de llamar el logout y navigate cuando se hace click en boton', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
  });
});
