
import Nav from '../ui/Nav/Nav';
import NavLi from '../ui/NavLi/NavLi';
import Ul from '../ui/Ul/Ul';
import * as S from './style'

const BottomNav = () => {
  return (
    <Nav navStyle='bottomNav'>
      <S.Inner>
      <Ul>
        <NavLi text="홈" />
        <NavLi text="카테고리" />
        <NavLi text="하루배송" />
        <NavLi text="혜택존" />
        <NavLi text="베스트" />
        <NavLi text="신상" />
        <NavLi text="세일" />
        <NavLi text="스토어" />
      </Ul>
      </S.Inner>
    </Nav>
  );
};

export default BottomNav;




