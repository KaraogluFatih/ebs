import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LocationMap } from "@/components/location-map";
import { getTeam } from "@/data-access/globals/team";
import { getMission } from "@/data-access/globals/missionAndGoals";
import { getPartners } from "@/data-access/globals/partners";
import { getContactInfo } from "@/data-access/globals/contact-info";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getOpeningHours } from "@/data-access/globals/opening-hours";
import { getDirections } from "@/data-access/globals/directions";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";

export default async function AboutUsPage() {
  const team = await getTeam();
  const partners = await getPartners();
  const mission = await getMission();
  const contact = await getContactInfo();
  const openingHours = await getOpeningHours();
  const directions = await getDirections();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1600&text=Bildungswerk+Team"
              alt="Bildungswerk Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="container relative px-4 md:px-6 py-20 md:py-28 lg:py-32 mx-auto">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <div className="inline-block bg-accent text-primary font-semibold px-4 py-1 rounded-full text-sm md:text-base mb-2">
                Über uns
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Evangelisches Bildungswerk Kempten
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Bildung, Gemeinschaft und Glaube im Herzen von Kempten seit über
                50 Jahren
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

        {/* Mission and Values */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="space-y-4">
                  <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                    Unsere Mission
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                    {mission.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {mission.description}
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold text-primary">
                    {mission.goalsTitle}
                  </h3>
                  <ul className="space-y-2">
                    {mission.goals.map((goal) => (
                      <li key={goal.goal} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{goal.goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-auto">
                <Image
                  src={mission.image.url}
                  alt="Bildungswerk Gebäude"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                {team.sectionLabel}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                {team.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {team.description}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.members.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image.url || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium">{member.role}</p>
                    <p className="mt-3 text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section
          id="partner"
          className="w-full py-16 md:py-20 lg:py-24 bg-primary/5"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                Unsere Partner
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                Gemeinsam für Bildung und Gemeinschaft
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Wir arbeiten eng mit verschiedenen Partnern zusammen, um unsere
                Angebote zu bereichern und zu erweitern.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {partners.partners.map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-video relative bg-white p-4 flex items-center justify-center">
                      <Image
                        src={partner.logo.url || "/placeholder.svg"}
                        alt={partner.name}
                        width={200}
                        height={100}
                        className="object-contain max-h-24"
                      />
                    </div>
                    <CardContent className="p-4 flex items-center justify-between">
                      <p className="font-medium">{partner.name}</p>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact and Location */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                Kontakt
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                Besuchen Sie uns
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Wir freuen uns auf Ihren Besuch oder Ihre Kontaktaufnahme. Unser
                Team steht Ihnen gerne für Fragen und Anregungen zur Verfügung.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <LocationMap
                  coordinates={[contact.coordinates[0], contact.coordinates[1]]}
                  popupContent={
                    <div className="p-1">
                      <strong>{contact.organization}</strong>
                      <br />
                      {contact.street}, {contact.postalCode} {contact.city}
                      <br />
                      <a
                        href={`https://maps.google.com/?q=${contact.latitude},${contact.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        In Google Maps öffnen
                      </a>
                    </div>
                  }
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Kontaktinformationen
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-muted-foreground">
                          {contact.organization}
                        </p>
                        <p className="text-muted-foreground">
                          {contact.street}
                        </p>
                        <p className="text-muted-foreground">
                          {contact.postalCode} {contact.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Telefon</p>
                        <p className="text-muted-foreground">{contact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">E-Mail</p>
                        <p className="text-muted-foreground">{contact.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {openingHours.title}
                  </h3>
                  <div className="space-y-2">
                    {openingHours.entries.map((entry, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{entry.days}</span>
                        <span>{entry.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {directions.title}
                  </h3>

                  <Tabs
                    defaultValue={
                      directions.options[0]?.label
                        .toLowerCase()
                        .replace(/\s+/g, "-") || "default"
                    }
                  >
                    <ScrollArea>
                      <div className="w-full relative h-10">
                        <TabsList className="flex absolute h-10">
                          {directions.options.map((option) => (
                            <TabsTrigger
                              key={option.label}
                              value={option.label
                                .toLowerCase()
                                .replace(/\s+/g, "-")}
                            >
                              {option.label}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        <ScrollBar orientation="horizontal" />
                      </div>
                    </ScrollArea>

                    {directions.options.map((option) => (
                      <TabsContent
                        key={option.label}
                        value={option.label.toLowerCase().replace(/\s+/g, "-")}
                        className="mt-4"
                      >
                        <p>{option.description}</p>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
                <div className="pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Kontaktformular öffnen</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Kontaktformular</DialogTitle>
                        <DialogDescription>
                          Schreiben Sie uns eine Nachricht. Wir melden uns
                          zeitnah zurück!
                        </DialogDescription>
                      </DialogHeader>
                      <ContactForm />
                      <DialogClose asChild>
                        <Button variant="outline" className=" w-full">
                          Schließen
                        </Button>
                      </DialogClose>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
