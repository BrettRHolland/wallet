import React from "react";
import PropTypes from "prop-types";
import Transaction from "../components/Transaction";
import moment from "moment";

class Transactions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transactions: [],
			income: "",
			expenses: ""
		};
	}

	componentDidMount() {
		fetch("/api/v1/transactions")
			.then(response => {
				if (response.ok) {
					return response;
				} else {
					let errorMessage = `${response.status} (${response.statusText})`,
						error = new Error(errorMessage);
					throw error;
				}
			})
			.then(response => response.json())
			.then(body => {
				console.log(body);
				this.setState({
					transactions: body.transactions,
					income: body.total_monthly_income,
					expenses: body.total_monthly_expenses
				});
			})
			.catch(error => console.error(`Error in fetch: ${error.message}`));
	}

	render() {
		let { income, expenses } = this.state;
		let monthlyTotal = income - expenses;
		let transactions = this.state.transactions.map(transaction => {
			return (
				<Transaction
					key={transaction.id}
					id={transaction.id}
					date={moment(transaction.date).format("MMM D YYYY")}
					description={transaction.description}
					amount={transaction.amount}
					category={transaction.category}
				/>
			);
		});
		return (
			<div>
				<div className="container">{transactions}</div>
				<div className="summary">
					<div className="container">
						<div className="row justify-content-md-center monthly-summary">
							<div className="col-4">
								<div className="summary-item">
									<h2>Income</h2>
									${income}
								</div>
							</div>
							<div className="col-4">
								<div className="summary-item">
									<h2>Expenses</h2>
									${expenses}
								</div>
							</div>
							<div className="col-4">
								<div className="summary-item">
									<h2>Balance</h2>
									${monthlyTotal}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Transactions;
