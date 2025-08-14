// Importa o hook useState do React para gerenciamento de estado
import { useState } from 'react';
// Importa o arquivo CSS para estilização do formulário
import './MyForm.css';

// Componente funcional MyForm
const MyForm = () => {
  // 1. Declara dois estados: um para armazenar o nome e outro para o e-mail
  const [name, setName] = useState(""); // Estado inicial do nome é uma string vazia
  const [email, setEmail] = useState(""); // Estado inicial do e-mail é uma string vazia

  // Função para lidar com a mudança no campo de nome
  const handleName = (e) => {
    setName(e.target.value); // Atualiza o estado 'name' com o valor digitado
    console.log("Mudou o nome:", e.target.value); // Mostra no console o novo valor do nome
  };

  // Função para lidar com a mudança no campo de e-mail
  const handleEmail = (e) => {
    setEmail(e.target.value); // Atualiza o estado 'email' com o valor digitado
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede que a página recarregue ao enviar o formulário
    console.log("Enviando:", { name, email }); // Exibe os dados no console
  };

  // JSX que define a estrutura do formulário
  return (
    <div>
      {/* 1 - Criação do formulário com evento onSubmit */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Label associada ao input de nome via htmlFor */}
          <label htmlFor="name">Nome</label>
          <input
            type="text" // Tipo do input é texto
            name="name" // Nome do campo (usado em envio de formulários)
            id="name" // ID único para associar com o label
            placeholder="Digite seu nome" // Texto exibido como dica dentro do campo
            onChange={handleName} // Evento chamado quando o valor do input mudar
            value={name} // Valor atual do input vinculado ao estado 'name'
          />
        </div>

        {/* 2 - Label envolvendo diretamente o input de e-mail */}
        <label>
          <span>E-mail</span> {/* Texto exibido no rótulo */}
          <input
            type="email" // Tipo do input é e-mail (validação automática pelo navegador)
            name="email" // Nome do campo
            placeholder="Digite seu e-mail" // Dica dentro do input
            // onChange={(e) => setEmail(e.target.value)} -> Alternativa inline
            onChange={handleEmail} // Função chamada quando o campo mudar
            value={email} // Valor atual do input vinculado ao estado 'email'
          />
        </label>

        {/* Botão de envio do formulário */}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default MyForm;
