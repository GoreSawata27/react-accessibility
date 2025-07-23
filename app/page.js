import Link from "next/link";
import Buttons from "@/Components/Buttons";
import Form from "@/Components/Form";
import List from "@/Components/List";
import Select from "@/Components/Select";
import Checkbox from "@/Components/Checkbox";

const cards = [
  { id: "1", title: "Card One", description: "Brief info about Card One" },
  { id: "2", title: "Card Two", description: "Brief info about Card Two" },
  { id: "3", title: "Card Three", description: "Brief info about Card Three" },
];

export default function Home() {
  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="">Cards</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" aria-label="Card list">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={`/card/${card.id}`}
            className="bg-blue-300 p-4 shadow hover:shadow-md focus:outline focus:ring-2 rounded"
            aria-label={`View details for ${card.title}`}
          >
            <h3 className="text-lg font-semibold text-black">{card.title}</h3>
            <p className="text-black">{card.description}</p>
          </Link>
        ))}
      </section>

      {/* Section 2 */}

      <Buttons />

      {/* Section 3 */}
      <br />
      <br />
      <Form />

      {/* Section 4 */}
      <br />
      <br />
      <List />
      <br />
      <br />
      <Select />

      <br />
      <br />
      <Checkbox />
    </main>
  );
}
