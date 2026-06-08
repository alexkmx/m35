import {configureStore} from "@reduxjs/toolkit";
import recetasReducer from "../../features/recetas/recetasSlice";

export const store = configureStore({
    reducer: {
        recetas: recetasReducer, //Conectamos nuestro slice de recetas
    },
});