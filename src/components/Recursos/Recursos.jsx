import Heading from "../Heading"
import Link from "../Link"
import ListItems from "../ListItems"
import documentationMock from "../../mock/documentation.json"
import "./Recursos.css"

const Recursos = () => {
  const getDocs = (docs) => docs.map (({ key, name, url }) => 

    <ListItems key={key.toString()} className="li">
        {name}
        <Link url={url}>{url}</Link>
    </ListItems>
    )


    return <>
      <div className="recursos">
      <Heading>Recursos Generales</Heading>
      {getDocs(documentationMock.docs)}

{/*   <ul>
        {getDocs(documentationMock.docs)}
      </ul> */}
      {/* ¿Es necesario usar <ul>? */}
      
    </div>
    </>
  }

  export default Recursos