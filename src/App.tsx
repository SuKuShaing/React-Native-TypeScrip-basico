// import { BasicTypes } from "./typeScript/BasicTypes";
// import { ObjecLiterals } from "./typeScript/ObjecLiterals";
// import { BasicFunctions } from "./typeScript/BasicFunctions";
// import { Counter } from "./components/Counter";
import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<AuthProvider>
			<div className="flex flex-col justify-center items-center h-svh">
				<h1 className="text-5xl mb-5">React + TypeScript</h1>
				{/* <BasicTypes /> */}
				{/* <ObjecLiterals /> */}
				{/* <BasicFunctions /> */}
				{/* <Counter /> */}
				<LoginPage />
			</div>
		</AuthProvider>
	);
}

export default App;
