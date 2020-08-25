import React, { useState } from 'react';
import { Container, InputBlock, Input } from './styles';
import InputPassword from '../InputPassword';

interface InputProps {
	name: string;
	label: string;
	type: string;
	password?: boolean;
}
interface Props {
	arrayImput: InputProps[];
	register: any;
}
const InputContainer: React.FC<Props> = ({ arrayImput, register }) => {
	return (
		<Container>
			{arrayImput.map((input, index) => {
				return input.password ? (
					<InputBlock key={input.name + index}>
						<InputPassword index={index} label={input.label} name={input.name} register={register} />
					</InputBlock>
				) : (
					<InputBlock key={input.name + index}>
						<Input
							className="input-camp"
							name={input.name}
							placeholder={input.label}
							type={input.type}
							ref={register}
						/>
					</InputBlock>
				);
			})}
		</Container>
	);
};
export default InputContainer;
