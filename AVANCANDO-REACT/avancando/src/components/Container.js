const Container = ({children, myValue}) => {
    return (
        <div>
            <h1>Este é um Container</h1>
            {children}
            <p>O valor é: {myValue}</p>
        </div>
    );
}

export default Container;