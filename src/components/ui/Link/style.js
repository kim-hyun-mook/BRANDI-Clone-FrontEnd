import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ALinkStyles = {
  logo: css`
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
  `,
  cart: css`
    display: block;
    width: 40px;
    height: 40px;
    font-size: 13px;
    background-image: url('/ic-cart.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    overflow: hidden;
    text-indent: -999px;
    color: transparent;
    margin-left: 16px;
    @media all and (max-width: 680px) {
      margin-left: 0px;
    }
  `,

  hart: css`
    display: block;
    width: 40px;
    height: 40px;
    font-size: 13px;
    background-image: url('/ic-favorite.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    overflow: hidden;
    text-indent: -999px;
    color: transparent;
    margin-left: 16px;
  `,
  my: css`
    display: block;
    width: 40px;
    height: 40px;
    font-size: 13px;
    background-image: url('/ic-my.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    overflow: hidden;
    text-indent: -999px;
    color: transparent;
    margin-left: 16px;
  `,

};

export const Alink = styled(Link)`
  ${(props) => {
    switch (props.linkStyle) {
      case 'logo':
        return ALinkStyles.logo;
      case 'cart':
        return ALinkStyles.cart;
      case 'hart':
        return ALinkStyles.hart;
      case 'my':
        return ALinkStyles.my;
    }
  }}
  text-decoration: none;
	font-weight: 600;
	font-size: 17px;
  &:visited {
    color: #202429;

  }
`;
