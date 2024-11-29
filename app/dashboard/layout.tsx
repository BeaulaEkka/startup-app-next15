import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-12 bg-green-200">{children}</div>;
}
