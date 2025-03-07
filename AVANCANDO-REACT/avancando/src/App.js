import './App.css';
import Batman from './assets/batman.jpg';
import ExemploHook from './components/ExemploHook';
import RenderizarLista from './components/RenderizarLista';


function App() {
  return (
    <div className="App">

       <h1>Avançando em React</h1>
      <div>
          {/* imagem em public */}
          <img src="/spiderman.png" alt="Homem-Aranha"/>
      </div>
      <div>
        {/* imagem em src/assets */}
        <img src={Batman} alt="Batman"></img>
      </div>
      <ExemploHook />
      <RenderizarLista />
    </div>
  );
}

export default App;
