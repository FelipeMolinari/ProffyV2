import styled from 'styled-components';

export const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  @media (min-width: 800px) {
    grid-template-columns: 1.8fr 1fr;
    grid-template-rows: 1fr;
  }
`;
