
import * as S from './style';
const Alink = ({ toPath, text,  ...props }) => {
  return (
    <S.Alink to={toPath} {...props}>
      {text}
    </S.Alink>
  );
};

export default Alink;
