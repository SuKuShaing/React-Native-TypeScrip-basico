export const BasicTypes = () => {
	const name: string = "Fernando";
	const age: number = 32;
	const isActive: boolean = true;

    const powers: string[] = ['Volar', 'Super fuerza', 'Super velocidad'];

	return (
		<>
			<h1>Tipos básicos</h1>
			<p>{name} - {age} - {isActive ? 'Activo' : 'Inactivo'}</p>
            <p>Poderes:</p>
            <ul>
                {powers.join(', ')}
            </ul>
		</>
	);
};