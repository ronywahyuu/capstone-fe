import {
  MdFavoriteBorder,
  MdTurnedInNot,
  MdBookmark,
  MdOutlineShare,
  MdSend,
  MdFavorite,
} from "react-icons/md";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import API_ENDPOINT from "../../../globals/api-endpoint";
import Comment from "../comment";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import useGetUser from "../../../hooks/useGetUser";
import { Navigate, useNavigate } from "react-router-dom";

const DetailPost = ({ postId, userId }) => {
  const [commentText, setCommentText] = useState("");

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // const userId = JSON.parse(localStorage.getItem("auth_user")).id;
  const { isLoading, data, isError } = useQuery("getSingleDonasi", () =>
    axios.get(API_ENDPOINT.SINGLE_DONASI(postId))
  );

  // ==================== get saved by current user ====================
  const { data: getSavedData } = useFetch("getSavedCurrentUser", () =>
    axios.get(API_ENDPOINT.GET_CURRENT_USER_BOOKMARK_DONASI(userId), {
      withCredentials: true,
    })
  );

  // ==================== get likes by current user ====================
  const { data: getLikesDataByCurrentUser } = useFetch(
    "getLikesCurrentUser",
    () =>
      axios.get(API_ENDPOINT.GET_CURRENT_USER_LIKE_DONASI(userId), {
        withCredentials: true,
      })
  );

  // ==================== check if this post is mine ====================
  const user = useGetUser(userId, "getUserForDetailDonasi");
  // console.log(user?.data?.postDonasi.map((post) => post.id).includes(postId));
  const isMine = user?.data?.postDonasi.map((post) => post.id).includes(postId);

  // if(isMine){
  //   console.log("isMine");
  // }

  // g
  // ==================== compare saved data with current post ====================
  const isSaved = getSavedData?.data?.data?.some(
    (saved) => saved.postId === postId
  );

  // compare likes data with current post
  const isLiked = getLikesDataByCurrentUser?.data?.like?.some(
    (like) => like.postId === postId
  );

  const { mutate: addComment, isLoading: isLoadingAddComment } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_COMMENT, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        setCommentText("");
        queryClient.invalidateQueries("getComments");
      },
      onError: () => {
        console.log("error");
      },
    }
  );

  // ==================== add bookmark ====================
  const { mutate: bookMarkPost } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_BOOKMARK_DONASI, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getBookmarks");
        queryClient.invalidateQueries("getSavedCurrentUser");
      },
    }
  );

  // ==================== remove bookmark ====================
  const { mutate: unBookMarkPost } = useMutation(
    () =>
      axios.delete(API_ENDPOINT.DELETE_BOOKMARK_DONASI, {
        withCredentials: true,
        data: {
          userId: JSON.parse(localStorage.getItem("auth_user")).id,
          postId: postId,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getBookmarks");
        queryClient.invalidateQueries("getSavedCurrentUser");
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

  // ==================== add like ====================
  const { mutate: likePost } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_LIKE_DONASI, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        console.log("success");
        queryClient.invalidateQueries("getLikesCurrentUser");
        queryClient.invalidateQueries("getSingleDonasi");
      },
    }
  );

  // ==================== remove like ====================
  const { mutate: unlikePost } = useMutation(
    () =>
      axios.delete(API_ENDPOINT.DELETE_LIKE_DONASI, {
        withCredentials: true,
        data: {
          userId: JSON.parse(localStorage.getItem("auth_user")).id,
          postId: postId,
        },
      }),
    {
      onSuccess: () => {

        // secara reaktif mengupdate data dengan nama query setelah melakukan mutation
        queryClient.invalidateQueries("donasi");
        queryClient.invalidateQueries("getLikesCurrentUser");
        queryClient.invalidateQueries("getSingleDonasi");
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

  // ==================== delete post ====================
  const { mutate: deletePost } = useMutation(
    () => axios.delete(API_ENDPOINT.DELETE_DONASI(postId), {
      withCredentials: true,
    }),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries("donasi");
        queryClient.invalidateQueries("getSingleDonasi");
        queryClient.invalidateQueries("getUserForDetailDonasi");

        navigate("/home/timeline");
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
    bookMarkPost(payload);
  };

  // ==================== function unbookmark ====================
  const handleUnBookmark = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: postId,
    };

    // ini untuk memanggil function mutation dari unbookmark
    unBookMarkPost(payload);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const payload = {
      comment: commentText,
      postId: postId,
    };
    addComment(payload);
  };

  const handleLike = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: postId,
    };
    likePost(payload);
  };

  const handleUnlike = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId,
    };
    unlikePost(payload);
  };

  const handleDeletePost = () => {
    // alert confirmation
    const confirmation = window.confirm("Are you sure want to delete this post?");
    if (confirmation){
      deletePost();
      alert("Post deleted successfully");
    }
  }

  const handleEditPost = () => {
    navigate(`/home/timeline/edit/${postId}`);
  }

  // console.log({postId})
  if (isLoading) return <h1>Loading...</h1>;

  const {
    title,
    createdAt,
    description,
    linkForm,
    bannerImg,
    likedCount,
    savedCount,
  } = data.data.post;
  const createdDate = new Date(createdAt).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { name, avatarImg } = data.data.post.author;

  // console.log(name)

  if (isError) return <h1>Error</h1>;
  return (
    <article className="border">
      <div className="p-6 md:p-10  flex ">
        <img
          className="h-16 w-16 object-cover rounded-full mr-4"
          alt="Photo Profile"
          src={avatarImg}
        />
        <div className="w-full">
          <h1 className="text-lg font-medium text-gray-900">{title}</h1>
          <h2 className="text-md font-normal text-gray-600">
            Diposting oleh: {name}
          </h2>
          <h3 className="text-xs font-normal text-gray-400">{createdDate}</h3>

          <p className="my-4  text-sm/relaxed text-gray-500">{description}</p>

          <a
            className="text-sm md:text-base underline font-normal text-cyan-500 hover:text-cyan-700"
            href={linkForm}
            target="_blank"
            rel="noreferrer"
          >
            {linkForm}
          </a>

          {bannerImg && (
            <img
              className=" w-full object-cover rounded-md"
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
            <button onClick={handleEditPost}>Edit</button>
            <button onClick={handleDeletePost}>Hapus</button>
          </div>
        )}
      </div>

      {/* form komentar */}
      <form onSubmit={handleAddComment} className="p-4 sm:p-6 flex ">
        <img
          className="h-12 w-12 object-cover rounded-full mr-4"
          alt="Photo Profile"
          src={avatarImg}
        />
        <div className="flex  w-full">
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
            {isLoadingAddComment ? "Loading..." : <MdSend />}
          </button>
        </div>
      </form>

      <Comment postId={postId} />
    </article>
  );
};

export default DetailPost;
