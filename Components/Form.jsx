"use client";
import React, { useState } from "react";

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handelForm = (e) => {
    e.preventDefault();
    alert("form submitted");
    setFormSubmitted(true);
  };
  return (
    <section aria-labelledby="form-section">
      <h1 id="form-section">Form</h1>

      <form onSubmit={handelForm}>
        <label htmlFor="first-name">Input with label : First Name</label>
        <input type="text" id="first-name" placeholder="First Name" className="mx-4" />

        <input
          type="text"
          aria-label="last-name"
          placeholder="Input without label : Last name"
          className="mx-4"
        />

        <input type="submit" value="Submit form" />
      </form>

      {formSubmitted && (
        <div aria-live="polite" className="mt-4 text-sm text-green-700">
          Form submitted successfully.
        </div>
      )}
    </section>
  );
}
