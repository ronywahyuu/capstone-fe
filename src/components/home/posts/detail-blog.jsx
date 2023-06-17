import {
  MdFavoriteBorder,
  MdTurnedInNot,
  MdBookmark,
  MdOutlineShare,
  MdSend,
  MdFavorite,
} from "react-icons/md";
import axios from "axios";
import { useMutation, useQuery, useQueryClient} from "react-query";
import API_ENDPOINT from "../../../globals/api-endpoint";
import Comment from "../comment";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import useGetUser from "../../../hooks/useGetUser";

const DetailBlog = ({ postId, blogId, userId }) => {
  const [commentText, setCommentText] = useState("");

  const queryClient = useQueryClient();

  const { isLoading, data, isError } = useQuery("getSingleBlog",() => 
    axios.get(API_ENDPOINT.SINGLE_BLOG(postId))
  );

  // ==================== get saved by current user ====================
  const { data: dataBlog } = useFetch("getSavedBlogCurrentUser", () =>
    axios.get(API_ENDPOINT.GET_CURRENT_USER_BOOKMARK_BLOG(userId), {
      withCredentials: true,
    })
  );

  // ==================== get likes by current user ====================
  const { data: getLikesBlogByCurrentUser } = useFetch(
    "getLikesBlogCurrentUser",
    () =>
      axios.get(API_ENDPOINT.GET_CURRENT_USER_LIKE_BLOG(userId), {
        withCredentials: true,
      })
  );

   // ==================== check if this post is mine ====================
   const user = useGetUser(userId, "getUserForDetailBlog");
   const isMine = user?.data?.postBlog.map((blog) => blog.id).includes(postId);
   const isSaved = dataBlog?.data?.data?.some(
     (saved) => saved.postId === postId
   );
  // compare likes data with current post
   const isLiked = getLikesBlogByCurrentUser?.data?.like?.some(
    (like) => like.blogId === blogId
  );

  const { mutate: addCommentBlog, isLoading: isLoadingAddCommentBlog } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_COMMENT_BLOG, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        setCommentText("");
        queryClient.invalidateQueries("getCommentsBlog");
      },
      onError: () => {
        console.log("error");
      },
    }
  );
  // ==================== add bookmark ====================
  const { mutate: bookMarkBlog } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_BOOKMARK_BLOG, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getBookmarks");
        queryClient.invalidateQueries("getSavedBlogCurrentUser");
      },
    }
  );

    // ==================== remove bookmark ====================
  const { mutate: unBookMarkBlog } = useMutation(
    () =>
      axios.delete(API_ENDPOINT.DELETE_BOOKMARK_BLOG, {
        withCredentials: true,
        data: {
          userId: JSON.parse(localStorage.getItem("auth_user")).id,
          postId: postId,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getBookmarks");
        queryClient.invalidateQueries("getSavedBlogCurrentUser");
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

    // ==================== add like ====================
  const { mutate: likeBlog } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_LIKE_BLOG, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        console.log("success");
        queryClient.invalidateQueries("getLikesBlogCurrentUser");
        queryClient.invalidateQueries("getSingleBlog");
      },
    }
  );

  // ==================== remove like ====================
  const { mutate: unlikeBlog } = useMutation(
    () =>
      axios.delete(API_ENDPOINT.DELETE_LIKE_BLOG, {
        withCredentials: true,
        data: {
          userId: JSON.parse(localStorage.getItem("auth_user")).id,
          blogId: blogId,
        },
      }),
    {
      onSuccess: () => {

        // secara reaktif mengupdate data dengan nama query setelah melakukan mutation
        queryClient.invalidateQueries("blog");
        queryClient.invalidateQueries("getLikesBlogCurrentUser");
        queryClient.invalidateQueries("getSingleBlog");
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

  // ==================== function bookmark ====================
  const handleBookmark = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: postId,
    };

    // ini untuk memanggil function mutation
    bookMarkBlog(payload);
  };

  // ==================== function unbookmark ====================
  const handleUnBookmark = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: postId,
    };

    // ini untuk memanggil function mutation dari unbookmark
    unBookMarkBlog(payload);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const payload = {
      comment: commentText,
      blogId: blogId,
    };
    addCommentBlog(payload);
  };

  const handleLike = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      blogId: blogId,
    };
    likeBlog(payload);
  };

  const handleUnlike = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      blogId,
    };
    unlikeBlog(payload);
  };

  if (isLoading) return <h1>Loading...</h1>;

  const {
    title,
    createdAt,
    body,
    bannerImg,
    likedCount,
    savedCount,
  } = data.data.blog;
  const createdDate = new Date(createdAt).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { name, avatarImg } = data.data.blog.author;

  if (isError) return <h1>Error</h1>;

  return (
    <article className="border">
      <div className="p-6 md:p-10 flex">
        <img
          className="h-16 w-16 object-cover rounded-full mr-4"
          alt="Photo Profile"
          src={avatarImg}
        />
        <div className="w-full">
          <h1 className="text-lg font-medium text-gray-900">
            {title}
          </h1>
          <h2 className="text-md font-normal text-gray-600">
            Diposting oleh: {name}
          </h2>
          <h3 className="text-xs font-normal text-gray-400">
            {createdDate}
          </h3>

          <p className="my-4  text-sm/relaxed text-gray-500">
            {body}
          </p>

          {bannerImg && (
            <img
              className="w-full object-cover rounded-md"
              alt=""
              src={bannerImg}
            />
          )}
        </div>
      </div>
      <div className="p-6 md:p-10 flex gap-6">
        {isLiked ? (
          <div className="flex gap-1">
          <MdFavorite
            onClick={handleUnlike}
            className="cursor-pointer text-red-700 text-2xl transform motion-safe:hover:scale-110"
          />
          {likedCount}
          </div>
        ) : (
          // <span onClick={handleUnlike}>Liked</span>
          <div className="flex gap-1">
          <MdFavoriteBorder
            onClick={handleLike}
            className="cursor-pointer text-2xl transform motion-safe:hover:scale-110"
          />
          {likedCount}
          </div>
        )}
        {isSaved ? (
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
          <div className="flex gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Hapus
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Edit
            </button>
          </div>
        )}
      </div>

      {/* form komentar */}
      <form onSubmit={handleAddComment} className="p-4 sm:p-6 flex  ">
        <img
          className="h-12 w-12 object-cover rounded-full mr-4"
          alt="Photo Profile"
          src={avatarImg}
        />
        <div className="flex w-full">
          <input
            type="text"
            id="UserComment"
            placeholder="Masukan komentar Anda"
            className="mt-1 ml-1.5 w-full h-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            type="submit"
            className="text-3xl ml-5 mt-3 transform motion-safe:hover:scale-110"
          >
            {isLoadingAddCommentBlog ? "Loading..." : <MdSend />} 
          </button>
        </div>
      </form>

      <Comment postId={postId} />
    </article>
  );
};

export default DetailBlog;
