import { useState } from 'react';
import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  // Hook para definir um estado com o nome
  const [nome] = useState("Victor");

  // Definindo uma variável para teste de condições
  const n = 15;

  // Variável booleana para controlar a classe dinâmica
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS GLOBAL (importado de App.css) */}
      <h1>React com CSS</h1>

      {/* CSS DE COMPONENTE (estilização interna no componente) */}
      <MyComponents />

      {/* INLINE CSS - estilo direto no elemento */}
      <p style={{ color: "blue", background: "black", textAlign: "center", padding: "10px" }}>
        Este parágrafo foi estilizado com CSS inline.
      </p>

      {/* INLINE CSS DINÂMICO - muda o estilo baseado em uma condição */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Estilizado com CSS inline dinâmico
      </h2>

      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        Estilizado com CSS inline dinâmico
      </h2>

      {/* INLINE CSS DINÂMICO COM TEXTO ESPECÍFICO */}
      <h2 style={nome === "Victor" ? { color: "blue", background: "gold", padding: "15px" } : null}>
        Victor
      </h2>

      {/* CLASSE DINÂMICA - muda a classe do elemento com base na variável booleana */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título terá classe dinâmica
      </h2>

      {/* CSS MODULES */}
      <Title />
    </div>
  );
}

export default App;

