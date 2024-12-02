
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      this is users details page
      <h1>UserProfile:{id}</h1>
    </div>
  );
}
