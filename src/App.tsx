import Projetos from './containes/Projetos'
import Sidebar from './containes/Sidebar'
import Sobre from './containes/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal/>
      <Container>
        <Sidebar/>
        <main>
          <Sobre />
          <Projetos/>
        </main>
      </Container>
    </>
    )
}

export default App
