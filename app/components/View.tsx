import React from "react";
import Ping from "./Ping";

const View = ({ id }: { id: string }) => {
  return (
    <div className="view-tag">
      100 Views
      <div className="absolute -top-2 right-1">
        <Ping />
      </div>
    </div>
  );
};

export default View;
