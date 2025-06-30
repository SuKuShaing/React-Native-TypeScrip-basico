import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const { isChecking, isAuthenticated, isNotAuthenticated } = useAuthContext();

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
                <h3>LoginPage</h3>
                <p>Authenticated</p>
            </>
        );
    }

    return (
        <>
            <h3>LoginPage</h3>
            <p>Not Authenticated</p>
        </>
    );
};
