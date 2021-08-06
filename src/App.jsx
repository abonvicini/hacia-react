import './App.css'
import About from './components/About'
import Integrantes from './components/Integrantes'
import Recursos from './components/Recursos/Recursos'
import Goal from './components/Goal'
import Meetings from './components/Meetings'
import Fundamentals from './components/Fundamentals/Fundamentals'



function App() {
  return (
    <div className="App">
      <Meetings />
      <About />
      <Goal />
      <Integrantes />
      <Recursos />
      <Fundamentals />
    </div>
  );
}

export default App;
