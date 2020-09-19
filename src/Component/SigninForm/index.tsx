import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import InputContainer from '../InputContainer';
import CustomButton from '../CustomButton';
import Separator from '../Separator';
const arrayImput = [
	{
		name: 'name',
		label: 'Nome',
		type: 'text'
	},
	{
		name: 'lastName',
		label: 'Sobrenome',
		type: 'text'
	},
	{
		name: 'email',
		label: 'E-Mail',
		type: 'email'
	},
	{
		name: 'password',
		label: 'Senha',
		type: 'password',
		password: true
	}
];

function SigninForm() {
	const { errors, register, handleSubmit, watch } = useForm();

	return (
		<Container className="form-landing">
			<div className="content">
				<form action="">
					<div className="form-container">
						<legend className="legend-form">Cadastro</legend>
						<CustomButton colorName="--commum-facebook" style={{ marginTop: 16, marginBottom: 16 }}>
							Entrar com o Facebook
						</CustomButton>
						<Separator text="ou" />
						<p>Preencha os dados abaixo para começar.</p>
						<InputContainer {...{ arrayImput }} register={register} />

						<div className="footer-container">
							<CustomButton colorName="--color-primary" disabled={!(watch('email') && watch('password'))}>
								Concluir Cadastro
							</CustomButton>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
}
export default SigninForm;
