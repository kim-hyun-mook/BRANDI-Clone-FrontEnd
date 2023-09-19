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
export const HomeLink = styled(Link)`
  display: block;
  width: 182px;
  height: 42px;
  background-image: url('/brandi_logo.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  overflow: hidden;
  text-indent: -999px;
  color: transparent;
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

export const Ul = styled.ul`
  display: flex;
  margin-left: 60px;
`;

export const NavLink = styled(Link)`
  margin-left: 16px;
`;
