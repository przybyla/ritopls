import styled from 'styled-components';
import bg from './images/bg.jpg';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: 50% 0;
`;

export const SearchWrapper = styled.div`
  padding: 8px 15px;
  background: rgba(0, 0, 0, 0.8);
`;
