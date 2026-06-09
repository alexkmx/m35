import recetasReducer, { 
  setListaPlatillos, 
  agregarFavoritos, 
  quitarDeFavoritos 
} from '../../features/recetas/recetasSlice.js';

describe('Redux - recetasSlice', () => {
  const estadoInicial = {
    listaPlatillos: [],
    recetaSeleccionada: null,
    favoritos: []
  };

  test('1. Debe retornar el estado inicial por defecto', () => {
    expect(recetasReducer(undefined, { type: undefined })).toEqual(estadoInicial);
  });

  test('2. Debe guardar la lista de platillos con setListaPlatillos', () => {
    const platillosSimulados = [{ idMeal: '52775', strMeal: 'Lasagna' }];
    const estadoFinal = recetasReducer(estadoInicial, setListaPlatillos(platillosSimulados));
    
    expect(estadoFinal.listaPlatillos).toHaveLength(1);
    expect(estadoFinal.listaPlatillos[0].strMeal).toBe('Lasagna');
  });

  test('3. Debe agregar y quitar de favoritos correctamente', () => {
    const miReceta = { idMeal: '52775', strMeal: 'Lasagna' };
    
    // Probar Agregar
    let estado = recetasReducer(estadoInicial, agregarFavoritos(miReceta));
    expect(estado.favoritos).toHaveLength(1);

    // Probar Quitar
    estado = recetasReducer(estado, quitarDeFavoritos('52775'));
    expect(estado.favoritos).toHaveLength(0);
  });
});