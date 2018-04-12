import React from "react";
import PropTypes from "prop-types";

const NavBar = props => {
	return (
		<div>
			<header>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col logo align-self-center">Wallet</div>
						<div className="col add-transaction align-self-center">
							<a href="#">
								<button type="button">
									<i className="fas fa-plus" /> New Transaction
								</button>
							</a>
						</div>
					</div>
				</div>
			</header>
			<div>{props.children}</div>
		</div>
	);
};

export default NavBar;
