import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

import { ContactForm } from "@/components/contact-form";
import { getContactInfo } from "@/data-access/globals/contact-info";
import { getOpeningHours } from "@/data-access/globals/opening-hours";
import { getDirections } from "@/data-access/globals/directions";
import { getFaqs } from "@/data-access/globals/faqs";
import LocationSection from "@/components/location-section";

export default async function ContactPage() {
  const contactInfo = await getContactInfo();
  const openingHours = await getOpeningHours();
  const directions = await getDirections();
  const faqs = await getFaqs();
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1600&text=Kontakt"
              alt="Kontakt"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="mx-auto container relative px-4 md:px-6 py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <div className="inline-block bg-accent text-primary font-semibold px-4 py-1 rounded-full text-sm md:text-base mb-2">
                Kontakt
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Nehmen Sie Kontakt mit uns auf
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Wir freuen uns auf Ihre Nachricht und stehen Ihnen gerne für
                Fragen und Anregungen zur Verfügung
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="text-white fill-current"
            >
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>
        {/* Contact Information and Form */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <div className="space-y-4 mb-8">
                  <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                    Kontaktformular
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                    Schreiben Sie uns
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Füllen Sie das Formular aus und wir werden uns so schnell
                    wie möglich bei Ihnen melden.
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                    Kontaktinformationen
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                    So erreichen Sie uns
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wir freuen uns auf Ihren Besuch oder Ihre Kontaktaufnahme.
                    Unser Team steht Ihnen gerne für Fragen und Anregungen zur
                    Verfügung.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          {contactInfo.organization}
                        </p>
                        <p className="text-muted-foreground">
                          {contactInfo.street}
                        </p>
                        <p className="text-muted-foreground">
                          {contactInfo.postalCode} {contactInfo.city}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Telefon</h3>
                        <p className="text-muted-foreground">
                          {contactInfo.phone}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">E-Mail</h3>
                        <p className="text-muted-foreground">
                          {contactInfo.email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {openingHours.title}
                        </h3>
                        <div className="text-muted-foreground">
                          {openingHours.entries.map((entry, index) => (
                            <div key={index} className="flex justify-between">
                              <span>{entry.days}</span>
                              <span>{entry.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold text-lg mb-4">Folgen Sie uns</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-12 w-12"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-12 w-12"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-12 w-12"
                      >
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-primary/5">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                Standort
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                So finden Sie uns
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Unser Bildungswerk befindet sich zentral in Kempten und ist gut
                mit öffentlichen Verkehrsmitteln und dem Auto zu erreichen.
              </p>
            </div>

            <LocationSection
              coordinates={contactInfo.coordinates}
              directions={directions.options}
            />
          </div>
        </section>
        {/* FAQ Section */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Hier finden Sie Antworten auf die am häufigsten gestellten
                Fragen. Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns
                gerne direkt.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        );
        {/* Newsletter Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Newsletter abonnieren
                </h2>
                <p className="text-lg text-primary-foreground/90">
                  Bleiben Sie informiert über unsere Veranstaltungen und
                  Angebote. Wir senden Ihnen regelmäßig Updates zu unseren
                  Aktivitäten und Neuigkeiten.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                  placeholder="Ihre E-Mail-Adresse"
                  className="text-base bg-white/20 text-primary-foreground border-transparent placeholder:text-primary-foreground/70"
                />
                <Button className="text-base bg-accent hover:bg-accent/90 text-primary">
                  Abonnieren
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
