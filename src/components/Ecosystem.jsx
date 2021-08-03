import Section from "./Section"
import Subsection from "./Subsection"
import Testing from "./Testing"


const Ecosystem = () => {
  return <>
    <Section text="Ecosystem" />
    <p>Paquete NPM con React:
      <a href="https://www.npmjs.com/package/create-react-library">
        https://www.npmjs.com/package/create-react-library</a>
    </p>
    <Subsection text="Testing" />
    <Testing />
  </>

}


export default Ecosystem