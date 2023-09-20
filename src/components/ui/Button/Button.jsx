import * as S from './style'
const Button = ({text }) => {
	return (
		<S.Button>{text ? text :<img src='/ico-search.svg' /> }</S.Button>
	)
}

export default Button