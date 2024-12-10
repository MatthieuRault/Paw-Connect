"use client";

import Link from "next/link";
import Login from "./Login";
import Subscribe from "./Subscribe";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";

export default function Modal() {
  const { isLogged, userConnected, handleLogout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isLogged) {
      document.getElementById("my_modal_1").close(); // Closed modal if the user is connected
    }
  }, [isLogged]);

  return (
    <>
      {isLogged ? (
        <>
          <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              id="avatarButton"
              type="button"
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              className="absolute w-10 h-10 text-gray-400 -left-1 rounded-full cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleDropdown}
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          {isDropdownOpen && (
            <div
              id="userDropdown"
              className="text-gray"
              style={{
                position: "absolute",
                top: "120%",
                right: "5%",
                zIndex: 1000,
                width: "200px",
              }}
            >
              <div className="bg-primary-color border-2	rounded-lg px-6 py-4 text-sm text-gray-900 dark:text-white-600 w-full">
                <h2 className="text-lg">
                  {" "}
                  Bonjour, {userConnected.firstname}{" "}
                </h2>

                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-stone-950 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Votre compte
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-lg text-stone-950	hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Link
          href="#"
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          Login
        </Link>
      )}

      <dialog id="my_modal_1" className="modal h-auto">
        <div className="modal-box absolute right-50 top-10 rounded-box flex flex-col items-center space-y-4 p-5">
          <Subscribe />
          <Login />
        </div>
      </dialog>
    </>
  );
}
