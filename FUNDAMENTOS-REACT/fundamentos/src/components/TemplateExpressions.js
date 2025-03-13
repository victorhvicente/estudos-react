// Importa o componente "MeuComponente" para ser reutilizado aqui
import MeuComponente from "./MeuComponente";

const TemplateExpressions = () => {
    
    // Define uma variável simples com o nome
    const nome = "Victor Hugo";

    // Cria um objeto com mais informações sobre a pessoa
    const sobre = {
        idade: 24,
        altura: 1.78,
    };
    
    // Retorna o JSX para renderizar na tela
    return (
        <div>
            {/* Usa a variável "nome" diretamente dentro do JSX */}
            <h1>Olá, {nome}. Tudo bem ?</h1>

            {/* Acessa as propriedades do objeto "sobre" dentro do JSX */}
            <h3>Sua idade é: {sobre.idade} e tem {sobre.altura} de altura ?</h3>

            {/* Renderiza o componente importado "MeuComponente" aqui dentro */}
            <MeuComponente />
        </div>
    );
}


export default TemplateExpressions;
