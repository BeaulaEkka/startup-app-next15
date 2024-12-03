import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Header() {
  const session = await auth();
  return (
    <header className="w-full h-12 bg-gray-200 flex ">
      <div className="flex w-[80%] mx-auto justify-between items-center gap">
        <nav>
          <button type="button" className="workSans font-bold text-2xl flex-nowrap">
            NL Startups
          </button>
        </nav>
        <nav>
          {" "}
          <ul className="flex gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
          </ul>
        </nav>
        <nav className="flex items-center gap-3">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Log Out</button>
              </form>

              <Link href={`/users/${session?.id}`} className="flex items-center gap-2">
                <span>{session?.user?.name}</span>
               
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={`${session.user.name}'s profile picture`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                )}
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button type="submit">Log In</button>
            </form>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
