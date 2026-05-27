import HeaderComponent from "../Header/HeaderComponent";
import BodyComponent from "../Body/BodyComponent";
import FooterComponent from "../Footer/FooterComponent";
import Card from "../Card/Card";
import { BodyContainer } from "./styles";
import { GlobalStyle } from "../../styles/GlobalStyles";

const Index = () => {
  return (
    
      <BodyContainer>
          <HeaderComponent />
          <BodyComponent />
          <FooterComponent />
      </BodyContainer>
   
    
  );
}

export default Index;
