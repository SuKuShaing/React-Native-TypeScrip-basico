import { useEffect, useState } from "react";
import type { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-user.actions";

export const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		loadUsersAction(1).then(setUsers); // el array de usuarios se pasa como argumento de la función setUsers
	}, []);

	return {
		users,
	};
};
