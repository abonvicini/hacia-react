import './App.css'
import Title from './components/Title'
import Content from './components/Content'
import Section from './components/Section'
import Subsection from './components/Subsection'
import Reuniones from './components/Reuniones'
import About from './components/About'
import Objetivos from './components/Objetivos'
import Integrantes from './components/Integrantes'
import Recursos from './components/Recursos'
import Fundamentals from './components/Fundamentals'
import Hooks from './components/Hooks'
import Hocs from './components/Hocs'
import Context from './components/Context'
import Ecosystem from './components/Ecosystem'
import Testing from './components/Testing'
import Challenges from './components/Challenges'


function App() {
  return (
    <div className="App">
      <Title />
      <Content />
      <Reuniones />
      <About />
      <Objetivos />
      <Integrantes />
      <Recursos />
      <Fundamentals />
      <Section text="Advance Topics" />
      <Subsection text="Hooks" />
      <Hooks />
      <Subsection text="HOC's" />
      <Hocs />
      <Subsection text="Context" />
      <Context />
      <Section text="Ecosystem" />
      <Ecosystem />
      <Subsection text="Testing" />
      <Testing /> 
      <Section text="Challenges" />
      <Challenges />
    </div>
  );
}

export default App;
