function ExpenseList({ data }) {
	return (
		<>
			{data.length ? (
				<table className="table-auto">
					<thead>
						<tr>
							<th>Description</th>
							<th>Amount</th>
							<th>Category</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, i) => {
							return (
								<tr key={i}>
									<td>{item.description}</td>
									<td>{item.amount}</td>
									<td>{item.category}</td>
									<td>
										<button className="bg-red-500 rounded text-white p-2">
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<p className="text-red-500">No Data Found</p>
			)}
		</>
	);
}

export default ExpenseList;
