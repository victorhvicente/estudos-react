// Componente que altera o estado da mensagem no componente pai
const ChangeMessageState = ({ handleMessage }) => {
    
    // Array de mensagens disponíveis
    const messages = ["Oi", "Olá", "Eae", "Tudo bem ?"];

    return (
        <div>
            {/* Cada botão chama a função handleMessage passando uma mensagem diferente */}
            <button onClick={() => handleMessage(messages[0])}>1</button>
            <button onClick={() => handleMessage(messages[1])}>2</button>
            <button onClick={() => handleMessage(messages[2])}>3</button>
            <button onClick={() => handleMessage(messages[3])}>4</button>
        </div>
    );
}

export default ChangeMessageState;
