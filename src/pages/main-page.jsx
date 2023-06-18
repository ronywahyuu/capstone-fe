import { useCallback, useEffect, useState } from "react";
import Tabbed from "../components/tabbed";
import { Link, useLocation } from "react-router-dom";
import ButtonToUp from "../components/utils/button-up";
import ProfileCard from "../components/home/profile-card";
import useDonasiList from "../hooks/useDonasiList";
import PostCard from "../components/home/post-card";
import useBlogList from "../hooks/useBlogList";
import useGetUser from "../hooks/useGetUser";
import Modal from "../components/home/modal";
const MainPage = () => {
  const [forYou, setForYou] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();

  // ==================== API query for donasi data ====================
  // **
  // **
  const { data: myDonasi } = useDonasiList(
    "myDonasi",
    JSON.parse(localStorage.getItem("auth_user"))?.id
  );
  const yourDonasi = myDonasi?.data?.posts;

  const { data: donasi } = useDonasiList("donasi");
  const posts = donasi?.data?.posts;

  // ==================== API query for blog data ====================
  // **
  // **
  const { data: blogs } = useBlogList("blogs");
  const allBlogs = blogs?.data?.blogs;

  const { data: myBlog } = useBlogList(
    "myBlog",
    JSON.parse(localStorage.getItem("auth_user"))?.id
  );
  const yourBlog = myBlog?.data?.blogs;

  // ==================== API query for saved data ====================
  // **
  // **
  const { data: savedDonasiData } = useGetUser(
    JSON.parse(localStorage.getItem("auth_user"))?.id,
    "savedDonasiData"
  );
  const savedPosts = savedDonasiData?.savedPost;
  // console.log(savedPosts)

  // const { data: savedBlogData } = useGetUser(
  //   JSON.parse(localStorage.getItem("auth_user"))?.id,
  //   "savedBlogData"
  // );
  // const savedBlogs = savedBlogData?.savedBlog;

  // const blogsMap = savedBlogs?.map((blog) => blog.blog)

  // const {data: savedBlog} = useGetUser(localStorage.getItem("auth_user")?.id, "savedBlog")

  // ==================== mapping content berdasarkan role ====================
  // **
  // **
  const renderDonasi = forYou
    ? posts?.map((post) => <PostCard key={post.id} content={post} />)
    : yourDonasi?.map((post) => <PostCard key={post.id} content={post} />);

  const renderBlog = forYou
    ? allBlogs?.map((post) => <PostCard key={post.id} content={post} />)
    : yourBlog?.map((post) => <PostCard key={post.id} content={post} />);

  // const renderSaved = <div>af</div>
  // const renderSaved = forYou
  //   ? savedPosts?.map((post) => <PostCard key={post.id} content={post} />)
  //   : savedBlogs?.map((blog) => <PostCard key={blog.blog.id} content={blog.blog} />);

  const renderSaved =
    forYou &&
    savedPosts?.map((post) => <PostCard key={post.id} content={post} />);
  // ==================== render content berdasarkan pathname pada url ====================
  // **
  // **
  const donasiPage = pathname === "/home/timeline" && renderDonasi;
  const blogPage = pathname === "/home/blog" && renderBlog;
  const savedPage = pathname === "/home/saved" && renderSaved;

  // ==================== render tabbed component berdasarkan pathname pada url ====================
  // **
  // **
  // const renderTabIfNotInSavedPage = donasiPage || blogPage;

  // ==================== render page berdasarkan pathname pada url ====================
  // **
  const renderPage = () => {
    if (donasiPage) return donasiPage;
    if (blogPage) return blogPage;
    if (savedPage) return savedPage;
  };

  const handleScroll = useCallback(() => {
    // const position = window.pageYOffset;
    const position = window.scrollY;
    if (position > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [setShowButton]);

  const generateTextBtn = () => {
    switch (pathname) {
      case "/home/timeline":
        return "Buat Donasi";
      case "/home/blog":
        return "Tulis Blog";
      default:
        return "Buat Donasi";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="relative">
      <div className="px-10 py-5  bg-gray-50 ">
        {location.pathname !== "/home/saved" && (
          <Tabbed
            forYou={forYou}
            setForYou={setForYou}
            text1="Untuk Anda"
            text2="Milik Anda"
          />
        )}

        {location.pathname === "/home/saved" && (
          <Tabbed
            forYou={forYou}
            setForYou={setForYou}
            text1="Donasi tersimpan"
          />
        )}

        {/* main content */}
        <div className="grid grid-cols-4 gap-5 items-start">
          <div className=" col-span-4 md:col-span-3">
            {pathname !== "/home/saved" && (
              <Link to={`${pathname}/write`}>
                <button className="w-full mt-5 bg-[#104891] px-4 py-2 rounded-md text-white">
                  + {generateTextBtn()}
                </button>
              </Link>
            )}
            {renderPage()}
            {/* <div>404</div> */}
          </div>
          <ProfileCard />
        </div>
      </div>
      {showButton && <ButtonToUp />}
      <Modal show={showButton} setShow={setShowButton} />
    </div>
  );
};

export default MainPage;
