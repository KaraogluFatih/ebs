"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

//#TODO: move keys to .env

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, type, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.privacy) {
      toast.error("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }
    setLoading(true);
    try {
      console.log({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        subject: form.subject,
        message: form.message,
        phone: form.phone || "",
        time: new Date().toLocaleString("de-DE"),
      });
      await emailjs.send(
        "service_wd9xy0c",
        "template_q70j3ql",
        {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          subject: form.subject,
          message: form.message,
          phone: form.phone || "",
          time: new Date().toLocaleString("de-DE"),
        },
        "WHcopPyuLu-pObJSz"
      );
      toast.success("Nachricht erfolgreich gesendet!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      });
    } catch (err) {
      toast.error("Fehler beim Senden der Nachricht.");
    }
    setLoading(false);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="first-name"
            className="text-sm font-medium leading-none"
          >
            Vorname
          </label>
          <Input
            id="first-name"
            name="firstName"
            placeholder="Max"
            required
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="last-name"
            className="text-sm font-medium leading-none"
          >
            Nachname
          </label>
          <Input
            id="last-name"
            name="lastName"
            placeholder="Mustermann"
            required
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          E-Mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="max.mustermann@example.com"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium leading-none">
          Telefon (optional)
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="0831 12345678"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium leading-none">
          Betreff
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Ihre Anfrage betrifft..."
          required
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Nachricht
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Ihre Nachricht an uns..."
          className="min-h-[150px]"
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={form.privacy}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          required
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-primary hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu.
        </label>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Wird gesendet..." : "Nachricht senden"}
      </Button>
    </form>
  );
}
