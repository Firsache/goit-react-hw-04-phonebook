import { BsSun, BsMoon } from 'react-icons/bs';

export function ThemeSwitcher(switchTheme, themeTitle) {
  return (
    <button type="button" onClick={switchTheme}>
      {themeTitle === 'light' ? <BsSun size={30} /> : <BsMoon size={30} />}
    </button>
  );
}
