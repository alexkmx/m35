import recetasReducer, { agregarAFavoritos, quitarDeFavoritos } from '../Body/Platillos/Platillos';

describe('Recetas Slice - Lógica de Favoritos', () => {
  test('debe agregar una receta a favoritos y luego removerla', () => {
    let estado = { listaPlatillos: [], recetaSeleccionada: null, favoritos: [] };
    const miReceta = { idMeal: '52775', strMeal: 'Lasagna' };

    // 1. Probar agregar
    estado = recetasReducer(estado, agregarAFavoritos(miReceta));
    expect(estado.favoritos).toHaveLength(1);
    expect(estado.favoritos[0].idMeal).toBe('52775');

    // 2. Probar eliminar
    estado = recetasReducer(estado, quitarDeFavoritos('52775'));
    expect(estado.favoritos).toHaveLength(0);
  });
});