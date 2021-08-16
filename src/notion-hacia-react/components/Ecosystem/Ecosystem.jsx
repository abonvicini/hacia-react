import Heading from "../Heading"
import Paragraph from "../Paragraph"
import ecosystemMook from "../../mock/ecosystem.json"
import { Fragment } from "react"
import Link from "../Link"
import "./Ecosystem.css"
import ListItems from "../ListItems"


const Ecosystem = () => {

  const getLink = (links) => links.map(({ name, url }) =>
    <ListItems>
      {name}
      <Link url={url}>{url}</Link>
      <br />
    </ListItems>

  )
  const getTitle = (titles) => titles.map(({ title, links }) =>
    <Fragment>
      <Heading>{title}</Heading>
      {getLink(links)}
    </Fragment>

  )


  return <section className="ecosystem">
    {getTitle(ecosystemMook.data)}
  </section>

}


export default Ecosystem

{/* <>
    <Section text="Ecosystem" />
    <p>Paquete NPM con React:
      <a href="https://www.npmjs.com/package/create-react-library">
        https://www.npmjs.com/package/create-react-library</a>
    </p>
    <Subsection text="Testing" />
    <Testing />
  </> */}