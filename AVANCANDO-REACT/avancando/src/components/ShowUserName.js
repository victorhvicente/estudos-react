// Componente simples que recebe props
const ShowUserName = (props) => {
    return (
        <div>
            {/* Mostra o nome passado via props */}
            <h2>O nome do usuário é: {props.name}</h2>
        </div>
    );
};

export default ShowUserName;
