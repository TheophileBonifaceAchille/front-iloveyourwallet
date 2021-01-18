import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { SecuredHomepage } from './pages/SecuredHomepage';

function Dapp() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/register" exact component={Register} />
				<Route path="/secured-homepage" exact component={SecuredHomepage} />
			</Switch>
		</Router>
	);
}
export default Dapp;
