import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/side-menu";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useGetUser from "../hooks/useGetUser";

const MainLayout = () => {
  // ====================== state ======================
  const [offCanvas, setOffCanvas] = useState(false);
  const { pathname } = useLocation();

  if (pathname === "/home") {
    window.location.href = "/home/timeline";
  }

  // ====================== hooks ======================
  const { data: user, error } = useGetUser(JSON.parse(localStorage.getItem("auth_user"))?.id, "authenticatedUser");

  if (error) {
    return <h1>error</h1>;
  }


  // console.log(user)
  return (
    <main className="flex ">
      <SideMenu offCanvas={offCanvas} setOffCanvas={setOffCanvas} />

      <div className="w-full ">
        {/* topbar */}
        <div className="flex items-center justify-between py-5 px-5 md:px-10 bg-white ">
          <div className="flex items-center gap-2">
            {offCanvas && (
              <RxHamburgerMenu
                onClick={() => setOffCanvas(!offCanvas)}
                aria-label="hamburger menu"
                className="cursor-pointer text-2xl text-gray-500"
              />
            )}
            <h3 className="font-semibold text-base md:text-2xl">
              {user ? `Selamat Datang, ${user?.name}!` : `Selamat Datang!`}
              {/* Selamat Datang, {isLoading ? "" : user?.name}! */}
            </h3>
          </div>

          <div aria-label="profile" className="flex cursor-pointer">
            {/* avatar */}
            <div className="w-10 h-10 bg-gray-500 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
