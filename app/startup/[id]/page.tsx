import { formatDate } from "@/app/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Suspense } from "react";
import markdownit from "markdown-it";

export const experimental_ppr = true;
const md = markdownit();
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");
  return (
    <div className="w-[80%] mx-auto mt-10">
      page {post.title}{" "}
      <Suspense>
        {/* <DynamicComponent /> */}
        <section className="pink_container flex flex-col gap-2 items-center">
          <div className="above_tag">
            <p className="tag">{formatDate(post?._createdAt)}</p>
          </div>
          <h1 className="heading">{post.title}</h1>
          <p>{post?.description}</p>
        </section>
        <section>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-md mt-2 shadow-md "
          />

          <div className="flex gap-3 mt-5 justify-between border border-red-500 items-center">
            <Link href={`user/${post.author?._id}`}>
              <div className="flex gap-4 items-center">
                <Image
                  src={post.author.image}
                  width={65}
                  height={65}
                  alt="profile image"
                  className="rounded-full h-[65px] w-[65px] object-cover"
                />
                <div>
                  <p className="text-md font-semibold">{post.author.name}</p>
                  <p className="text-md text-gray-400">
                    @{post.author.username}
                  </p>
                </div>
              </div>
            </Link>
            <Link href={`category/${post.category}`}>
              <p className="category-tag">{post.category}</p>
            </Link>
          </div>
          <div className="mt-5 prose max-w-4xl font-work-sans break-all">
            <h1 className="text-2xl font-semibold mt-2">Pitch Details</h1>
            {parsedContent ? (
              <article dangerouslySetInnerHTML={{ __html: parsedContent }} />
            ) : (
              <p>No pitch details provided.</p>
            )}
            <hr className="mt-5" />
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default page;
