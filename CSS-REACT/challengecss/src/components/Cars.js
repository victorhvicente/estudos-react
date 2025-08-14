// Importando o módulo CSS específico para este componente
import styleCar from './Cars.module.css';

const Cars = () => {
    // Criando um array de objetos representando os carros
    const cars = [
        { id: 1, carro: "Civic", marca: "Honda", cor: "Black" },
        { id: 2, carro: "Corolla", marca: "Toyota", cor: "Gray" }, 
        { id: 3, carro: "Golf SportLine", marca: "Volkswagen", cor: "Blue" },
        { id: 4, carro: "Model 3", marca: "Tesla", cor: "White" },
        { id: 5, carro: "Mustang", marca: "Ford", cor: "Red" }
    ];

    return (
        <div>
            {/* Aplicando uma classe CSS do módulo para estilizar a lista */}
            <ul className={styleCar.my_list}>
                {/* Percorrendo o array de carros e renderizando cada um dentro de uma <li> */}
                {cars.map((car) => {
                    return (
                        // Classe para estilização e key única para cada item na lista
                        <li className={styleCar.my_opc} key={car.id}>
                            Carro: {car.carro} - Marca: {car.marca} - Cor: {car.cor}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cars;
