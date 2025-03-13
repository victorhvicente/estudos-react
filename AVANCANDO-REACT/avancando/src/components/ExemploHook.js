// Importa o hook useState para gerenciar o estado dentro do componente
import { useState } from 'react';

const ExemploHook = () => {
    // Define o estado 'numero', inicializando ele com o valor 10
    // 'setNumero' é a função responsável por atualizar o valor de 'numero'
    let [numero, setNumero] = useState(10);

    return (
        <div>
            {/* Exibe o valor atual de 'numero' */}
            <p>Numero atual: {numero}</p>

            {/* Botão que, ao ser clicado, atualiza o estado 'numero' para 30 */}
            <button onClick={() => setNumero(30)}>Atualizar número</button>
        </div>
    );
};

export default ExemploHook;
