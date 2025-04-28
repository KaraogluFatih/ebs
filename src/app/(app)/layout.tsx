import type React from "react";
import "@/app/(app)/globals.css";
import "@/app/(app)/leaflet.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getContactInfo } from "@/data-access/globals/contact-info";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evangelisches Bildungswerk Kempten",
  description: "Bildung, Gemeinschaft und Glaube in Kempten",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactInfo = await getContactInfo();
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader
            organization={contactInfo.organization}
            street={contactInfo.street}
            postalCode={contactInfo.postalCode}
            city={contactInfo.city}
            coordinates={[0, 0]}
          />
          {children}
          <SiteFooter
            organization={contactInfo.organization}
            street={contactInfo.street}
            postalCode={contactInfo.postalCode}
            city={contactInfo.city}
            phone={contactInfo.phone}
            email={contactInfo.email}
            coordinates={[0, 0]}
          />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
