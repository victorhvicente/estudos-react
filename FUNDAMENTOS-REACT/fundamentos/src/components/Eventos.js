// Componente que lida com eventos e renderização condicional
const Eventos = () => {

    // Função chamada ao clicar no primeiro botão
    const cliqueAqui = (e) => {
        console.log(e); // Mostra o evento no console (útil pra debug)
        console.log("Você Clicou !");
    }

    // Função que decide o que renderizar com base no valor de 'x'
    const renderizarAlgo = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Renderizando isso também!</h1>;
        }
    }

    return (
        <div>
            <div>
                {/* Botão que chama a função cliqueAqui */}
                <button onClick={cliqueAqui}>Clique aqui</button>
            </div>
            <div>
                {/* Botão com função inline (direta no onClick) */}
                <button onClick={() => console.log("Clicouuuu !!")}>Clique aqui também</button>
            </div>

            {/* Chama a função para renderizar algo baseado no valor booleano */}
            {renderizarAlgo(true)}
            {renderizarAlgo(false)}
        </div>
    );
}

// Exporta o componente para ser usado em outros lugares
export default Eventos;
