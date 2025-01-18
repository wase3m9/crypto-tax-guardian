import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Xrypto</h3>
            <p className="text-sm text-gray-600">
              Your trusted partner for crypto tax solutions.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                Email: contact@xrypto.com
              </li>
              <li className="text-sm text-gray-600">Phone: +44 (0) 123 456 789</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Xrypto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};