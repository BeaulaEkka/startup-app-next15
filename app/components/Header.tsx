import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

async function Header() {
  const session = await auth();
  return (
    <header className="w-full h-12 bg-gray-200 flex ">
      <div className="flex w-[80%] mx-auto justify-between items-center gap">
        <nav>
          <button type="button" className="font-bold text-2xl flex-nowrap">
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
        <nav>
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

              <Link href={`/users/${session?.id}`}>
                <span>{session?.user?.name}</span>
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
