"use client";
import React from "react";

export default function Buttons() {
  const HandelKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("div clicked");
    }
  };

  return (
    <section aria-label="button-actions" className="flex flex-col gap-10">
      <h2 className="pt-10">Button Actions</h2>
      <button type="submit" className="bg-amber-200 p-4 w-72" onClick={() => alert("Button clicked")}>
        This is button
      </button>

      <div
        role="button"
        className="bg-amber-200 p-4 w-72 flex justify-center items-center"
        tabIndex={0}
        onKeyDown={HandelKeyDown}
        onClick={() => alert("div clicked")}
      >
        This is div
      </div>
    </section>
  );
}
