"use client";

import { useState } from "react";
import { toast } from "sonner"; // optional if you want toast notifications
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function SignupDialog({
  eventId,
  eventTitle,
}: {
  eventId: string;
  eventTitle: string;
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/eventsignups`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: eventId,
        ...form,
      }),
    });

    if (res.ok) {
      toast.success("Erfolgreich angemeldet!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      });
    } else {
      toast.error("Fehler bei der Anmeldung.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full text-base bg-primary hover:bg-primary/90">
          Jetzt anmelden
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Anmeldung für {eventTitle}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-1">Vorname</Label>
              <Input
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label className="mb-1">Nachname</Label>
              <Input
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label className="mb-1">E-Mail</Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label className="mb-1">Telefonnummer</Label>
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div>
            <Label className="mb-1">Adresse</Label>
            <Textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full">
            Anmelden
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
