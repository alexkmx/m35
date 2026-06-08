import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {BuscadorContainer} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {setListaPlatillos} from "../../../features/recetas/recetasSlice";

const ListaPlatillos = () => {
    // Estados para el índice alfabético y carga
    //const [platillosAlfabetico, setPlatillosAlfabetico] = useState([]);
    //const [cargando, setCargando] = useState(true);

    const dispatch = useDispatch();

    //  const platillos = useSelector((state) => state.recetas.ListaPlatillos);
    const platillosAlfabetico = useSelector((state) => state.recetas.listaPlatillos);

    // Estados para la búsqueda por nombre
    const [cargando, setCargando] = useState(true);
    const [busqueda, setBusqueda] = useState("");
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [buscando, setBuscando] = useState(false);

    // 1. EFECTO: Carga el índice alfabético (A-Z) al iniciar la app
    useEffect(() => {

        if(platillosAlfabetico?.length > 0) {
            setCargando(false);
            return;
        }

        const fetchPlatillosPorAbecedario = async () => {
            setCargando(true);
            const abecedario = "abcdefghijklmnopqrstuvwxyz".split("");
            const listaFiltrada = [];

            try {
                // Creamos todas las promesas de peticiones al mismo tiempo (A, B, C...)
                const promesas = abecedario.map(letra =>
                    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`)
                );

                // Esperamos a que todas las peticiones terminen
                const respuestas = await Promise.all(promesas);

                respuestas.forEach((response) => {
                    // Si la API regresó platillos para esa letra
                    if (response.data.meals && response.data.meals.length > 0) {
                        // Tomamos ÚNICAMENTE el primer platillo de la lista ([0])
                        listaFiltrada.push(response.data.meals[0]);
                    }
                });

                dispatch(setListaPlatillos(listaFiltrada));

            } catch (error) {
                console.error("Error al armar el índice alfabético:", error);
            } finally {
                setCargando(false);
            }
        };

        fetchPlatillosPorAbecedario();
    }, [dispatch, platillosAlfabetico?.length]);

    // 2. EFECTO: Se ejecuta cada vez que el usuario escribe en el buscador
    useEffect(() => {
        // Si el input está vacío, limpiamos los resultados de búsqueda
        if (busqueda.trim() === "") {
            setResultadosBusqueda([]);
            return;
        }

        const buscarPlatilloPorNombre = async () => {
            setBuscando(true);
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`);
                if (response.data.meals) {
                    setResultadosBusqueda(response.data.meals);
                } else {
                    setResultadosBusqueda([]); // No se encontraron resultados
                }
            } catch (error) {
                console.error("Error en la búsqueda:", error);
            } finally {
                setBuscando(false);
            }
        };

        // Pequeño temporizador (Debounce) para no saturar la API en cada tecla que presiona el usuario
        const delayDebounce = setTimeout(() => {
            buscarPlatilloPorNombre();
        }, 400);

        return () => clearTimeout(delayDebounce);
    }, [busqueda]);

    // Decidimos qué lista mostrar en pantalla basándonos en si el usuario está buscando algo o no
    const modoBusquedaActivo = busqueda.trim() !== "";
    const platillosA_Mostrar = modoBusquedaActivo ? resultadosBusqueda : platillosAlfabetico;

    return (
        <section style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            
            
            <BuscadorContainer>
                <input 
                    type="text"
                    placeholder="🔍 Buscar platillo por nombre..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    
                />
            </BuscadorContainer>

            {/* --- TÍTULOS DINÁMICOS --- */}
            <h2>{modoBusquedaActivo ? `Resultados para: "${busqueda}"` : "Índice de Platillos (A - Z)"}</h2>
            
            {/* --- ESTADOS DE CARGA --- */}
            {(cargando && !modoBusquedaActivo) || buscando ? (
                <p>Buscando delicias gastronómicas...</p>
            ) : platillosA_Mostrar.length === 0 ? (
                <p>No se encontraron platillos que coincidan con tu búsqueda.</p>
            ) : (
                /* --- CUADRÍCULA DE PLATILLOS --- */
                <section style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                    
                    gap: '20px',
                    marginTop: '20px',
                    
                }}>
                    {platillosA_Mostrar.map((platillo) => {
                        const { idMeal, strMeal, strMealThumb } = platillo;
                        
                        // Extraemos la primera letra para el distintivo visual
                        const primeraLetra = strMeal.charAt(0).toUpperCase();

                        return (
                            <Link to={`/recetas/${idMeal}`} key={idMeal} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <article style={{ 
                                    border: '1px solid #e0e0e0', 
                                    padding: '15px', 
                                    borderRadius: '12px', 
                                    textAlign: 'center',
                                    backgroundColor: '#ff00ff',
                                    color: 'white',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                    position: 'relative'
                                }}>
                                    {/* Distintivo de la letra (Solo en modo alfabético) */}
                                    {!modoBusquedaActivo && (
                                        <span style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            backgroundColor: '#ff6b6b',
                                            color: 'white',
                                            padding: '2px 8px',
                                            borderRadius: '15px',
                                            fontSize: '12px',
                                            fontWeight: 'bold'
                                        }}>
                                            Letra {primeraLetra}
                                        </span>
                                    )}

                                    <img 
                                        src={strMealThumb} 
                                        alt={strMeal} 
                                        style={{ width: '100%', borderRadius: '8px', height: '180px', objectFit: 'cover' }} 
                                    />
                                    <h3 style={{ fontSize: '1rem', marginTop: '12px', height: '40px', overflow: 'hidden' }}>
                                        {strMeal}
                                    </h3>
                                </article>
                            </Link>
                        );
                    })}
                </section>
            )}
        </section>
    );
};

export default ListaPlatillos;