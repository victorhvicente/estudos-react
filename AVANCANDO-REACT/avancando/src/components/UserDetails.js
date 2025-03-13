// Componente UserDetails que recebe props desestruturadas diretamente
const UserDetails = ({ nome, idade, profissao }) => {
    // Usamos um operador ternário para definir a mensagem com base na idade
    const msg = idade >= 18 ? "Pode tirar habilitação" : "Não pode tirar habilitação";

    return (
        <div>
            {/* Renderiza as informações recebidas e a mensagem calculada */}
            <p>Nome: {nome} - Idade: {idade} - Profissão: {profissao} - {msg}</p>
        </div>
    );
}

export default UserDetails;
