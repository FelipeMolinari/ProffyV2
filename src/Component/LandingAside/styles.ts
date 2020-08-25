import styled from 'styled-components';
import Background from '../../assets/images/background.svg';
export const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.firsBackground};
  div {
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .logo-title {
    font: 9.4rem Lobster;
    color: ${(props) => props.theme.colors.mainText};
  }
  .logo-complement {
    margin-top: 1.6rem;
    max-width: 250px;
    font: 400 1.8rem Poppins;
    color: ${(props) => props.theme.colors.complementText};
  }
`;
// 10.4 2.6
