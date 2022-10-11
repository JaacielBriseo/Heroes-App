import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';
describe('Pruebas en <HeroesRoutes/>', () => {
  test('debe de mostrar el NavBar', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'jaaciel',
      },
    };
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Asociaciones')).toBeTruthy()
  });
});
