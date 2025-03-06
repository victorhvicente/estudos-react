const Desafio = () => {
    const n1 = 10;
    const n2 = 14;

    const somar = (numero1, numero2) => {
        const resultado = numero1 + numero2;
        console.log("Resultado: " + resultado);
    }

    return (
        <div>
            <p>Somando os números: {n1} e {n2}</p>
            <button onClick={() => somar(n1, n2)}>Somar</button>
    
        </div>
    );
}

export default Desafio;
