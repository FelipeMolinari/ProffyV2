import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import InputContainer from '../InputContainer';
import CustomButton from '../CustomButton';
const arrayImput = [
	{
		name: 'email',
		label: 'E-mail',
		type: 'email'
	}
];

function RecoverPasswordForm() {
	const { errors, register, handleSubmit, watch } = useForm();

	return (
		<Container className="form-landing">
			<div className="content">
				<form action="">
					<div className="form-container">
						<legend className="legend-form">Eita, esqueceu sua senha?</legend>
						<p>Não esquenta, vamos dar um jeito nisso.</p>
						<InputContainer {...{ arrayImput }} register={register} />

						<div className="footer-container">
							<CustomButton colorName="--color-primary" disabled={!watch('email')}>
								Enviar
							</CustomButton>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
}
export default RecoverPasswordForm;
