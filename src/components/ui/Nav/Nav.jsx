import * as S from './style'

const Nav = ({ children, ...props }) => {
  return <S.Nav {...props}>{children}</S.Nav>;
};

export default Nav;
