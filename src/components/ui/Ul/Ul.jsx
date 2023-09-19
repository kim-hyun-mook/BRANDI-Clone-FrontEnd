import * as S from './style'
const Ul = ({ children, ...props }) => {
  return <S.Ul {...props}>{children}</S.Ul>;
};

export default Ul;
