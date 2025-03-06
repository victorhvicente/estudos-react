import MeuComponente from "./MeuComponente";

const TemplateExpressions = () => {
    
    const nome = "Victor Hugo";

    const sobre = {
        idade: 24,
        altura: 1.78,
    };
    
    return (
        <div>
            <h1>Olá, {nome}. Tudo bem ? </h1>
            <h3>Sua idade é: {sobre.idade} e tem {sobre.altura} de altura ?</h3>
            <MeuComponente />
        </div>
    );
}

export default TemplateExpressions;