import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function Expense() {
	const [list, setList] = useState([
		{
			description: "fish",
			amount: 30,
			category: "grocery",
		},
		{
			description: "car lesson",
			amount: 300,
			category: "self-training",
		},
	]);

	const onAdd = (item) => {
		setList([...list, item]);
	};

	return (
		<>
			<ExpenseForm onAdd={onAdd} />
			<ExpenseList data={list} />
		</>
	);
}

export default Expense;
