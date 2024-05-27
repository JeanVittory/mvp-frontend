'use client';

import { useTheme } from 'next-themes';
import { useThemeStore } from '../../store/theme/theme';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Switch } from '@nextui-org/switch';
import { Avatar } from '@nextui-org/avatar';
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5';
import { DARK, LIGHT } from '@/constants';

export default function NavbarComponent() {
  const { setTheme, resolvedTheme } = useTheme();

  const themeStore = useThemeStore(({ theme }) => theme);
  const changeTheme = useThemeStore(({ changeTheme }) => changeTheme);

  const handleTheme = (): void => {
    if (resolvedTheme === DARK) {
      setTheme(LIGHT);
      return changeTheme(LIGHT);
    }
    setTheme(DARK);
    return changeTheme(DARK);
  };

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Abarrotes la Victoria</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem value="cerrar">
          <Link color="foreground" href="#">
            Cerrar
          </Link>
        </NavbarItem>
        <NavbarItem isActive value="registrar">
          <Link href="#" aria-current="page" color="primary">
            Registrar
          </Link>
        </NavbarItem>
        <NavbarItem value="balance">
          <Link color="foreground" href="#">
            Balance
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="profile"
              className="h-14 gap-2 cursor-default"
              isReadOnly={true}
              value="user"
            >
              <p className="font-semibold">Buenas tardes: </p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem isReadOnly={true} value="theme">
              <Switch
                defaultSelected={themeStore === DARK}
                size="sm"
                onClick={handleTheme}
                thumbIcon={({ className }) =>
                  themeStore === DARK ? (
                    <IoSunnyOutline className={className} />
                  ) : (
                    <IoMoonSharp className={className} />
                  )
                }
              ></Switch>
            </DropdownItem>
            <DropdownItem key="logout" color="primary" value="logout">
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
