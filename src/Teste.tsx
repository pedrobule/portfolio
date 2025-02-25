import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

function Teste() {
  return(
    <>
      <Botao fontSize="18px" principal>Clique aqui</Botao>
      <Botao principal={false}>Cancelar</Botao>
    </>
  )
}

export default Teste

