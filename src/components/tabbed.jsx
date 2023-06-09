import PropTypes from "prop-types";

const Tabbed = ({ forYou, setForYou, text1, text2 }) => {
  

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
        {text1}
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
        {text2}
      </div>
    </nav>
  );
};

Tabbed.propTypes = {
  forYou: PropTypes.bool,
  setForYou: PropTypes.func,
  text1: PropTypes.string,
  text2: PropTypes.string
};

export default Tabbed;
