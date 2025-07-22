import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-300 p-4 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">
          <Link href="/" aria-label="Go to homepage">
            Accessible Cards
          </Link>
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded text-black bg-amber-50"
          aria-label="Search cards"
        />
      </div>
    </nav>
  );
}
