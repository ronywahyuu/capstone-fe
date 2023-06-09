import { MdKeyboardArrowUp } from "react-icons/md";
const ButtonToUp = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button onClick={scrollToTop} className="fixed bottom-10 right-10  cursor-pointer bg-blue-800 text-white p-2 rounded-full">
      <MdKeyboardArrowUp className="text-2xl" />
    </button>
  );
};

export default ButtonToUp;
