import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorName: string;
  onPress?: void;
}
const CustomButtom: React.FC<ButtonInterface> = ({
  colorName,
  onPress,
  children,
  ...rest
}) => {
  return (
    <Container {...rest} colorName={colorName}>
      {children}
    </Container>
  );
};
export default CustomButtom;
