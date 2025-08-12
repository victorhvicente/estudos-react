// Importa o arquivo de estilos CSS como um módulo, permitindo usar classes de forma isolada
// 'styles' será um objeto onde cada chave corresponde a uma classe definida no CSS
import styles from './Title.module.css';

// Declaração do componente funcional Title
const Title = () => {

    return (
        <div>
            {/* h1 usando uma classe vinda do CSS Module.
                O 'styles.my_title' garante que o nome da classe será único
                e não entrará em conflito com outros estilos da aplicação */}
            <h1 className={styles.my_title}>Utilizando CSS MODULES</h1>
        </div>
    );
}

// Exporta o componente para uso em outros arquivos
export default Title;
