import {
  MdFavoriteBorder,
  MdTurnedInNot,
  MdBookmark,
  MdOutlineShare,
  MdSend,
  MdFavorite,
} from "react-icons/md";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import useGetUser from "../../../hooks/useGetUser";

const DetailBlog = ({ postId, userId }) => {
  const [commentText, setCommentText] = useState("");

  const { isLoading: isLoadingBlog, data: dataBlog } = useQuery(
    "getSingleBlog",
    () => axios.get("http://localhost:8080/api/v1/blogs/" + postId)
  );

  const blogData = dataBlog?.data?.blog;

  // ==================== function bookmark ====================
  const handleBookmark = () => {
    // ini untuk memanggil function mutation
    // bookMarkPost(payload);
    // console.log(payload);
  };

  // ==================== function unbookmark ====================
  const handleUnBookmark = () => {
    // console.log(payload);
  };

  const handleAddComment = () => {
    // addComment(payload);
  };

  const handleLike = () => {
    // likePost(payload);
  };

  const handleUnlike = () => {
    // unlikePost(payload);
  };

  const user = useGetUser(userId, "getUserForDetailBlog");
  // console.log(user?.data?.postDonasi.map((post) => post.id).includes(postId));
  const isMine = user?.data?.postBlog.map((blog) => blog.id).includes(postId);


  return (
    <article className="">
      <div className="p-6 md:py-10 md:px-20 flex">
        <img
          className="h-16 w-16 object-cover rounded-full mr-4"
          alt="Photo Profile"
          src={blogData?.author?.avatarImg}
        />
        <div>
          <h1 className="text-lg font-medium text-gray-900">
            {blogData?.title}
          </h1>
          <h2 className="text-md font-normal text-gray-600">
            Diposting oleh: {blogData?.author?.name}
          </h2>
          <h3 className="text-xs font-normal text-gray-400">
            {blogData?.createdDate}
          </h3>

          <p className="my-4  text-sm/relaxed text-gray-500">
            {blogData?.body}
          </p>

          {blogData?.bannerImg && (
            <img
              className="h-56 w-full object-cover rounded-md"
              alt=""
              src={blogData?.bannerImg}
            />
          )}
        </div>
      </div>
      <div className="p-4 ml-16 sm:p-6 flex gap-6">
        {blogData?.isLiked ? (
          <MdFavorite
            onClick={handleUnlike}
            className="cursor-pointer text-red-700 text-2xl transform motion-safe:hover:scale-110"
          />
        ) : (
          // <span onClick={handleUnlike}>Liked</span>
          <MdFavoriteBorder
            onClick={handleLike}
            className="cursor-pointer text-2xl transform motion-safe:hover:scale-110"
          />
        )}
        {blogData?.isSaved ? (
          <span
            className="cursor-pointer  text-2xl transform motion-safe:hover:scale-110"
            onClick={handleUnBookmark}
          >
            <MdBookmark />
          </span>
        ) : (
          <MdTurnedInNot
            onClick={handleBookmark}
            className="cursor-pointer text-2xl transform motion-safe:hover:scale-110"
          />
        )}
        <MdOutlineShare className="text-2xl transform motion-safe:hover:scale-110" />
        {isMine && (
          <div className="flex gap-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Hapus
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Edit
            </button>
          </div>
        )}
      </div>

      <form onSubmit={handleAddComment} className="p-4 ml-16 sm:p-6 flex ">
        <img
          className="h-12 w-12 object-cover rounded-full mr-4"
          alt="Photo Profile"
          src="../../public/profile.png"
        />
        <div className="flex">
          <input
            type="text"
            id="UserComment"
            placeholder="Masukan komentar Anda"
            className="mt-1 ml-1.5 w-96 h-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            type="submit"
            className="text-3xl ml-5 mt-3 transform motion-safe:hover:scale-110"
          >
            <MdSend />
            {/* {isLoadingAddComment ? "Loading..." : <MdSend />} */}
          </button>
        </div>
      </form>

      {/* <Comment postId={params.id} /> */}
    </article>
  );
};

export default DetailBlog;
