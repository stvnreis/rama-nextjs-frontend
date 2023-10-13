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
    // 'Planos',
    // 'Localização',
    // 'Nosso Time',
    // 'Empresas Parceiras',
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="px-5 py-3 flex items-center justify-center"
    >
      <NavbarContent justify="start" className="md:pl-20">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className="md:w-full">
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
      <NavbarContent justify="end" className="sm:pr-20">
        <NavbarItem className="hidden sm:flex">
          <ContactUs />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
