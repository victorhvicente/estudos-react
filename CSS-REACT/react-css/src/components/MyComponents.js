// Importa o arquivo de estilo CSS específico para este componente
import './MyComponents.css';

// Declaração do componente funcional MyComponents
const MyComponents = () => {
    return (
        <div>
            {/* Título principal que usa o estilo padrão do componente */}
            <h1>Meu componente</h1>

            {/* Título com uma classe CSS chamada 'sem-interferir',
                que aplica um estilo específico sem afetar outros elementos */}
            <h1 className="sem-interferir">CSS sem interferir</h1>
        </div>
    );
}

// Exporta o componente para que possa ser utilizado em outros arquivos
export default MyComponents;
