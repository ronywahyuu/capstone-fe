import { Suspense, useCallback, useEffect, useState } from "react";
import Tabbed from "../components/tabbed";
// import axios from "axios";
import ContentPage from "../components/home/content";
import { useLocation } from "react-router-dom";
import ButtonToUp from "../components/utils/button-up";
// import ProfileCard from "../components/home/profile-card";
// import API_ENDPOINT from "../config/api-endpoint";

const MainPage = () => {
  const [forYou, setForYou] = useState(true);
  // const [posts, setPosts] = useState([]);

  // const fetchDonasi = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/api/v1/posts");
  //     // wait 3 seconds time out
  //     setPosts(res.data.posts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchDonasi();
  // }, []);

  // const renderPosts = posts?.map((post, index) => {
  //   return (
  //     <>
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <ContentPage key={index} content={post.title} />
  //       </Suspense>
  //     </>
  //   );
  // });

  // console.log(renderPosts);

  // get url with react router dom
  const { pathname } = useLocation();

  console.log(pathname);

  const donasiPage = pathname === "/home/timeline" && (
    <ContentPage
      content={
        forYou ? "postingan donasi untuk anda" : "Postingan donasi milik anda"
      }
    />
  );

  const blogPage = pathname === "/home/blog" && (
    <ContentPage
      content={
        forYou ? "postingan blog untuk anda" : "Postingan blog milik anda"
      }
    />
  );

  const savedPage = pathname === "/home/saved" && (
    <ContentPage
      content={
        forYou
          ? "postingan tersimpan untuk anda"
          : "Postingan tersimpan milik anda"
      }
    />
  );

  const renderTabIfNotInSavedPage = donasiPage || blogPage;

  const renderPage = donasiPage || blogPage || savedPage;

  // show button to up if scroll down
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    if (position > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [setShowButton]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="relative">
      <div className="px-10 py-5  bg-gray-50 ">
        {/* tab component */}
        {/* <Tabbed forYou={forYou} setForYou={setForYou} /> */}
        {renderTabIfNotInSavedPage && (
          <Tabbed forYou={forYou} setForYou={setForYou} />
        )}

        {/* main content */}
        {renderPage}
        {/* <div className="grid">
          <ProfileCard />
        </div> */}
      </div>
      {showButton && <ButtonToUp />}
    </div>
  );
};

export default MainPage;
