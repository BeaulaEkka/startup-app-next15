import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <div className="w-[80%] mx-auto mt-10">page {id}</div>;
};

export default page;
