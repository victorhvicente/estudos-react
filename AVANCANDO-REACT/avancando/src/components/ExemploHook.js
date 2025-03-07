import {useState} from 'react';

const ExemploHook = () => {
   
    let [numero, setNumero] = useState(10);

    return (

        <div>
            <p>Numero atual: {numero}</p>
            <button onClick={ () => setNumero(30)}>Atualizar número</button>
        </div>

    );
}

export default ExemploHook;