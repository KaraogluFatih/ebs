import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { ContactInfo } from "@/types/contact-info";

export function SiteFooter(contactInfo: ContactInfo) {
  return (
    <footer className="bg-primary text-white border-t border-t-[#f0c040]/20 ">
      <div className="container px-4 py-12 md:py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
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
              <span className="text-xl font-bold text-white">
                {contactInfo.organization}
              </span>
            </div>
            <p className="text-white/80 mb-4">
              Bildung, Gemeinschaft und Glaube im Herzen von Kempten seit über
              50 Jahren.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f0c040]/20 transition-colors">
                  <Facebook className="h-5 w-5 text-[#f0c040]" />
                </div>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f0c040]/20 transition-colors">
                  <Instagram className="h-5 w-5 text-[#f0c040]" />
                </div>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f0c040]/20 transition-colors">
                  <Youtube className="h-5 w-5 text-[#f0c040]" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Angebote</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/events"
                  className="text-white/80 hover:text-[#f0c040] transition-colors"
                >
                  Veranstaltungen
                </Link>
              </li>
              <li>
                <Link
                  href="/article"
                  className="text-white/80 hover:text-[#f0c040] transition-colors"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/media-library"
                  className="text-white/80 hover:text-[#f0c040] transition-colors"
                >
                  Mediathek
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="text-white/80 hover:text-[#f0c040] transition-colors"
                >
                  Dokumente
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Über uns</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-white/80 hover:text-[#f0c040] transition-colors"
                >
                  Unser Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#partner"
                  className="text-white/80 hover:text-[#f0c040] transition-colors"
                >
                  Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white/80 hover:text-[#f0c040] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Kontakt</h3>
            <address className="not-italic text-white/80">
              <p>{contactInfo.organization}</p>
              <p>{contactInfo.street}</p>
              <p>
                {contactInfo.postalCode} {contactInfo.city}
              </p>
              <p className="mt-2">Tel: {contactInfo.phone}</p>
              <p>E-Mail: {contactInfo.email}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-white/60 md:text-left">
            © 2025 {contactInfo.organization}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="#" className="hover:text-[#f0c040] transition-colors">
              Impressum
            </Link>
            <Link href="#" className="hover:text-[#f0c040] transition-colors">
              Datenschutz
            </Link>
            <Link href="#" className="hover:text-[#f0c040] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
