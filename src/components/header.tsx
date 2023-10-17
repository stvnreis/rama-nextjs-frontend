'use client';

import {
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import React from 'react';

import { ContactUs } from './contact-us';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Home',
    'Entrar em contato',
    // 'Planos',
    // 'Localização',
    // 'Nosso Time',
    // 'Empresas Parceiras',
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="py-3 flex sm:items-center sm:justify-center"
    >
      <NavbarContent justify="start">
        <NavbarBrand className="">
          <Image
            src="/logo-rama-sbg.png"
            alt="logo rama"
            width={200}
            height={200}
          />
        </NavbarBrand>
      </NavbarContent>
      {/* <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive = {index === 0}>
            <Link
              color= {
                index === 0 ? "primary" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <ContactUs />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarMenu className="pt-10 flex flex-col items-end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
