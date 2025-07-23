import React from "react";

export default function Select() {
  return (
    <div>
      <label htmlFor="country" className="block mb-1">
        Country
      </label>
      <select id="country" name="country" className="border p-2 rounded w-full">
        <option value="">Select a country</option>
        <option value="in">India</option>
        <option value="us">USA</option>
      </select>
    </div>
  );
}
