import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState<number>(10);

	const increaseBy = (value: number) => {
		// setCount(count + value);

        // setCount((prevCount) => prevCount + value);
        
        setCount(Math.max(0, count + value));

	};

	return (
		<>
			<h3 className="text-2xl">
				Contador: <small className="font-bold">{count}</small>
			</h3>

			<div>
				<button
					onClick={() => increaseBy(+1)}
					className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-600 transition-colors"
				>
					+1
				</button>
				<button
					onClick={() => increaseBy(-1)}
					className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-600 transition-colors"
				>
					-1
				</button>
			</div>
		</>
	);
};
