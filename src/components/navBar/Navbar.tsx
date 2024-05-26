'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
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

export default function NavbarComponent() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleTheme = (): void => {
    if (resolvedTheme === 'dark') return setTheme('light');
    return setTheme('dark');
  };

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Abarrotes la Victoria</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Cerrar
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="danger">
            Registrar
          </Link>
        </NavbarItem>
        <NavbarItem>
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
            >
              <p className="font-semibold">Buenas tardes: </p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem isReadOnly={true}>
              <Switch
                defaultSelected
                size="sm"
                onClick={handleTheme}
                thumbIcon={({ className }) =>
                  resolvedTheme === 'dark' ? (
                    <IoSunnyOutline className={className} />
                  ) : (
                    <IoMoonSharp className={className} />
                  )
                }
              ></Switch>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
