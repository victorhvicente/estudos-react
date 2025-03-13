// Importa o hook useState para gerenciar estados
import { useState } from "react";

const RenderizarLista = () => {
    // Cria uma lista simples com strings
    const [lista] = useState(["Victor", "Hugo", "Vicente"]);

    // Cria um estado com uma lista de objetos representando usuários
    const [usuarios, setUsuarios] = useState([
        { id: 1, nome: "Luppy", idade: 10 },
        { id: 2, nome: "Schwarzenegger", idade: 80 },
        { id: 3, nome: "Leôncio", idade: 110 }
    ]);

    // Função que remove um usuário aleatório da lista
    const deleteRandom = () => {
        if (usuarios.length === 0) return; // Evita erro se a lista já estiver vazia
        
        // Gera um índice aleatório com base no tamanho da lista
        const randomIndex = Math.floor(Math.random() * usuarios.length);
        const randomId = usuarios[randomIndex].id;

        // Usa 'setUsuarios' para atualizar o estado, filtrando o usuário com o ID sorteado
        setUsuarios((prevUsuarios) =>
            prevUsuarios.filter((user) => user.id !== randomId)
        );
    };

    return (
        <div>
            {/* Renderiza a primeira lista simples com índice como chave */}
            <ul>
                {lista.map((item, indice) => (
                    <li key={indice}>{item}</li>
                ))}
            </ul>

            {/* Renderiza a lista de objetos (usuários), usando o ID como chave */}
            <ul>
                {usuarios.map((user) => (
                    <li key={user.id}>{user.nome} - {user.idade}</li>
                ))}
            </ul>

            {/* Botão que chama a função para deletar um usuário aleatório */}
            <button onClick={deleteRandom}>Deletar Aleatório</button>
        </div>
    );
};

export default RenderizarLista;
