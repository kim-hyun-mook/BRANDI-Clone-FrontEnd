import { forwardRef } from "react"

/*ui는 작은 컴포넌트 혹은 깡통컴포넌트를 넣는 폴더입니다.*/
const Input = forwardRef(({ type, value }, ref) => {
	return (
		<input type={type} value={value} ref={ref} />
	);
});

export default Input