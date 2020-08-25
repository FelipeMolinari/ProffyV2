import React, { useState } from 'react';
import { InputBlock, Input } from './styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps {
  name: string;
  label: string;
  index: number;
  register: any;
}

const InputContainer: React.FC<InputProps> = ({
  name,
  index,
  label,
  register,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    <InputBlock className="input-block" key={name + index}>
      <Input
        ref={register}
        className="input-camp"
        name={name}
        placeholder={label}
        type={isVisible ? 'text' : 'password'}
      />
      {isVisible ? (
        <AiOutlineEyeInvisible size={18} onClick={() => toggleVisibility()} />
      ) : (
        <AiOutlineEye size={18} onClick={() => toggleVisibility()} />
      )}
    </InputBlock>
  );
};
export default InputContainer;
