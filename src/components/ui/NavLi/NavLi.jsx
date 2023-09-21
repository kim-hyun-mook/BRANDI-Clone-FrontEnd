import Alink from '../Link/Link';

const NavLi = ({ toPath, text, linkStyle, ...props }) => {
  return (
    <li {...props}>
			<Alink toPath={toPath} text={text} linkStyle={linkStyle } />
    </li>
  );
};

export default NavLi;
