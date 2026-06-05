import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RecetasAlAzar = () => {
    const [recetasAleatorias, setRecetasAleatorias] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerRecetasAleatorias = async () => {
            setCargando(true);
            try {
                // Generamos tres promesas simultáneas al endpoint "random.php"
                const peticiones = [
                    axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
                    axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
                    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
                ];

                // Esperamos a que las tres peticiones respondan
                const respuestas = await Promise.all(peticiones);

                // Extraemos la receta de cada respuesta y las guardamos en una lista
                const tresRecetas = respuestas.map(res => res.data.meals[0]);
                
                setRecetasAleatorias(tresRecetas);
            } catch (error) {
                console.error("Error al obtener las recetas al azar:", error);
            } finally {
                setCargando(false);
            }
        };

        obtenerRecetasAleatorias();
    }, []);

    if (cargando) return <p style={{ padding: '20px', textAlign: 'center' }}>Seleccionando tres delicias al azar...</p>;

    return (
        <section style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🎲 Recomendaciones del Día (Al Azar)</h2>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '25px' 
            }}>
                {recetasAleatorias.map((receta) => {
                    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = receta;

                    return (
                        <Link to={`/recetas/${idMeal}`} key={idMeal} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <article style={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                                backgroundColor: '#ff00ff',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}>
                                <img 
                                    src={strMealThumb} 
                                    alt={strMeal} 
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                                />
                                <div style={{ padding: '15px' }}>
                                    <span style={{ 
                                        fontSize: '11px', 
                                        backgroundColor: '#eee', 
                                        padding: '3px 8px', 
                                        borderRadius: '10px',
                                        color: '#555'
                                    }}>
                                        {strCategory} • {strArea}
                                    </span>
                                    <h3 style={{ marginTop: '10px', fontSize: '1.2rem', color: 'white' }}>{strMeal}</h3>
                                    <p style={{ color: 'white', fontSize: '14px', fontWeight: 'bold', marginTop: '10px' }}>
                                        Ver receta completa →
                                    </p>
                                </div>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default RecetasAlAzar;