import Header from './componentes/Header/Header';
import Pesquisa from './componentes/Pesquisa/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function App() {
  return (
    <AppContainer> 
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
