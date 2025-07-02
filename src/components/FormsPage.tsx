import { useForm } from "react-hook-form";

// librería usada para los formularios https://react-hook-form.com/

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {
    // handleSubmit ya previene la acción por defecto de actualizar la pantalla

	const { register, handleSubmit, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'Seba@mail.com',
            password: '123456'
        }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({myForm});
    }

    // console.log(watch('email')); muestra los cambios en tiempo real del email

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h3>Formulario</h3>

			<div className="flex flex-col space-y-2 w-125">
				<input
					type="email"
					placeholder="Email"
					className="border border-gray-300 p-2 rounded-xl"
                    {...register('email', { required: true })}
				/>
				<input
					type="password"
					placeholder="Password"
					className="border border-gray-300 p-2 rounded-xl"
                    {...register('password', { required: true })}
				/>

				<button type="submit" className="bg-blue-500 p-2 rounded-xl text-white">
					Ingresar
				</button>
			</div>
		</form>
	);
};
