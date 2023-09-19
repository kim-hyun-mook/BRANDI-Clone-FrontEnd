import { forwardRef } from 'react';
import * as S from './style';
/*ui는 작은 컴포넌트 혹은 깡통컴포넌트를 넣는 폴더입니다.*/
const Input = forwardRef(({ type, value }, ref) => {
  return <S.Input type={type} value={value} ref={ref} />;
});

export default Input;
