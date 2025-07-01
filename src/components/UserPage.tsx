import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UserPage = () => {

    const { users } = useUsers();

    console.log(users);

	return (
		<>
			<h1>Usuarios:</h1>

			<table className="w-[500px] bg-black rounded-xl text-white">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>email</th>
					</tr>
				</thead>

				<tbody>
                    {
                        users.map((user) => (
                            <UserRow key={user.id} user={user} />
                        ))
                    }
				</tbody>
			</table>

			<div className="w-[500px] flex justify-between mt-2">
				<button className="p-2 bg-blue-500 text-white rounded-[5px]">
					Anterior
				</button>
				<button className="p-2 bg-blue-500 text-white rounded-[5px]">
					Siguiente
				</button>
			</div>
		</>
	);
};
