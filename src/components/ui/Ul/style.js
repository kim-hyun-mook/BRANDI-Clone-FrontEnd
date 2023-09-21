import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;

  align-items: center;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  font-family: 'SpoqaHanSansBold', sans-serif;
  margin-left: 60px;

  @media all and (max-width: 680px) {
    margin: 10px 0 0 0px;
  }
`;
