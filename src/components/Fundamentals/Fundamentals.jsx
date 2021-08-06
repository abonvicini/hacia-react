import Heading from "../Heading"
import Link from "../Link"
import fundamentalsMook from "../../mock/fundamentals.json"
import ListItems from "../ListItems"
import "./Fundamentals.css"

const Fundamentals = () => {
  
  const getInfo = fundamentalsMook.data.map( ({ key, name, url }) => 
    <ListItems key={key.toString()} className="li">
      {name}
      <Link url={url}>{url}</Link>
    </ListItems> )
  
  return (
    <div className="fundamentals">
      <Heading>Fundamentals</Heading>
      {getInfo}
    </div>
  )
}

export default Fundamentals