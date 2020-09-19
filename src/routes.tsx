import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import RecoverPassword from './Pages/RecoverPassword';
interface Props {
	toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
	return (
		<BrowserRouter>
			<Route path="/login" component={Login} exact />
			<Route path="/signin" component={Signin} />
			<Route path="/recover" component={RecoverPassword} />
		</BrowserRouter>
	);
};
export default Routes;
