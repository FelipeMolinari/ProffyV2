import React from 'react';

import { Container } from './styles';
import LandingAside from '../../Component/LandingAside';
import RecoverPasswordForm from '../../Component/RecoverPasswordForm';

const Signin: React.FC = () => {
	return (
		<Container>
			<RecoverPasswordForm />
			<LandingAside />
		</Container>
	);
};

export default Signin;
