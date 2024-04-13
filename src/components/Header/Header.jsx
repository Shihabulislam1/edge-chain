import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/mainLogo/logo-detail.png";
import BecomeEdge from "../BecomeEdge/BecomeEdge";

function Header() {
  const [state, setState] = useState(false);
  const navigation = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Cloud",
      link: "/cloud",
    },
  ];

  return (
    <header>
      <nav className="bg-[#03112d] w-full border-b md:border-0 md:static opacity-90">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavLink to="/">
              <img src={Logo} className="h-12 w-24" alt="Edge Chain logo" />
            </NavLink>
            <div className="md:hidden">
              <button
                className="text-gray-100 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
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
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-300 font-semibold text-[18px]  hover:link-hover-color transition-all ease-in-out duration-150"
                  >
                    <NavLink to={item.link}>{item.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:inline-block">
            <BecomeEdge />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
