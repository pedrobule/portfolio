import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const Sidebar = () => (
  <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Pedro Cavalcante</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>pedrobule</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheiro front-end</Descricao>
        <BotaoTema>trocar tema</BotaoTema>
      </SidebarContainer>
  </aside>
)

export default Sidebar
