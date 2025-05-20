import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import { Badge } from "@/components/ui/badge";
import { getArticleById } from "@/data-access/collections/articles";
import { ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <RefreshRouteOnSave />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Link
              href="/articles"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Zurück zu allen Artikeln
            </Link>
          </div>

          <article className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground text-sm font-medium px-3 py-1">
                {article.category}
              </Badge>

              <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              {/* <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={article.author.image || "/placeholder.svg"}
                      alt={article.author.name}
                    />
                    <AvatarFallback>
                      {article.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{article.author.name}</p>
                    <p className="text-muted-foreground">
                      {article.author.role}
                    </p>
                  </div>
                </div>

                <Separator orientation="vertical" className="h-6" />

                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>

                <Separator orientation="vertical" className="h-6" />

                <div className="text-muted-foreground">
                  {article.readTime} Lesezeit
                </div>
              </div> */}

              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={article.image?.url || ""}
                  alt={article.image?.alt || "image"}
                  fill
                  className="object-cover"
                />
              </div>

              <RichText data={article.content} />

              <Separator />

              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Teilen</span>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
