import React from "react";
import { Router, browserHistory, Route, IndexRoute } from "react-router";
import Nav from "../components/Nav";
import Transactions from "../containers/Transactions";

const App = props => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={Nav}>
				<IndexRoute component={Transactions} />
			</Route>
		</Router>
	);
};

export default App;
