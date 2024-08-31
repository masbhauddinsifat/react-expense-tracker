import React from "react";
import { useForm } from "react-hook-form";

function ExpenseForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm();

	const onAdd = (data) => {
		console.log(errors);
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onAdd)}>
				<div>
					<label htmlFor="description">Description</label>
					<br />
					<input
						type="text"
						id="description"
						className="rounded border-2 border-red-200"
						{...register("description", { required: true })}
					/>
					{errors.description?.type === "required" && (
						<p className="text-red-500">Description is Required</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="amount">Amount</label>
					<br />
					<input
						type="number"
						id="amount"
						className="rounded border-2 border-red-200"
						{...register("amount", { required: true, min: 0 })}
					/>
					{errors.amount?.type === "required" && (
						<p className="text-red-500">Amount is Required</p>
					)}

					{errors.amount?.type === "min" && (
						<p className="text-red-500">
							Amount should be more than or equal zero
						</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="category">Category</label>
					<br />
					<select
						id="category"
						className="rounded border-2 border-red-200 w-64"
						{...register("category", { required: true })}
					>
						<option value="grocery">Grocery</option>
						<option value="utility">Utility</option>
						<option value="transport">Transport</option>
						<option value="entertainment">Entertainment</option>
					</select>
					{errors.category?.type === "required" && (
						<p className="text-red-500">Category is Required</p>
					)}
				</div>

				<button
					className="mt-3 bg-green-500 rounded text-white px-6 py-1"
					disabled={!isValid}
				>
					Add
				</button>
			</form>
		</>
	);
}

export default ExpenseForm;
