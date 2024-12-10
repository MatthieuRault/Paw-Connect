'use client';

import Link from 'next/link';
import Logo from './Logo';

import { useState } from 'react';
import Modal from '../loginModal/Modal';
import SearchBar from './SearchBar';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar bg-base-100 bg-primary-color text-text-color">
        <div className="navbar-start text-3xl">
          <div className="dropdown text-3xl bg-primary-color">
            <div aria-label="burger" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow w-32 "
            >
              <li>
                <Link href="/" className="text-lg">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/animals" className="text-lg">
                  Les animaux
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-lg">
                  Localiser
                </Link>
              </li>
              <li>
                <Link href="/dons" className="text-lg">
                  Dons
                </Link>
              </li>
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-3xl">
            <li>
              <Link href="/">Accueil</Link>
            </li>

            <li>
              <Link href="/animals">Les animaux</Link>
            </li>
            <li>
              <Link href="/location">Localiser</Link>
            </li>
            <li>
              <Link href={'/dons'}>Dons</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">{isOpen && <SearchBar />}</div>
        <button
          aria-label="search"
          type="button"
          className="btn btn-ghost btn-circle"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <ul className="menu menu-horizontal px-1 text-3xl">
          <li>
            <Modal />
          </li>
        </ul>
      </div>
    </>
  );
}
