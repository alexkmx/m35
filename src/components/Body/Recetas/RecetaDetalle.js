import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {RecetaContainer, CardDetalle} from "./styles"

const RecetaDetalle = () => {
    const { id } = useParams();
    const [receta, setReceta] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchDetalleReceta = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (response.data && response.data.meals) {
                    setReceta(response.data.meals[0]);
                }
            } catch (error) {
                console.error("Error al traer el detalle de la receta", error);
            } finally {
                setCargando(false);
            }
        };

        if (id) fetchDetalleReceta();
    }, [id]);

    if (cargando) return <p style={{ padding: '20px' }}>Cargando receta...</p>;
    if (!receta) return <p style={{ padding: '20px' }}>No se encontró la receta.</p>;

    // Extraemos propiedades de texto seguras para el JSX
    const titulo = receta.strMeal;
    const imagen = receta.strMealThumb;
    const instrucciones = receta.strInstructions;

    return (
        <RecetaContainer>
                <CardDetalle>
                <h1>{titulo}</h1>
                <img src={imagen} alt={titulo} style={{ width: '100%', borderRadius: '10px' }} />
                <h2 style={{ marginTop: '20px' }}>Instrucciones</h2>
                <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>{instrucciones}</p>
                </CardDetalle>
            
        </RecetaContainer>
    );
};

export default RecetaDetalle;