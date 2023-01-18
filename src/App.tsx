import CardAmount from './components/CardAmount';
import Form from './components/Form'; 
import GlobalStyle from './styles/global';
import { ContainerStyled } from './styles/style';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ContainerStyled>
        <Form/>  
        <CardAmount/>
      </ContainerStyled>
    </>
  );
}

export default App;
