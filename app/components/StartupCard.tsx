import React from "react";

type StartupCardType = {
  _id: string;
  _createdAt: string;
  views: number;
  author: string;
  description: string;
  image: string;
  category: string;
  title: string;
};
function StartupCard({ post }: { post: StartupCardType }) {
  return (
    <div>
      <h1>StartupCard</h1>
      <li className="startup-card group">{post._id}</li>
    </div>
  );
}

export default StartupCard;
