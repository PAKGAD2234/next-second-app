import React from "react";
import Link from "next/link";

export default function OpenSanook() {
  return (
    <div>
        <br />
      <Link
        href="https://www.opensanook.com"
        className="text-pink-500 hover:text-green-200 underline  border-2 border-pink-500 rounded-lg p-2"
        target="_blank"
        rel="noopener noreferrer border-2 border-blue-500 rounded-lg p-2"
       
      >
        Open Sanook.com
      </Link>
    </div>
  );
}
