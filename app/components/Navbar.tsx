'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';
import { UserButton, useUser, SignInButton, SignOutButton } from '@clerk/nextjs';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { setSearchQuery } = useSearch();
  const { isSignedIn } = useUser(); // Removed `user` to fix the error

  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    (<div className="w-full max-w-full h-[124px] px-4 md:px-12 bg-white border border-blue-300 md:border-2 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="font-bold text-2xl text-[#3563E9] cursor-pointer">
          <Link href={'/'}>MORENT</Link>
        </h1>
      </div>
      {/* Search Bar */}
      <div className="hidden md:flex flex-1 ml-4 md:ml-16">
        <div className="w-[492px] max-w-full h-11 rounded-full p-2 pl-4 border-2 flex items-center">
          <Image
            src={'/search.svg'}
            alt="search"
            width={25}
            height={25}
            className="cursor-pointer"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover"
            }} />
          <input
            type="text"
            placeholder="Search Something here"
            className="ml-4 flex-grow bg-transparent placeholder:text-sm focus:outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Image
            src={'/filter.svg'}
            alt="filter"
            width={25}
            height={25}
            className="ml-auto cursor-pointer"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover"
            }} />
        </div>
      </div>
      {/* Icons Section */}
      <div className="hidden md:flex items-center gap-4">
        <div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer" onClick={toggleHeart}>
          <Heart fill={isHeartFilled ? "red" : "none"} color={isHeartFilled ? "red" : "black"} />
        </div>
        <div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
          <Image
            src={'/notification.svg'}
            alt="notification"
            width={25}
            height={25}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover"
            }} />
        </div>
        <div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
          <Image
            src={'/settings.svg'}
            alt="settings"
            width={25}
            height={25}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover"
            }} />
        </div>

        {/* Clerk User Button */}
        {isSignedIn ? (
          <div className="flex items-center gap-2">
            <UserButton afterSignOutUrl="/" />
            <SignOutButton>
              <button className="text-sm text-red-500 hover:underline">Sign Out</button>
            </SignOutButton>
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="text-sm text-blue-500 hover:underline">Sign In</button>
          </SignInButton>
        )}
      </div>
      {/* Hamburger Menu */}
      <button
        className="md:hidden flex items-center justify-center p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[124px] left-0 w-full bg-white shadow-md border-t md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-4">
            <li>
              <Link href={'/'} className="text-lg text-[#3563E9]">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about'} className="text-lg">
                About
              </Link>
            </li>
            <li>
              <Link href={'/services'} className="text-lg">
                Services
              </Link>
            </li>
            <li>
              <Link href={'/contact'} className="text-lg">
                Contact
              </Link>
            </li>
            {/* Icons for Mobile */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" onClick={toggleHeart}>
                <Heart fill={isHeartFilled ? "red" : "none"} color={isHeartFilled ? "red" : "black"} />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                <Image
                  src={'/notification.svg'}
                  alt="notification"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }} />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                <Image
                  src={'/settings.svg'}
                  alt="settings"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }} />
              </div>
            </div>

            {/* Clerk Auth for Mobile */}
            <div className="w-full">
              {isSignedIn ? (
                <div className="flex flex-col gap-2">
                  <UserButton afterSignOutUrl="/" />
                  <SignOutButton>
                    <button className="text-sm text-red-500 hover:underline">Sign Out</button>
                  </SignOutButton>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className="text-sm text-blue-500 hover:underline">Sign In</button>
                </SignInButton>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>)
  );
}
