import ThemeSwitchMode from './ThemeSwitchMode';

export default function Navbar() {
	return (
		<nav className='w-100 flex justify-end'>
			<ThemeSwitchMode />
		</nav>
	);
}
