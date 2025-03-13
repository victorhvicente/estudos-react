import { useState } from 'react';
import './App.css';
import Batman from './assets/batman.jpg';

// Importação dos componentes criados
import ExemploHook from './components/ExemploHook';
import RenderizarLista from './components/RenderizarLista';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  // Hook useState para armazenar o nome do usuário
  const [userName] = useState("Victor Hugo");

  // Array de carros com detalhes
  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true },
    { id: 2, brand: "KIA", km: 5000, color: "Rosa", newCar: false },
    { id: 3, brand: "Lamborghini", km: 70000, color: "Preto", newCar: true }
  ];

  // Função para exibir alerta
  function messageAlert() {
    alert("Você clicou no botão !");
  }

  // Estado para controlar a mensagem
  const [message, setMessage] = useState("");

  // Função para atualizar a mensagem recebida de um componente filho
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  // Desafio: lista de pessoas
  const peoples = [
    { id: 1, nome: "Victor", idade: 24, profissao: "Desenvolvedor" },
    { id: 2, nome: "Hugo", idade: 17, profissao: "Aprendiz" },
    { id: 3, nome: "Vicente", idade: 58, profissao: "Professor" }
  ];

  return (
    <div className="App">
      {/* Título da aplicação */}
      <h1>Avançando em React</h1>

      {/* Renderiza imagens direto da pasta public */}
      <div>
        <img src="/spiderman.png" alt="Homem-Aranha" />
      </div>

      {/* Renderiza imagem da pasta src/assets */}
      <div>
        <img src={Batman} alt="Batman" />
      </div>

      {/* Renderiza o componente com hook de estado */}
      <ExemploHook />

      {/* Renderiza uma lista simples e manipulação de estado */}
      <RenderizarLista />

      {/* Renderização condicional com estado e ternário */}
      <ConditionalRender />

      {/* Passa uma prop para o componente ShowUserName */}
      <ShowUserName name={userName} />

      {/* Exemplo de props por destructuring direto no componente */}
      <CarDetails brand="Toyota" km={100000} color="Vermelho" newCar={false} />
      <CarDetails brand="Ford" km={200000} color="Azul" newCar={false} />
      <CarDetails brand="Honda" km={0} color="Cinza" newCar={true} />

      {/* Loop sobre o array de carros para renderizar múltiplas vezes o mesmo componente */}
      {cars.map((car) => (
        <CarDetails
          key={car.id} // Key única para evitar erros no React
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      {/* Teste de fragmento - não gera div extra no DOM */}
      <Fragment propFragment="Teste Fragment" />

      {/* Componente Container usando children e props */}
      <Container myValue="Valor Testing">
        <p>Este é o conteúdo</p>
      </Container>

      <Container myValue={2025}>
        <h4>Outro conteúdo aqui</h4>
      </Container>

      {/* Passando a função como prop para o componente filho */}
      <ExecuteFunction myFunction={messageAlert} />

      {/* State lift - compartilhamento de estado entre componentes pai e filho */}
      <Message name={userName} myMessage={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* Desafio: renderizar lista de pessoas com UserDetails */}
      {peoples.map((people) => (
        <UserDetails
          key={people.id} // Key única para cada pessoa
          nome={people.nome}
          idade={people.idade}
          profissao={people.profissao}
        />
      ))}
    </div>
  );
}

export default App;


