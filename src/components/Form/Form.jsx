/*예시이며 타입스크립트는 무시해주세여..ㅎㅎ 해당 컴포넌트는 조각컴포넌트를 감싸는 컴포넌트이며
* 해당 섹션 같은 느낌이라 생각하시면되여
*/
// import Input from '@components/ui/Input/Input';
// import { ChangeEvent, FormEvent, useState } from 'react';
// import classes from '@components/Header/Header.module.css';
// import useGetNews from '@hooks/useGetNews';
// import useHandleBlur from '@hooks/useHandleBlur';

// const HeaderForm = () => {
//   const [input, setInput] = useState({ search: '', date: '' });

//   const { updateDynamicParams } = useGetNews();

//   const {
//     inputTextRef,
//     inputDateRef,
//     validatedTextInput,
//     validatedDateInput,
//     handleSearchTextBlur,
//     handleSearchDateBlur,
//   } = useHandleBlur();

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     const emptyInputValue = value.trim();
//     setInput({ ...input, [name]: value });
//     if (emptyInputValue) return;
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const isEmptyValue = input.search.trim() && input.date.trim();
//     if (isEmptyValue) return;
//     updateDynamicParams({ keyword: input.search, date: input.date });
//     setInput({ search: '', date: '' });
//   };
//   return (
//     <form className={classes['form']} onSubmit={handleSubmit}>
//       <div className={classes['input-alert__wrap']}>
//         <div className={classes['form__search-input-wrap']}>
//           <Input
//             ref={inputTextRef}
//             type="text"
//             placeholder="검색어를 입력해주세요"
//             onChange={handleChange}
//             onBlur={handleSearchTextBlur}
//             name="search"
//             value={input.search}
//           />
//         <button className={classes['button']} type="submit"></button>
//         </div>
//         {!validatedTextInput && (
//           <p className={classes['search-input__alert']}>
//             검색어가 입력하거나 영어, 숫자를 포함해야합니다.
//           </p>
//         )}
//       </div>
//       <div className={classes['input-alert__wrap']}>
//         <div className={classes['form__input-date__wrap']}>
//           <Input
//             ref={inputDateRef}
//             type="date"
//             name="date"
//             value={input.date}
//             onChange={handleChange}
//             onBlur={handleSearchDateBlur}
//             placeholder="date"
//           />
//         </div>
//         {!validatedDateInput && (
//           <p className={classes['search-input__date-alert']}>
//             날짜를 입력해주세요
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default HeaderForm;
