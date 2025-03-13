const ExecuteFunction = ({ myFunction }) => { 
    return (
        <div>
            {/* O botão chama a função passada por props quando clicado */}
            <button onClick={myFunction}>Clique aqui para disparar o Alert</button>
        </div>
    );
};

export default ExecuteFunction;
