import React from "react";

export default function Checkbox() {
  return (
    <section aria-label="checkboxes">
      <fieldset className="space-y-2">
        <legend className="font-bold">Choose toppings</legend>

        <div>
          <input id="cheese" name="topping" type="checkbox" />
          <label htmlFor="cheese" className="ml-2">
            Cheese
          </label>
        </div>
        <div>
          <input id="pepperoni" name="topping" type="checkbox" />
          <label htmlFor="pepperoni" className="ml-2">
            Pepperoni
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-2 mt-4">
        <legend className="font-bold">Choose size</legend>

        <div>
          <input id="small" name="size" type="radio" />
          <label htmlFor="small" className="ml-2">
            Small
          </label>
        </div>
        <div>
          <input id="large" name="size" type="radio" />
          <label htmlFor="large" className="ml-2">
            Large
          </label>
        </div>
      </fieldset>
    </section>
  );
}
