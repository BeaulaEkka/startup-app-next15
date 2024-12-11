import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });
  console.log(totalViews);
  return (
    <div className="view-tag">
      <p>views:{totalViews}</p>
      <div className="absolute -top-2 right-1">
        <Ping />
      </div>
    </div>
  );
};

export default View;
