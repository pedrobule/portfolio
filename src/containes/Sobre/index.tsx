import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo='secundario'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa consequatur officiis sit commodi adipisci impedit atque eum, fugiat dolorum corrupti deserunt aliquam doloremque repudiandae odio velit sed cupiditate possimus.
    </Paragrafo>
    <GithubSecao>
      <div>
        <img src="https://github-readme-stats.vercel.app/api?username=pedrobule&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pedrobule&layout=compact&langs_count=7&theme=dracula"/>
      </div>
    </GithubSecao>
  </section>
)

export default Sobre
