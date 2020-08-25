import React from 'react';

import { Container } from './styles';
import LandingAside from '../../Component/LandingAside';
import SigninForm from '../../Component/SigninForm';

const Signin: React.FC = () => {
	return (
		<Container>
			<LandingAside />
			<SigninForm />
		</Container>
	);
};

export default Signin;
