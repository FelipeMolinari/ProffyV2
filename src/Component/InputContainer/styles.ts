import styled from 'styled-components';
export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  background: var(--commum-input);
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const InputBlock = styled('div')`
  position: relative;
  height: 4.6rem;

  &:focus-within::after {
    width: calc(100%-3.2rem);
    height: 3px;
    content: '';
    background: var(--color-primary);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
  svg {
    position: absolute;
    z-index: 1;
    fill: var(--commum-input);
    right: 1.6rem;
    bottom: 0;
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Input = styled('input')`
  width: 100%;
  height: 100%;
  border: 1px solid var(--commum-border);
  color: var(--commum-input);

  outline: 0;
  font: 1.6rem Poppins;
  &:focus::placeholder {
    color: transparent;
  }
  padding: 0.8rem 1.8rem;
  ::placeholder {
    font: 1.6rem Poppins;
  }
`;
