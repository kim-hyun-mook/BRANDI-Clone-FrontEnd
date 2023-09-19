import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: auto;
  max-width: 100%;
  margin: 0 auto;
`;
export const H1 = styled.h1`
  font-size: 2em;
`;

export const Inner = styled.div`
  font-size: 13px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 22;
  background-color: #fff;
  word-break: keep-all;
  padding: 30px 20px 24px;
`;



export const NavLink = styled(Link)`
  margin-left: 16px;
`;
