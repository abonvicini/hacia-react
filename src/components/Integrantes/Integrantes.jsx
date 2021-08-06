import Heading from "../Heading/"
import Link from "../Link"
import membersMock from "../../mock/members.json"
import "./Integrantes.css"



const Integrantes = () => {

  const getIntegrantes = (integrantes) => {
    return integrantes.map(({ id, name, githubUser, url }) =>
      <li key={id} className="li">
        {name}
        (<Link url={url}>{githubUser}</Link>)
      </li>
    );
  }

  return <>
    <Heading>👋🏽 Integrantes</Heading>
    <div className="integrantes">
      <ul>
        {getIntegrantes(membersMock.data)}
      </ul>
    </div>
  </>
}

export default Integrantes