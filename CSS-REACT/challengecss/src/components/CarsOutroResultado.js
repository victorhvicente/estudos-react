// Importando o CSS modular para este componente específico
import styleOutroResultado from './CarsOutroResultado.module.css';

// Componente CarsOutroResultado que recebe um carro via props
const CarsOutroResultado = ({ carro }) => {

    return (
        // Usando a classe "card" do CSS module para estilizar o contêiner do carro
        <div className={styleOutroResultado.card}>
            {/* Exibindo o nome do carro */}
            <h1>Carro: {carro.nome}</h1>
            
            {/* Exibindo a marca do carro */}
            <p>Marca: {carro.marca}</p>
            
            {/* Exibindo a cor do carro */}
            <p>Cor: {carro.cor}</p>
        </div>
    );
}

// Exportando o componente para ser usado em outros arquivos
export default CarsOutroResultado;
