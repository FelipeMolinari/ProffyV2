import React from 'react';
import { Container } from './styles';
import LandingAside from '../../Component/LandingAside';
import LoginFormAside from '../../Component/LoginFormAside';

function Login() {
  return (
    <Container>
      <LandingAside />
      <LoginFormAside />
    </Container>
  );
}
export default Login;
