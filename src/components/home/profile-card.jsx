import useGetUser from "../../hooks/useGetUser";
// import PropTypes from "prop-types";
const ProfileCard = () => {
  const { data: user } = useGetUser(
    JSON.parse(localStorage.getItem("auth_user"))?.id,
    "profileCardData"
  );

  // ====================== UI ======================
  return (
    <div
      className="  sticky right-5 top-[5rem] bg-gray-50 hidden md:flex items-start flex-col justify-between rounded-lg border border-gray-200 p-4 my-6 shadow-xl  "
      href="#"
    >
      <h2 className=" absolute top-0 left-0 p-2  ">Profil Anda</h2>
      <div className=" pt-4 text-gray-500 text-center mx-auto">
        <div className="w-20 h-20  rounded-full mx-auto">
          <img
            className=" object-cover w-full h-full rounded-full"
            src={user?.avatarImg}
            alt=""
          />
        </div>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          {user?.name}
        </h3>

        <p className="mt-2 hidden text-sm sm:block">Pekerja Lepas</p>
      </div>

      {/* stats */}
      <div className="mt-5 flex justify-evenly text-center  w-full">
        <div>
          <p className="text-sm font-medium text-gray-500">Donasi</p>
          <p className="text-lg font-semibold text-gray-900">
            {user?.postDonasi.length}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Blog</p>
          <p className="text-lg font-semibold text-gray-900">
            {user?.postBlog.length}
          </p>
        </div>
      </div>

      {/* button action */}
      <div className="mt-5 flex flex-col gap-2 mx-auto">
        <button className="w-full py-2 px-4 text-sm font-medium text-white bg-cyan-500 rounded-md hover:bg-cyan-600">
          Edit Profil
        </button>
      </div>
    </div>
  );
};

// ProfileCard.propTypes = {
//   data: PropTypes.object,
//   isLoading: PropTypes.bool,
//   error: PropTypes.object,
// };
export default ProfileCard;
