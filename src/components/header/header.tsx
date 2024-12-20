import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center space-x-4 bg-green-400 h-[70px] items-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Header;
