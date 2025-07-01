import { useEffect, useRef, useState } from "react";
import type { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-user.actions";

export const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const currentPageRef = useRef(1)

	useEffect(() => {
		loadUsersAction(1).then(setUsers); // el array de usuarios se pasa como argumento de la función setUsers
	}, []);

	const nextPage = async () => {
		currentPageRef.current ++;

		const users = await loadUsersAction(currentPageRef.current);
		
		if (users.length > 0) {
			setUsers(users);
		} else {
			currentPageRef.current--;
		}
	}

	const prevPage = async () => {
		if (currentPageRef.current < 1) return;

		currentPageRef.current --;
		const users = await loadUsersAction(currentPageRef.current);
		setUsers(users);
	}

	return {
		users,
		nextPage,
		prevPage,
	};
};
