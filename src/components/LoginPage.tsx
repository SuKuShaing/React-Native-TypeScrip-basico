import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const { hola } = useAuthContext();
    
	return (
		<>
			<h3>LoginPage</h3>
            <p>{ hola }</p>
		</>
	);
};
