import ThemeSwitchMode from '../darkMode/ThemeSwitchMode';

export default function Navbar() {
  return (
    <nav className="w-100 flex py-4 justify-end sticky top-0 z-50">
      <ThemeSwitchMode />
    </nav>
  );
}
