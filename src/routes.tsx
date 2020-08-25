import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signin from './Pages/Signin';

interface Props {
	toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
	return (
		<BrowserRouter>
			<Route path="/login" component={Login} exact />
			<Route path="/signin" component={Signin} exact />
		</BrowserRouter>
	);
};
export default Routes;
