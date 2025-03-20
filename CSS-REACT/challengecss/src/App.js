// Importação do arquivo de CSS global para a aplicação
import './App.css';

// Importação dos componentes Cars e CarsOutroResultado
import Cars from './components/Cars';
import CarsOutroResultado from './components/CarsOutroResultado';

// Função principal da aplicação
function App() {

  // Definindo uma lista de carros com objetos contendo nome, marca e cor
  const myCars = [
    { id: 1, nome: "Monza", marca: "Ford", cor: "Blue" },
    { id: 2, nome: "Jeep Renegade", marca: "Jeep", cor: "Black" },
    { id: 3, nome: "Corsa", marca: "Chevrolet", cor: "White" }
  ];

  // Retorno do JSX que compõe a interface da aplicação
  return (
    <div className="App">
      {/* Título principal da página */}
      <h1 className="titulo-principal">Lista de Carros</h1>

      {/* Renderiza o componente Cars (sem props por enquanto) */}
      <Cars />

      {/* Container para o segundo formato de apresentação de carros */}
      <div className="car-container">
        <h2>Outra forma</h2>

        {/* Percorre o array myCars e renderiza o CarsOutroResultado para cada carro */}
        {myCars.map((carro) => {
          return (
            // Renderiza CarsOutroResultado e passa o carro como prop
            <CarsOutroResultado key={carro.id} carro={carro} />
          );
        })}
      </div>

    </div>
  );
}

export default App;
