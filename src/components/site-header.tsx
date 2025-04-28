"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cva } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ContactInfo } from "@/types/contact-info";

export function SiteHeader(contactInfo: ContactInfo) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationMenuTriggerStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-[#f0c040] focus:bg-white/10 focus:text-[#f0c040] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10 text-white"
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-md" : "bg-primary/95"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-4 w-64 sm:w-80 bg-[#00407e] text-white border-r-[#00407e]"
            >
              <div className="mb-8 flex items-center flex-wrap">
                <div className="mr-2 rounded-full overflow-hidden">
                  <Image
                    src="/ebslogo.png"
                    alt="EBS Logo"
                    width={40}
                    height={40}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">
                  {contactInfo.organization}
                </span>
              </div>
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="hover:text-[#f0c040] transition-colors"
                >
                  Startseite
                </Link>
                <Link
                  href="/events"
                  className="hover:text-[#f0c040] transition-colors"
                >
                  Veranstaltungen
                </Link>
                <Link
                  href="/articles"
                  className="hover:text-[#f0c040] transition-colors"
                >
                  Artikel
                </Link>
                <Link
                  href="/media-library"
                  className="hover:text-[#f0c040] transition-colors"
                >
                  Mediathek
                </Link>
                <Link
                  href="/documents"
                  className="hover:text-[#f0c040] transition-colors"
                >
                  Dokumente
                </Link>
                <Link
                  href="/about-us"
                  className="hover:text-[#f0c040] transition-colors"
                >
                  Über Uns
                </Link>
                <Link
                  href="/about-us"
                  className="hover:text-[#f0c040] transition-colors"
                >
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-sm flex items-center justify-center">
              <Image
                src="/ebslogo.png"
                alt="EBS Logo"
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-xl font-bold hidden sm:inline-block text-white">
              {contactInfo.organization}
            </span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref className={navigationMenuTriggerStyle()}>
                Startseite
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-[#f0c040]">
                Angebote
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/80 to-primary p-6 no-underline outline-none focus:shadow-md"
                        href="/events"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Veranstaltungen
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Entdecken Sie unsere vielfältigen Bildungs- und
                          Gemeinschaftsangebote
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                        href="/articles"
                      >
                        <div className="text-sm font-medium leading-none">
                          Artikel
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Lesen Sie unsere neuesten Beiträge
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                        href="/media-library"
                      >
                        <div className="text-sm font-medium leading-none">
                          Mediathek
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Videos, Podcasts und mehr
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                        href="/documents"
                      >
                        <div className="text-sm font-medium leading-none">
                          Dokumente
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Wichtige Materialien zum Download
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Über Uns
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kontakt
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="ml-2 hidden sm:flex border-[#f0c040]/50 text-white hover:bg-white/10 hover:text-[#f0c040]"
          >
            Spenden
          </Button>
        </div>
      </div>
    </header>
  );
}
