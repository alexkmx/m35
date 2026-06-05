import { Routes, Route } from "react-router-dom";
import Index from "./Index";
import Platillos from "../Body/Platillos/Platillos";
import Blog from "../Body/Blog/Blog";
import Contacto from "../Body/Contacto/Contacto";
import RecetaDetalle from "../Body/Recetas/RecetaDetalle";
import HeaderComponent from "../Header/HeaderComponent";
import FooterComponent from "../Footer/FooterComponent";
import {BodyContainer} from "./styles";
import RecetasAlAzar from "../Body/Recetas/Recetas"; 

const App = () => {
  return (
    <BodyContainer>
     <HeaderComponent />
      
      <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platillos" element={<Platillos />} />
            <Route path="/recetas" element={<RecetasAlAzar />}/>
            <Route path="/recetas/:id" element={<RecetaDetalle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            
      </Routes>
      <FooterComponent />
    </BodyContainer>
  );
}

export default App;