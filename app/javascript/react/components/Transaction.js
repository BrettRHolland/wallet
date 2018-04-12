import React from "react";

const Transaction = props => {
	let categoryIcon;
	let expense;
	let amountColor;
	if (props.category == "Income") {
		categoryIcon = (
			<div className="category bg-green">
				<i className="fas fa-plus fa-fw align-self-center" />
			</div>
		);
		amountColor = "amount-green";
	} else if (props.category == "Entertainment") {
		categoryIcon = (
			<div className="category bg-red">
				<i className="fas fa-minus fa-fw align-self-center" />
			</div>
		);
		expense = "-";
		amountColor = "amount-red";
	} else if (props.category == "Home") {
		categoryIcon = (
			<div className="category bg-red">
				<i className="fas fa-minus fa-fw align-self-center" />
			</div>
		);
		expense = "-";
		amountColor = "amount-red";
	}
	return (
		<div className="row no-gutters align-items-center justify-content-center transaction">
			<div className="col">
				<div className="description">{props.description}</div>
				<div className="date">{props.date}</div>
			</div>
			<div className="col amount">
				<span className={amountColor}>
					{expense}${props.amount}
				</span>
			</div>
		</div>
	);
};

export default Transaction;
