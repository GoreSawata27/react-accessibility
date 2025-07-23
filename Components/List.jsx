import React from "react";

export default function List() {
  return (
    <section aria-label="lists">
      <ul aria-label="Services" className="list-disc pl-5">
        <li>Design</li>
        <li>Development</li>
        <li>Testing</li>
      </ul>

      <ol aria-label="Steps" className="list-decimal pl-5">
        <li>Choose Plan</li>
        <li>Fill Details</li>
        <li>Make Payment</li>
      </ol>

      <dl>
        <dt className="font-bold">Name</dt>
        <dd>Sawata Gore</dd>
        <dt className="font-bold">Role</dt>
        <dd>Frontend Developer</dd>
      </dl>
    </section>
  );
}
