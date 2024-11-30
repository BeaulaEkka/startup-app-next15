import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full h-12 bg-gray-200">
      <nav className="w-[80%] mx-auto">
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
    </div>
  );
}
