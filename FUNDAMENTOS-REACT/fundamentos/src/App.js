import './App.css';
import MeuComponente from './components/MeuComponente';
import PrimeiroComponent from './components/PrimeiroComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Eventos from './components/Eventos';
import Desafio from './components/Desafio';

function App() {
  return (
    <div className="App">
        <h1>Hello World!</h1>
        <PrimeiroComponent />
        <TemplateExpressions />
        <MeuComponente />
        <Eventos />
        <Desafio />
    </div>
  );
}

export default App;
