"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";

export default function ArticlesFilter({
  defaultSearch = "",
}: {
  defaultSearch?: string;
}) {
  const [search, setSearch] = useState(defaultSearch);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    params.set("page", "1");

    router.push(`/articles?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div className="relative w-full md:w-96">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Artikel suchen..."
          className="pl-8 w-full"
        />
      </div>
    </form>
  );
}
