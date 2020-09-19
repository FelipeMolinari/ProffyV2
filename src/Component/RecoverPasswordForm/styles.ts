import styled from 'styled-components';

export const Container = styled('div')`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--commum-background);
  border-radius: 1.6rem;
  margin-top: -1.2rem;
  z-index: 1;
  .content {
    width: 68%;
    .form-container{

      .legend-form {
      font: 700 2.4rem Poppins;
      }
      p{
        font: 400 1.4rem Poppins;
        color: var(--commum-text);
        width: 60%;
        margin: 1.4rem 0rem;

      }
    }
    
    .footer-container {
      margin-top: 2.6rem;  
    }
  }
`;
