import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import InputContainer from '../InputContainer';
import Checkbox from '@material-ui/core/Checkbox';
import CustomButton from '../CustomButton';
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
