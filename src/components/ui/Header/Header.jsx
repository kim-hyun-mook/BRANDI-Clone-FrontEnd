import * as S from './style';
import Form from '../../Form/Form';

const Header = () => {
  return (
    <S.Header>
      <S.Inner>
        <S.H1>
          <S.HomeLink to="/">BRANDI</S.HomeLink>
        </S.H1>
        <Form />
        <nav>
          <S.Ul>
            <S.NavLink to="/cart">
              <li>
                <img src="/ic-cart.svg"  alt='장바구니'/>
              </li>
            </S.NavLink>
            <S.NavLink to="/wish">
              <img src="/ic-favorite.svg" alt='위시리스트' />
            </S.NavLink>
            <S.NavLink to="/me">
              <img src="/ic-my.svg" alt='내정보'/>
            </S.NavLink>
          </S.Ul>
        </nav>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
