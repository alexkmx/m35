import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    listaPlatillos: [],
    recetaSeleccionada: null,
    favoritos: []
};

export const recetasSlice = createSlice({
    name: "recetas",
    initialState,
    reducers: {
        //Acción para guardar los platilos en el estado global
        setListaPlatillos: (state, action) => {
            state.listaPlatillos = action.payload;
        },
        //Acción para guardar la receta detallada actual
        setRecetaSeleccionada: (state, action) => {
            state.recetaSeleccionada = action.payload;
        },
        //Acción para agregar una receta a favoritos
        agregarFavoritos: (state, action) => {
            const existe = state.favoritos.find(fav => fav.idMeal === action.payload.idMeal);
            if(!existe) {
                state.favoritos.push(action.payload);
            }
        },
        //Acción para quitar los favoritos
        quitarDeFavoritos: (state, action) => {
            state.favoritos = state.favoritos.filter(fav => fav.idMeal !== action.payload);
        }
    }
});

//Exportamos las accionas para usarlas en los componentes
export const {
setListaPlatillos,
setRecetaSeleccionada,
agregarFavoritos,
quitarDeFavoritos,
} = recetasSlice.actions;

//Exportar el reducer para conectarlo  a la tienda(Store)
export default recetasSlice.reducer;