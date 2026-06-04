import { useEffect, useState } from "react";
import FooterComponent from "../../Footer/FooterComponent";
import axios from "axios"
import {BotonesContainer, PlatillosContainer, CardsContainer, Card, Button} from "./styles";
import { Link } from "react-router";


const ListaPlatillos = () => {

    const [platillos, setPlatillos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [cargandoPlatillos, setCargandoPlatillos] = useState(false);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
                
                if(response.data.categories) {
                    setCategorias(response.data.categories);

                    if(response.data.categories.length > 0) {
                        setCategoriaSeleccionada(response.data.categories[0].strCategory);
                        
                    }
                }
                } catch (error) {
                    console.error("Error al obtener categorias", error)
                }
            };
            fetchCategorias();
        }, []);
    

    useEffect(() => {

        if(!categoriaSeleccionada) return;

        const fetchPlatillosPorCategoria = async () => {
            setCargandoPlatillos(true);
            try {

                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriaSeleccionada}`);
                
                if(response.data.meals){
                    setPlatillos(response.data.meals);
                } else {
                    setPlatillos([]);
                }
            } catch (error) {
                console.error("Error al obtener los platillos", error);
                setPlatillos([]);
            } finally {
                setCargandoPlatillos(false);
            }
        };

        fetchPlatillosPorCategoria();
    }, [categoriaSeleccionada]);


    return (
        <PlatillosContainer>
          <h2>Selecciona categoría:</h2>
                
            <BotonesContainer>
                {categorias.map((cat) => (
                    <Button 
                        key={cat.idCategory}
                        onClick={() => setCategoriaSeleccionada(cat.strCategory)}
                       
                    >
                        {cat.strCategory}
                    </Button>
                ))}
            </BotonesContainer>

            
            <h2>Platillos de: {categoriaSeleccionada}</h2>
            <p>Clic en el platillo de tu elección para ver la receta:</p>
            {cargandoPlatillos ? (
                <p>Cargando platillos...</p>
            ) : (
                <CardsContainer>
                    {platillos?.map((platillo) => {
                        const { idMeal, strMeal, strMealThumb } = platillo;

                        return (
                            <Link to={`/recetas/${idMeal}`} key={idMeal} styles={{backgroundColor: "red",
                                color: "white"}}>
                                <Card key={idMeal}>
                                    <img src={strMealThumb} alt={strMeal} style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3 style={{ fontSize: '1.1rem', marginTop: '10px', color: "white", textDecoration: "none" }}>{strMeal}</h3>
                                </Card>
                            </Link>
                        );
                    })}
                </CardsContainer>
            )}
        
        </PlatillosContainer>
    );
};

export default ListaPlatillos;