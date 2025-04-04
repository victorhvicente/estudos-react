import { useState } from 'react';
import './MyForm.css';

const MyForm = () => {
  // Gerenciamento de dados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value); // Atualiza o estado com o valor digitado
    console.log("Mudou o nome:", e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    console.log("Enviando:", { name, email });
  };

  return (
    <div>
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            // onChange={(e) => setEmail(e.target.value)} -> outra maneira inline
            onChange={handleEmail}
            value={email}
          />
        </label>


        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
