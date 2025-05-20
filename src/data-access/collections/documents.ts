import { getPayload } from "payload";
import config from "@payload-config";
import { Document } from "@/types/document";

export async function getDocuments(
  page: number = 1,
  limit: number = 9,
  search?: string,
  category?: string
): Promise<{
  documents: Document[];
  totalPages: number;
  currentPage: number;
}> {
  const payload = await getPayload({ config });

  // Build where query based on search and category filters
  const whereQuery: any = {};

  if (search) {
    whereQuery.title = {
      like: search,
    };
  }

  if (category && category !== "all") {
    whereQuery.category = {
      equals: category,
    };
  }

  const result = await payload.find({
    collection: "documents",
    depth: 1,
    limit,
    page,
    where: Object.keys(whereQuery).length > 0 ? whereQuery : undefined,
  });

  const documents: Document[] = result.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    date: doc.date,
    fileType: doc.fileType,
    fileSize: doc.fileSize,
    description: doc.description,
    category: doc.category,
    downloads: doc.downloads || 0,
    document: doc.file
      ? {
          id: doc.file.id,
          url: process.env.API_BASEURL + doc.file.url,
          filename: doc.file.filename,
          mimeType: doc.file.mimeType,
          filesize: doc.file.filesize,
          alt: doc.file.alt || doc.title,
          createdAt: doc.file.createdAt,
          updatedAt: doc.file.updatedAt,
          thumbnailURL: doc.file.thumbnailURL
            ? process.env.API_BASEURL + doc.file.thumbnailURL
            : "", // fallback if no thumbnailURL
        }
      : {
          id: "",
          url: "",
          filename: "",
          mimeType: "",
          filesize: 0,
          alt: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          thumbnailURL: "",
        },
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  }));

  return {
    documents,
    totalPages: result.totalPages,
    currentPage: result.page,
  };
}

export async function getDocumentById(id: string): Promise<Document> {
  const payload = await getPayload({ config });

  const result = await payload.findByID({
    id,
    collection: "documents",
    depth: 1,
  });

  const document: Document = {
    id: result.id,
    title: result.title,
    date: result.date,
    fileType: result.fileType,
    fileSize: result.fileSize,
    description: result.description,
    category: result.category,
    downloads: result.downloads || 0,
    document: result.file
      ? {
          id: result.file.id,
          url: process.env.API_BASEURL + result.file.url,
          filename: result.file.filename,
          mimeType: result.file.mimeType,
          filesize: result.file.filesize,
          alt: result.file.alt || result.title,
          createdAt: result.file.createdAt,
          updatedAt: result.file.updatedAt,
          thumbnailURL: result.file.thumbnailURL
            ? process.env.API_BASEURL + result.file.thumbnailURL
            : "",
        }
      : {
          id: "",
          url: "",
          filename: "",
          mimeType: "",
          filesize: 0,
          alt: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          thumbnailURL: "",
        },
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  };

  return document;
}
