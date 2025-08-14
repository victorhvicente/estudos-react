// Componente funcional Container que recebe props: children e myValue
const Container = ({ children, myValue }) => {
    return (
        <div>
            {/* Título fixo do componente */}
            <h1>Este é um Container</h1>

            {/* Renderiza o conteúdo filho passado entre as tags do componente */}
            {children}

            {/* Exibe o valor recebido através da prop 'myValue' */}
            <p>O valor é: {myValue}</p>
        </div>
    );
}

// Exporta o componente para ser utilizado em outros arquivos
export default Container;
