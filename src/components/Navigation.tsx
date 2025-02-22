import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-gray-800 text-white shadow-md">
        {/* Links de navegación */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white hover:text-red-200">Home</Link>
          <Link href="/page1" className="hover:text-white hover:text-red-200">Página 1</Link>
          <Link href="/signin" className="hover:text-white hover:text-red-200">Sign in</Link>
        </div>
      </nav>
    </div>
  );
}
