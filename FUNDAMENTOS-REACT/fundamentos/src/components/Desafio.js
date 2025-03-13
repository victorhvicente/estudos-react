// Componente que define dois números e uma função de soma
const Desafio = () => {
    const n1 = 10;
    const n2 = 14;

    // Função que soma dois números e mostra o resultado no console
    const somar = (numero1, numero2) => {
        const resultado = numero1 + numero2;
        console.log("Resultado: " + resultado);
    }

    return (
        <div>
            {/* Mostra os números */}
            <p>Somando os números: {n1} e {n2}</p>

            {/* Botão que chama a função de soma passando os números como argumentos */}
            <button onClick={() => somar(n1, n2)}>Somar</button>
        </div>
    );
}

// Exporta o componente para ser usado em outros lugares
export default Desafio;
