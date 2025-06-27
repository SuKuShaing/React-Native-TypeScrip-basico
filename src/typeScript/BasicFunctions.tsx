const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
}

export const BasicFunctions = () => {
	return (
		<>
			<h3>Basic Funciones</h3>
            <span>El resultado de sumar { addTwoNumbers(1, 2) } </span>
		</>
	);
};
