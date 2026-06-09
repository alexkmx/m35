import recetasReducer, { setListaPlatillos } from '../Body/Platillos/Platillos';

describe('Recetas Slice - Acciones', () => {
  test('debe actualizar listaPlatillos con los datos proporcionados', () => {
    const estadoPrevio = { listaPlatillos: [], recetaSeleccionada: null, favoritos: [] };
    const platillosSimulados = [
      { idMeal: '52775', strMeal: 'Lasagna' },
      { idMeal: '52912', strMeal: 'Ratatouille' }
    ];

    const estadoFinal = recetasReducer(estadoPrevio, setListaPlatillos(platillosSimulados));

    expect(estadoFinal.listaPlatillos).toHaveLength(2);
    expect(estadoFinal.listaPlatillos[0].strMeal).toBe('Lasagna');
  });
});