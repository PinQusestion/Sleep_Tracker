import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>This is home page</h1>
      <Link href="/">Back</Link>
    </div>
  );
}

export default page;
