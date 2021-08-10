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
    <section className="integrantes">
      <Heading>👋🏽 Integrantes</Heading>
      {getIntegrantes(membersMock.data)}
    </section>
  </>
}

export default Integrantes