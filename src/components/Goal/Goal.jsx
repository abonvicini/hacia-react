import Heading from "../Heading"
import Paragraph from "../Paragraph"
import "./Goal.css"

const Goal = () => {
  return (
    <section className="goal">
      <Heading>🏆 Objetivos</Heading>
      <Paragraph>
        El objetivo es armar un grupo de estudio para ir hacia React,
        desde el inicio, siguiendo el routemap en conjunto. Al principio
        con proyectos individuales. Hasta poder llegar a un nivel avanzado
        y hacer challenges colaborativos. La idea es pasar por todos los
        puntos del routemap.
      </Paragraph>
    </section>
  )
}

export default Goal

