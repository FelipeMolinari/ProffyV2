import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import InputContainer from '../InputContainer';
import Checkbox from '@material-ui/core/Checkbox';
import CustomButton from '../CustomButton';
const arrayImput = [
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    password: true,
  },
];

function LangingAside() {
  const { errors, register, handleSubmit, watch } = useForm();

  return (
    <Container>
      <div className="content">
        <form action="">
          <div className="form-container">
            <legend className="legend-form">Fazer login</legend>
            <InputContainer {...{ arrayImput }} register={register} />
            <div className="input-above">
              <span>
                <Checkbox color="primary" size="medium" />
                Lembrar-me
              </span>
              <a href="/login/recuperar">Esqueci minha senha</a>
            </div>
            <div className="footer-container">
              <CustomButton
                colorName="--color-primary"
                disabled={!(watch('email') && watch('password'))}
              >
                Entrar
              </CustomButton>
              <CustomButton colorName="--commum-facebook">
                Entrar com o Facebook
              </CustomButton>
              <div>
                <span>
                  Não tem conta? <a>Cadastre-se</a>
                </span>
                <div>
                  <span>É de graça</span>
                  <FaHeart size="1.6rem" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
export default LangingAside;
