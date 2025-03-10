import { P } from './styles';

export type Props = {
  children: string;
  tipo?: string
  fontSize?: number
}

const Paragrafo = ({children, tipo = 'principal', fontSize}: Props) => (
  <P fontSize = {fontSize}>{children}</P>
)

export default Paragrafo
