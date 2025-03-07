import { useState } from "react";

const RenderizarLista = () => {
    const [lista] = useState(["Victor", "Hugo", "Vicente"]);

    const [usuarios, setUsuarios] = useState([
        { id: 1, nome: "Luppy", idade: 10 },
        { id: 2, nome: "Schwarzenegger", idade: 80 },
        { id: 3, nome: "Leôncio", idade: 110 }
    ]);

    const deleteRandom = () => {
        if (usuarios.length === 0) return; // Evita erro se a lista estiver vazia
        
        const randomIndex = Math.floor(Math.random() * usuarios.length);
        const randomId = usuarios[randomIndex].id;

        setUsuarios((prevUsuarios) =>
            prevUsuarios.filter((user) => user.id !== randomId)
        );
    };

    return (
        <div>
            <ul>
                {lista.map((item, indice) => (
                    <li key={indice}>{item}</li>
                ))}
            </ul>
            <ul>
                {usuarios.map((user) => (
                    <li key={user.id}>{user.nome} - {user.idade}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar Aleatório</button>
        </div>
    );
};

export default RenderizarLista;