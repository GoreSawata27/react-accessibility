import React from "react";

export default function Form() {
  return (
    <section aria-labelledby="form-section">
      <h1 id="form-section">Form</h1>

      <form>
        <label htmlFor="first-name">Input with label : First Name</label>
        <input type="text" id="first-name" placeholder="First Name" className="mx-4" />

        <input
          type="text"
          aria-label="last-name"
          placeholder="Input without label : Last name"
          className="mx-4"
        />
      </form>
    </section>
  );
}
