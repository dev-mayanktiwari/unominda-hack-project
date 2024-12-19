import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col gap-4 py-10 text-center md:text-left">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="UNO MINDA Logo"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-lg font-medium text-blue-600">UNO MINDA</h3>
              <p className="text-sm text-gray-500">
                Leading Global Manufacturer of Automotive Components and Systems
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              className="text-sm hover:text-blue-600 transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm hover:text-blue-600 transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:text-blue-600 transition-colors"
              href="#"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          © 2024 UNO MINDA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
