import * as S from './style';
import Form from '../../Form/Form';
import Nav from '../Nav/Nav';
import Alink from '../Link/Link';
import Ul from '../Ul/Ul';
import NavLi from '../NavLi/NavLi';

const Header = () => {
  return (
    <S.Header >
      <S.Inner>
        <S.H1>
          <Alink toPath="/" text="BRANDI" linkStyle="logo" />
        </S.H1>
        <Form />
        <Nav navStyle='headerNav'>
          <Ul>
            <NavLi toPath="/cart" text="장바구니" linkStyle="cart" />
            <NavLi toPath="/wish" text="위시리스트" linkStyle="hart" />
            <NavLi toPath="/me" text="내정보" linkStyle="my" />
          </Ul>
        </Nav>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
