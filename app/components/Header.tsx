import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

export  async function Header() {
  const session = await auth();
  return (
    <div className="w-full h-12 bg-gray-200 flex ">
      <div className="flex w-[80%] mx-auto justify-between items-center">
        <div className="flex ">
          <button type="button" className="font-bold text-2xl flex-nowrap">
            NL Startups
          </button>
        </div>
        <div className="w-[80%] mx-auto">
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
        </div>
        <div className="flex gap-2">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>
              <button onClick={ signOut}>Log Out</button>

              <Link href={`/users/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <div><button type="button" onClick={async()=>{
              'use server';
              await signIn(provider:'github')}}>
              <span>Sign In</span></button>
              </div>
            
                 
          )}
        </div>
      
    </div>
  );
}
