import Input from '@components/ui/Input/Input';
import Button from '@components/ui/Button/Button';
import * as S from './style';

const Form = () => {
  return (
    <S.Form>
      <S.Inner>
        <Input />
        <Button />
      </S.Inner>
    </S.Form>
  );
};

export default Form;
