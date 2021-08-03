import './App.css'
import Title from './components/Title'
import Content from './components/Content'
import Reuniones from './components/Reuniones'
import About from './components/About'
import Objetivos from './components/Objetivos'
import Integrantes from './components/Integrantes'
import Recursos from './components/Recursos'
import Fundamentals from './components/Fundamentals'
import Ecosystem from './components/Ecosystem'
import Challenges from './components/Challenges'
import Advancetopics from './components/Advancetopics'


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
      <Advancetopics />
      <Ecosystem />
      <Challenges />
    </div>
  );
}

export default App;
