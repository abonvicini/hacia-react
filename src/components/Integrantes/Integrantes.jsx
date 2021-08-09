import Heading from "../Heading/"
import Link from "../Link"
import Parrafo from "../Paragraph"
import membersMock from "../../mock/members.json"
import "./Integrantes.css"



const Integrantes = () => {

  const getIntegrantes = (integrantes) => {
    return integrantes.map(({ id, name, githubUser, url }) =>
      <li key={id} className="li">
        {name}
        (<Link url={url}>{githubUser}</Link>)
      </li>
    )
  }

  return <>
    <div className="integrantes">
      <Heading>👋🏽 Integrantes</Heading>
      <Parrafo>

      {getIntegrantes(membersMock.data)}
      </Parrafo>
      
    </div>
  </>
}

export default Integrantes