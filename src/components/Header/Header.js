import { Head } from './Header.styles';
import { useLocales } from '../../providers/LocalesProvider';
import Button from '../Button';
import { useTheme } from '../../providers/ThemeProvider';

const Header = ({ list }) => {
	const { trans, toggleLang } = useLocales();
	const { header } = trans;
	const { toggleTheme } = useTheme();
	return (
		<Head>
			<h1 className='title'>Todo list</h1>
			<p>
				{header.title}
				{list.length}
			</p>
			<Button onClick={toggleLang}>{header.changeLang}</Button>
			<Button onClick={toggleTheme}>{header.changeTheme}</Button>
		</Head>
	);
};

export default Header;
