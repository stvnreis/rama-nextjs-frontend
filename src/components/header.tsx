'use client'

import React from 'react'
import Image from 'next/image'
import { ContactUs } from './contact-us'
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    'Home',
    'Planos',
    'Localização',
    'Nosso Time',
    'Empresas Parceiras',
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      height={300}
      className="sm:px-5 pt-3 flex items-center justify-center"
    >
      <NavbarContent justify="start" className="md:pl-20">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className="md:w-full flex items-center">
          <Image
            src="/logo-rama-sbg.png"
            alt="logo rama"
            width={250}
            height={250}
          />
          {/* RA<span className="text-primary">M</span>Á Business */}
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
      <NavbarContent justify="end" className="sm:pr-20">
        {/* <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem> */}
        <NavbarItem className="sm:flex">
          <ContactUs />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-5">
        {/* <NavbarMenuItem className="pt-5 flex gap-1 items-center" key={`theme`}>
          <ThemeSwitcher />
          <span className="text-md">Tema</span>
        </NavbarMenuItem> */}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                // index === 2
                //   ? 'primary'
                //   : index === menuItems.length - 1
                //   ? 'danger'
                //   : 'foreground'
                'foreground'
              }
              className="w-full"
              href="#"
              size="md"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
