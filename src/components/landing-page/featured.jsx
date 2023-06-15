import PropTypes from "prop-types";
const Featured = ({ text, description, icon }) => {
  return (
    <div  className="group cursor-default relative block h-48 md:h-64 w-full">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition duration-500 group-hover:-translate-x-2  group-hover:-translate-y-2 ">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <span className="text-5xl">{icon}</span>

          <h2 className="mt-4 text-xl font-medium sm:text-2xl">{text}</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:transition group-hover:duration-500 group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{text}</h3>

          <p className="mt-4 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default Featured;
