// Componente Message que recebe props desestruturadas
const Message = ({ name, myMessage }) => {
    return (
        <div>
            {/* Renderiza a mensagem e o nome passados como props */}
            <h3>{myMessage} - {name}</h3>
        </div>
    );
}

export default Message;
