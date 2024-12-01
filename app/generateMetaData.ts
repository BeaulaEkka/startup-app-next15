import React from "react";

export async function generateMetaData({ params }) {
  const { id } = params;
  const resource = await getResourceById({ id });

  const title = resource.title + " | Beaula";
  const seoDescription =
    "Free resources database containing ebooks,guides and videos";

  return {
    title,
    description: seoDescription,
    other: {
      "og:title": title,
      "og:description": seoDescription,
      "og:image": image,
      "twitter:title": title,
      "twitter:description": seoDescription,
    },
  };
}
export default function generateMetaData({ params, searchParams });
