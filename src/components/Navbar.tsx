import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="UNO MINDA Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-blue-600">UNO MINDA</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#"
          >
            Technology
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
