// Recebendo as props e desestruturando direto nos parâmetros da função
const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            {/* Título da seção */}
            <h1>Detalhes do carro</h1>

            {/* Lista não ordenada exibindo os detalhes do carro */}
            <ul>
                <li>Marca: {brand}</li> {/* Exibe a marca do carro */}
                <li>KM: {km}</li> {/* Exibe a quilometragem */}
                <li>Cor: {color}</li> {/* Exibe a cor */}
            </ul>

            {/* Renderização condicional: só exibe o parágrafo se "newCar" for true */}
            {newCar && <p>Este carro é novo!</p>}
        </div>
    );
}

export default CarDetails;
