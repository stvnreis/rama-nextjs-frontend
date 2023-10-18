'use client';

import {
  Link,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import React from 'react';

import { MenuItems } from '../types/menu-items';
import { ContactUs } from './contact-us';

const defaultWhatsappMessage =
  'Olá, gostaria de saber mais sobre os planos de aluguel do Ramá Business.';

const menuItems: MenuItems[] = [
  {
    text: 'Home',
    url: '/',
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="py-3 flex sm:items-center sm:justify-center"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/logo-rama-sbg.png"
              alt="logo rama"
              width={200}
              height={200}
            />
          </Link>
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
            <Link
              color="foreground"
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            href={`https://wa.me/18997413773?text=${encodeURI(
              defaultWhatsappMessage,
            )}`}
            target="_blank"
            color="foreground"
            size="lg"
            className="w-full"
          >
            Entrar em Contato
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
