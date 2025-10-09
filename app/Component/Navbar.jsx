"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "font-awesome/css/font-awesome.min.css";

// import { UserButton, SignedOut, SignedIn } from "@clerk/clerk-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const bgClass = scrolled ? "bg-white shadow-md" : "bg-transparent";
  const textColorClass = scrolled ? "text-black " : "text-white";

  const navLinkClass = (href) =>
    pathname === href
      ? "text-primary font-semibold border-b-2 border-primary transition-colors duration-300"
      : "hover:text-primary transition-colors duration-300";


      const [showDropdown, setShowDropdown] = useState(false);

 
  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass} `}
    >
      <div className="max-w-7xl h-16 mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="flex items-center text-2xl font-josefin  font-semibold  ">
            <span className=" text-primary ">DIGI</span>
            {/* <span className="text-yellow-600"></span> */}
            <span className="text-bluebrand">T</span>
            <span className=" text-bluebrand">
              <i className="fa-solid fa-earth-americas animate-spin " style={{ fontSize: "23px" }}></i>
            </span>
            <span className="text-bluebrand">NIC</span>
            <span className="text-primary ml-2"> INDIA</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-6 lg:space-x-9 ${textColorClass} text-xl font-semibold`}
        >
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <li
  className="relative list-none"
  onMouseEnter={() => setShowDropdown(true)}
  onMouseLeave={() => setShowDropdown(false)}
>
  <Link
    href="/services"
    className={`${navLinkClass("/services")} flex items-center`}
  >
    Services ▾
  </Link>

  {showDropdown && (
    <div
      className="absolute left-0 mt-1 w-44 bg-white border rounded-md shadow-lg z-50"
    >
      <Link
        href="/services/devlopment"
        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
      >
        Development
      </Link>
        <Link
        href="/services/job"
        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
      >
        Job
      </Link>
      <Link
        href="/services/internship"
        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
      >
        Internship
      </Link>
    
    </div>
  )}
</li>
         <Link href="/product" className={navLinkClass("/product")}>
            Product
          </Link>
          <Link href="/blog" className={navLinkClass("/blog")}>
            Blogs
          </Link>
          <Link href="/internship" className={navLinkClass("/internship")}>
            Internship
          </Link>
         <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

          {/* Auth links */}
          {/* <SignedOut>
            <Link href="/login" className={navLinkClass("/login")}>
              Login
            </Link>
            <Link href="/signup" className={navLinkClass("/signup")}>
              SignUp
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${textColorClass}`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow text-center space-y-2">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "services" },
            { href: "/contact", label: "Contact" },
            { href: "/blog", label: "Blogs" },
            { href: "/internship", label: "Internship" },
            { href:"/product", label:"Product" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "block py-2 text-teal-500 font-semibold"
                  : "block py-2 text-black hover:text-teal-400"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
