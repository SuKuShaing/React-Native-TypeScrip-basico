import {
	createContext,
	useContext,
	useEffect,
	useState,
	type PropsWithChildren,
} from "react";

// export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

// export const AuthStatusEnum = {
//     Checking: 'checking' as AuthStatus,
//     Authenticated: 'authenticated' as AuthStatus,
//     NotAuthenticated: 'not-authenticated' as AuthStatus,
// };

enum AuthStatus {
	Checking = "checking", // sí no se coloca nada, se coloca el valor por defecto que es la posición del enum, en este caso Checking = 0
	Authenticated = "authenticated", // en este caso Authenticated = 1
	NotAuthenticated = "not-authenticated", // en este caso NotAuthenticated = 2
}

interface AuthState {
	status: AuthStatus;
	token?: string;
	user?: User;
	isChecking: boolean;
	isAuthenticated: boolean;
	isNotAuthenticated: boolean;

	// Actions - Methods
	loginWithEmailPassword: (email: string, password: string) => void;
	logout: () => void;
}

interface User {
	name: string;
	email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [status, setStatus] = useState(AuthStatus.Checking);
	const [user, setUser] = useState<User | undefined>(undefined);

	useEffect(() => {
		setTimeout(() => {
			setStatus(AuthStatus.NotAuthenticated);
		}, 1500);
	}, []);

	const loginWithEmailPassword = (email: string, password: string) => {
		setUser({
			name: "Sebastián",
			email: email,
		});
		setStatus(AuthStatus.Authenticated);
	};

	const logout = () => {
		setUser(undefined);
		setStatus(AuthStatus.NotAuthenticated);
	};

	return (
		<AuthContext.Provider
			value={{
				status: status,
				user: user,

				// Getter
				isChecking: status === AuthStatus.Checking,
				isAuthenticated: status === AuthStatus.Authenticated,
				isNotAuthenticated: status === AuthStatus.NotAuthenticated,

				// Actions - Methods
				loginWithEmailPassword,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
