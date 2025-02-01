import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#FFD700] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center justify-center flex-shrink-0">
              <img 
                src="/lovable-uploads/c32bdb0f-2218-49ac-8e7f-81e46d8cc068.png" 
                alt="KoinKeepers Logo" 
                className="h-40 object-contain transition-all duration-300 hover:brightness-75 hover:scale-105 -my-2"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.label} to={item.path} className="nav-link text-black/80 hover:text-primary">
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-black text-[#FFD700] hover:bg-black/80 hover:text-[#FFD700]"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-black/80 hover:text-black hover:bg-black/10"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden bg-[#FFD700]">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-black/80 hover:text-black hover:bg-black/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button 
                  asChild 
                  className="w-full mt-4 bg-black text-[#FFD700] hover:bg-black/80 hover:text-[#FFD700]"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};