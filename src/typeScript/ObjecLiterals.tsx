interface Person {
	firstName: string;
	lastName: string;
	age: number;
	address: Address;
}

interface Address {
    country: string;
    houseNo: number;
    address?: string;
}

export const ObjecLiterals = () => {
	const person: Person = {
		firstName: "Sebastián",
		lastName: "Sanhueza",
		age: 32,
		address: {
			country: "Chile",
			houseNo: 123,
		},
	};

	return (
		<>
			<h3>Objeto Literal</h3>

			<pre>{JSON.stringify(person, null, 2)}</pre>
		</>
	);
};
