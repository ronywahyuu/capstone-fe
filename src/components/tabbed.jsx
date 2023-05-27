import PropTypes from "prop-types";
import { useCallback } from "react";

const Tabbed = ({ forYou, setForYou }) => {
  

  // const switchTab = useCallback((tabName) => {
  //   switch (tabName) {
  //     case "forYou":
  //       setForYou(true);
  //       break;
  //     default:
  //       setForYou(false);
  //       break;
  //   }
  // }, [forYou, setForYou]);

  return (
    <nav className="flex border-b border-gray-100 text-sm font-medium sticky top-0 z-10 bg-gray-50 justify-center md:justify-start ">
      <div
        href=""
        onClick={() => setForYou(true)}
        className={`-mb-px  p-4 cursor-pointer ${
          forYou
            ? "text-blue-800 transition  duration-500 border-b border-current"
            : "hover:text-blue-900"
        }`}
      >
        Untuk anda
      </div>

      <div
        href=""
        onClick={() => setForYou(false)}
        className={`-mb-px  p-4 cursor-pointer ${
          !forYou
            ? "text-blue-800 transition  duration-500 border-b border-current"
            : "hover:text-blue-800"
        }`}
      >
        Milik anda
      </div>
    </nav>
  );
};

Tabbed.propTypes = {
  forYou: PropTypes.bool,
  setForYou: PropTypes.func,
};

export default Tabbed;
