import {Routes, Route} from "react-router-dom";
import Index from "./Index";
import Platillos from "../Body/Platillos/Platillos";
import Recetas from "../Body/Recetas/Recetas";
import Blog from "../Body/Blog/Blog";
import Contacto from "../Body/Contacto/Contacto";

const App = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/platillos" element={<Platillos />}/>
            <Route path="/recetas" element={<Recetas />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contacto" element={<Contacto />}/>
      </Routes>
    </>
  );
}

export default App;