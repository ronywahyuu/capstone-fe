import PropTypes from "prop-types";
// import ProfileCard from "./profile-card";
import PostCard from "./post-card";
import { useLocation } from "react-router-dom";
import API_ENDPOINT from "../../globals/api-endpoint";
const ContentPage = ({ content }) => {
  const { pathname } = useLocation();

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

  const api = API_ENDPOINT
  console.log(api.SINGLE_DONASI(1));

  return (
    <div className=" ">
      {/*  */}
      {pathname !== "/home/saved" && (
        <button className=" mt-5 bg-[#015A5F] px-4 py-2 rounded-md text-white">
          + {generateTextBtn()}
        </button>
      )}
      <div>
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
        <PostCard content={content} />
      </div>
    </div>
  );
};

ContentPage.propTypes = {
  content: PropTypes.string,
};

export default ContentPage;
