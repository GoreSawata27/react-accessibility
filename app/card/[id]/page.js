"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams();

  return (
    <section>
      <h2 className="px-44">ID:{params.id}</h2>
    </section>
  );
}
