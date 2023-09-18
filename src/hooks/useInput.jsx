/*해당 훅은 예시입니다. 리액트 훅과 관련된 함수나 이런걸 훅으로 빼두는 곳*/


import { useState, useRef } from 'react';

const initInputValue = {
  userId: '',
  password: '',
  checkPassword: '',
};

const initInputValidationMessage = {
  userId: '',
  password: '',
  checkPassword: '',
};

const useInput = () => {
  const [inputValue, setInputValue] = useState(initInputValue);
  const useIdInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const checkPasswordRef = useRef(null);
  const [validationMessage, setValidationMessage] = useState(
    initInputValidationMessage
  );

  const validateValue = (refName, refValue) => {
    if (refName === 'userId') return validateUserId(refValue);
    if (refName === 'password') return validatePassword(refValue);
    if (refName === 'checkPassword') return validateCheckPassword();
  };

  const validateUserId = (userIdValue) => {
    const userIdRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidated = userIdRegExp.test(userIdValue);
    if (isValidated)
      return setValidationMessage({
        ...validationMessage,
        userId: '유효한 이메일 형식입니다.',
      });
    return setValidationMessage({
      ...validationMessage,
      userId: '유효한 이메일 형식이 아닙니다.',
    });
  };

  const validatePassword = (passwordValue) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const isValidated = passwordRegex.test(passwordValue);
    if (isValidated)
      return setValidationMessage({
        ...validationMessage,
        password: '올바른 비밀번호 입니다.',
      });
    return setValidationMessage({
      ...validationMessage,
      password:
        '비밀번호는 8~16자리, 대문자, 소문자, 숫자, 특수문자를 각각 하나 이상 포함해야 합니다.',
    });
  };

  const validateCheckPassword = () => {
    const checkPasswordMatch = inputValue.password === inputValue.checkPassword;
    if (!checkPasswordMatch)
      return setValidationMessage({
        ...validationMessage,
        checkPassword: '비밀번호가 일치하지 않습니다.',
      });
    return setValidationMessage({
      ...validationMessage,
      checkPassword: '',
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const isEmpty = value.trim() === '';
    console.log(value, name);
    setInputValue({ ...inputValue, [name]: value });
    if (isEmpty) return;
  };

  const handleBlur = (
    event,
    ref
  ) => {
    if (typeof ref === 'object' && ref?.current)
      return validateValue(ref.current.name, ref.current.value);
  };

  return {
    handleChange,
    handleBlur,
    validationMessage,
    inputValue,
    useIdInputRef,
    passwordInputRef,
    checkPasswordRef,
  };
};

export default useInput;