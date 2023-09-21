import styled from "styled-components";

export const Nav = styled.nav`
  ${(props) =>
    props.navStyle === 'headerNav' &&
    `
		margin-left: 60px;
  `}
`;