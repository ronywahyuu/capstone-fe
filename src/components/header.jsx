import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      aria-label="Site Header"
      className="bg-white sticky top-0 shadow-sm z-10"
    >
      <div className="mx-auto  max-w-screen-2xl px-4 md:px-10">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src="/logo-text.svg" width="150px" alt="" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink to="/" active className="text-gray-500 transition hover:text-gray-500/75">
                    Beranda
                  </NavLink>
                  {/* <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Beranda
                  </a> */}
                </li>

                <li>
                  <NavLink to="/about" className="text-gray-500 transition hover:text-gray-500/75">
                    Tentang Kami
                  </NavLink>
                  {/* <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/about"
                  >
                    Tentang Kami
                  </a> */}
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <NavLink
                  className="rounded-md bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/login"
                >
                  Gabung
                </NavLink>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
