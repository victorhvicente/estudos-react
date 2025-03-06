const Eventos = () => {

    const cliqueAqui = (e) => {
        console.log(e);

        console.log("Você Clicou !");
    }

    const renderizarAlgo = (x) => {
        if(x) {
           return <h1>Renderizando isso !</h1>;
        }
        else {
           return <h1>Renderizando isso também !</h1>;
        }
    }

    return (

        <div>
            <div>
                <button onClick={cliqueAqui}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicouuuu !!")}>Clique aqui também</button>
            </div>
            {renderizarAlgo(true)}
            {renderizarAlgo(false)}
        </div>
    );
}

export default Eventos;