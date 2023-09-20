import * as S from './style';
import Form from '../../Form/Form';
import Nav from '../Nav/Nav';
import Alink from '../Link/Link';
import Ul from '../Ul/Ul';

const Header = () => {
  return (
    <S.Header>
      <S.Inner>
        <S.H1>
          <Alink toPath="/" text="BRANDI" linkStyle="logo" />
        </S.H1>
        <Form />
        <Nav>
          <Ul>
            <Alink toPath="/cart" text="장바구니" linkStyle="cart" />
            <Alink toPath="/wish" text="위시리스트" linkStyle="hart" />
            <Alink toPath="/me" text="내정보" linkStyle="my" />
          </Ul>
        </Nav>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
