import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      This is dashboard
      <div>
        <ul>
          <li>
            <Link href="dashboard/analytics">Analytics</Link>
          </li>
          <li>
            <Link href="dashboard/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
