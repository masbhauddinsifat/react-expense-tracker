import Expense from "./components/Expense";

function App() {
	return (
		<>
			<div className="m-5">
				<h1 className="text-3xl text-red-500">Hello Expense Tracker</h1>
				<Expense />
			</div>
		</>
	);
}

export default App;
