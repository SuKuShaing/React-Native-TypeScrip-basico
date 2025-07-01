import type { User } from "../interfaces/reqres.response";

interface Props {
    user: User;
}

export const UserRow = ({ user }: Props) => {
	return (
		<tr>
			<td>
				<img src={user.avatar} alt="User Avatar" className="p-2 rounded-full w-14" />
			</td>
			<td>
				{user.first_name} {user.last_name}
			</td>
			<td>{user.email}</td>
		</tr>
	);
};
