// Importa o hook useState para gerenciar estados dentro do componente
import { useState } from 'react';

const ConditionalRender = () => {
    // Define um estado 'x' inicializado como 'false' (não tem setX, então ele é fixo)
    const [x] = useState(false);

    // Define o estado 'nome' inicializado como "Victor" e cria a função 'setNome' para atualizá-lo
    const [nome, setNome] = useState("Victor");

    return (
        <div>
            <h1>Isso seria exibido?</h1>

            {/* Renderização condicional usando o operador && */}
            {x && <p>Se X for true, sim!</p>}
            {/* Se X for false, esta linha abaixo é exibida */}
            {!x && <p>Agora X é falso</p>}

            <h1>IF Ternário</h1>
            {/* Renderização condicional com operador ternário */}
            {nome === "Victor" ? (
                <div>
                    <p>Nome é Victor</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}

            {/* Botão que, ao ser clicado, atualiza o estado 'nome' para "Hugo" */}
            <button onClick={() => setNome("Hugo")}>Clique aqui!</button>

            {/* Exibe o novo nome após o clique */}
            <p>Novo nome após clique: {nome}</p>
        </div>
    );
};

export default ConditionalRender;

