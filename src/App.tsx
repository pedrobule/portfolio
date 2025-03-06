import { ThemeProvider } from 'styled-components'

import Projetos from './containes/Projetos'
import Sidebar from './containes/Sidebar'
import Sobre from './containes/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLigth from './themes/ligth'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLigth}>
      <EstiloGlobal/>
      <Container>
        <Sidebar trocaTema={trocaTema}/>
        <main>
          <Sobre />
          <Projetos/>
        </main>
      </Container>
    </ThemeProvider>
    )
}

export default App
