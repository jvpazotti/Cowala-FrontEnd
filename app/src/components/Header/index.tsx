import { Container , Images} from './styles'
import cowala from "../Section/cowala.png"
import text from "../Section/text.png"
export function Header() {
  return (
    <Container>
        <Images>
        <img className="icon" src={cowala}/>
        <img className="name" src={text}/>
        </Images>
    </Container>
  )
}