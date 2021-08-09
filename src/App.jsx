import './App.css'
import About from './components/About'
import Integrantes from './components/Integrantes'
import Recursos from './components/Recursos/Recursos'
import Goal from './components/Goal'
import Meetings from './components/Meetings'
import Fundamentals from './components/Fundamentals/Fundamentals'
import AdvancedTopics from './components/AdvancedTopics'



function App() {
  return (
    <div className="App">
      <Meetings />
      <About />
      <Goal />
      <Integrantes />
      <Recursos />
      <Fundamentals />
      <AdvancedTopics />
    </div>
  );
}

export default App;
