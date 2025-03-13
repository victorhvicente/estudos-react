// Componente funcional chamado "Fragment" que recebe uma prop chamada "propFragment"
const Fragment = ({ propFragment }) => {
    return (
        // Usamos o React Fragment (<></>) para evitar divs desnecessárias
        <>
            <h1>Primeiro Título</h1>
            <h2>Segundo Título</h2>

            {/* Exibe a prop recebida diretamente dentro do parágrafo */}
            <p>{propFragment}</p>
        </>
    );
}

export default Fragment;
