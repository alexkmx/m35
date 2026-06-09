/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom'; 
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListaPlatillos from '../Body/Platillos/Platillos';

// Mock de las herramientas de react-redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

describe('Componente - ListaPlatillos', () => {
  
  test('4. Debe renderizar los platillos que vienen de Redux', () => {
    // Simulamos el estado global de Redux con la "l" minúscula corregida
    useSelector.mockImplementation((selectorFn) => selectorFn({
      recetas: {
        listaPlatillos: [
          { idMeal: '52775', strMeal: 'Lasagna', strMealThumb: 'lasagna.jpg' }
        ]
      }
    }));

    render(
      <BrowserRouter>
        <ListaPlatillos />
      </BrowserRouter>
    );

    expect(screen.getByText('Lasagna')).toBeInTheDocument();
  });

  test('5. Debe cambiar el valor del input del buscador al escribir', () => {
    // Redux arranca vacío para el abecedario
    useSelector.mockReturnValue([]);

    render(
      <BrowserRouter>
        <ListaPlatillos />
      </BrowserRouter>
    );

    const inputBuscador = screen.getByPlaceholderText(/🔍 Buscar platillo por nombre.../i);
    
    fireEvent.change(inputBuscador, { target: { value: 'Pasta' } });
    
    expect(inputBuscador.value).toBe('Pasta');
  });
});