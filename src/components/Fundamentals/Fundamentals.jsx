import Heading from "../Heading"
import Link from "../Link"
import Parrafo from "../Paragraph"
import fundamentalsMook from "../../mock/fundamentals.json"
import ListItems from "../ListItems"
import "./Fundamentals.css"

const Fundamentals = () => {

  const getInfo = fundamentalsMook.data.map(({ key, name, url }) =>
    <ListItems key={key.toString()} className="li">
      {name}
      <Link url={url}>{url}</Link>
    </ListItems>)

  return (
    <section className="fundamentals">
      <Heading>Fundamentals</Heading>
      <Parrafo>
        {getInfo}
      </Parrafo>
    </section>
  )
}

export default Fundamentals