import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
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
              className="w-64 sm:w-80 bg-primary text-primary-foreground border-r-accent"
            >
              <div className="mb-8">
                <Image
                  src="/images/ebs-logo.png"
                  alt="EBS Logo"
                  width={120}
                  height={50}
                  className="mb-6"
                />
              </div>
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-accent transition-colors">
                  Startseite
                </Link>
                <Link
                  href="/events"
                  className="hover:text-accent transition-colors"
                >
                  Veranstaltungen
                </Link>
                <Link
                  href="/articles"
                  className="hover:text-accent transition-colors"
                >
                  Artikel
                </Link>
                <Link
                  href="/media-library"
                  className="hover:text-accent transition-colors"
                >
                  Mediathek
                </Link>
                <Link
                  href="/about-us"
                  className="hover:text-accent transition-colors"
                >
                  Über Uns
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white rounded-lg p-1">
              <Image
                src="/ebslogo.png"
                alt="EBS Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <span className="text-xl font-bold hidden lg:inline-block">
              Evangelisches Bildungswerk
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-base font-medium">
          <Link href="/" className="hover:text-accent transition-colors">
            Startseite
          </Link>
          <Link href="/events" className="hover:text-accent transition-colors">
            Veranstaltungen
          </Link>
          <Link
            href="/articles"
            className="hover:text-accent transition-colors"
          >
            Artikel
          </Link>
          <Link
            href="/media-library"
            className="hover:text-accent transition-colors"
          >
            Mediathek
          </Link>
          <Link
            href="/about-us"
            className="hover:text-accent transition-colors"
          >
            Über Uns
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-accent transition-colors"
          >
            Kontakt
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <form className="hidden lg:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Suchen..."
              className="pl-8 w-[200px] bg-white/20 text-primary-foreground placeholder:text-primary-foreground/70 border-accent/50 focus-visible:ring-accent"
            />
          </form>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Suchen</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
