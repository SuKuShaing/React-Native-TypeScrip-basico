import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
	const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
		useAuthContext();

	if (isChecking) {
		return (
			<>
				<h3>LoginPage</h3>
				<p>Checking...</p>
			</>
		);
	}

	if (isAuthenticated) {
		return (
			<>
				<h3>Bienvenido {user?.name}</h3>
				<pre>{JSON.stringify(user, null, 2)}</pre>
				<p>Authenticated</p>
				<button
					onClick={() => logout()}
					className="bg-blue-500 hover:bg-blue-600 transition p-2 text-white rounded-xl mt-2"
				>
					Logout
				</button>
			</>
		);
	}

	return (
		<>
			<h3>LoginPage</h3>
			<button
				onClick={() => loginWithEmailPassword("test@gmail.com", "123456")}
				className="bg-blue-500 hover:bg-blue-600 transition p-2 text-white rounded-xl mt-2"
			>
				ingresar
			</button>
		</>
	);
};
