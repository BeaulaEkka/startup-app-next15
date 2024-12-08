import Image from "next/image";
import React from "react";
import { formatDate } from "../utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Author, Startup } from "@/sanity.types";

// type AuthorType = {
//   _id: string;
//   name: string;
// };
// type StartupCardType = {
//   _id: string;
//   _createdAt: string | Date;
//   views: number;
//   author: AuthorType;
//   description: string;
//   image: string;
//   category: string;
//   title: string;
// };
export type StartupCardType = Omit<Startup, "author"> & {
  author?: Author | null;
};
function StartupCard({ post }: { post: StartupCardType }) {
  const session = auth();
  const {
    _id,
    _createdAt,
    views,
    author,
    description,
    category,
    title,
    image,
  } = post;
  return (
    <div className="startup-card flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="capitalize text-sm">{formatDate(_createdAt)}</div>
        <div className="flex items-center gap-2">
          <EyeIcon className="size-5 text-green-500" />
          <div className="text-sm">{views}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <Link href={`/user/${author?._id}`}>{author?.name}</Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-xl font-semibold line-clamp-1 ">{title}</h3>
          </Link>
        </div>
        <div>
          <Link href={`/user/${author?._id}`}>
            <Image
              src="https://placehold.co/48x48"
              width={50}
              height={50}
              alt={author?.name || "Unknown Author"}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>

      <div className="line-clamp-1 h-32 overflow-hidden">{description}</div>
      <div className="w-full my-2">
        <Image
          src={image || "https://placehold.co/250x250"}
          width={250}
          height={250}
          alt={title || "Startup Image"}
          className="w-full h-40 object-cover rounded-lg  shadow-md"
        />
      </div>

      <div className="flex justify-between gap-3 items-center">
        <Link href={`/query=${category?.toLowerCase()}`}>
          <p>{category}</p>
        </Link>

        <Button asChild className="rounded-full">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </div>
  );
}

export default StartupCard;
