import { getPayload } from "payload";
import config from "@payload-config";
import { Article } from "@/types/article";

export async function getArticles(
  page: number = 1,
  limit: number = 9,
  search: string
): Promise<{
  articles: Article[];
  totalPages: number;
  currentPage: number;
}> {
  const payload = await getPayload({ config });

  const whereQuery = search
    ? {
        title: {
          like: search,
        },
      }
    : undefined;

  const result = await payload.find({
    collection: "articles",
    depth: 1,
    limit,
    page,
    where: whereQuery,
  });

  const articles: Article[] = result.docs.map((article: any) => ({
    id: article.id,
    title: article.title,
    date: article.date,
    readTime: article.readTime,
    shortDescription: article.shortDescription,
    category: article.category,
    image: article.image
      ? {
          url: article.image.url,
          alt: article.image.alt || article.title,
        }
      : undefined,
  }));

  return {
    articles,
    totalPages: result.totalPages,
    currentPage: result.page,
  };
}

export async function getArticleById(id: string): Promise<Article> {
  const payload = await getPayload({ config });

  const result = await payload.findByID({
    id,
    collection: "articles",
    depth: 1,
  });

  const article: Article = {
    id: result.id,
    title: result.title,
    date: result.date,
    readTime: result.readTime,
    content: result.content,
    shortDescription: result.shortDescription,
    category: result.category,
    image: result.image
      ? {
          url: process.env.API_BASEURL + result.image.url,
          alt: result.image.alt || result.title,
        }
      : undefined,
  };

  return article;
}
