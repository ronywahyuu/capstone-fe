import {
  MdFavoriteBorder,
  MdTurnedInNot,
  MdBookmark,
  MdOutlineShare,
  MdSend,
  MdFavorite
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";
import Comment from "../components/home/comment";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const DetailPage = () => {
  const params = useParams();
  const [commentText, setCommentText] = useState("");

  const queryClient = useQueryClient();

  // ambil id user dari local storage
  const userId = JSON.parse(localStorage.getItem("auth_user")).id;
  // get saved by current user
  const {data: getSavedData} = useFetch("getSavedCurrentUser", () =>
    axios.get("http://localhost:8080/api/v1/saved?userId=" + userId, {
      withCredentials: true,
    })
  );

  // get likes by current user
  const {data: getLikesDataByCurrentUser} = useFetch("getLikesCurrentUser", () =>
    axios.get("http://localhost:8080/api/v1/likes/donasi?userId=" + userId, {
      withCredentials: true,
    })
  );

  // compare saved data with current post
  const isSaved = getSavedData?.data?.data?.some(
    (saved) => saved.postId === params.id
  );

  // compare likes data with current post
  const isLiked = getLikesDataByCurrentUser?.data?.like?.some(
    (like) => like.postId === params.id
  );

  console.log({ isLiked });

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


  // mutation untuk bookmark post
  const { mutate: bookMarkPost } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_BOOKMARK_DONASI, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        console.log("success");
        queryClient.invalidateQueries("getBookmarks");
        queryClient.invalidateQueries("getSavedCurrentUser");
      },
    }
  );

  // mutation untuk batal bookmark post
  const { mutate: unBookMarkPost } = useMutation(
    () =>
      axios.delete("http://localhost:8080/api/v1/saved", {
        withCredentials: true,
        data: {
          userId: JSON.parse(localStorage.getItem("auth_user")).id,
          postId: params.id,
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

  // mutation untuk like post
  const { mutate: likePost } = useMutation(
    (payload) =>
      axios.post("http://localhost:8080/api/v1/likes/donasi", payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        console.log("success");
        queryClient.invalidateQueries("getLikesCurrentUser");
      },
    }
  );

  // mutation untuk unlike post
  const { mutate: unlikePost } = useMutation(
    () =>
      axios.delete("http://localhost:8080/api/v1/likes/donasi", {
        withCredentials: true,
        data: {
          userId: JSON.parse(localStorage.getItem("auth_user")).id,
          postId: params.id,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getLikesCurrentUser");
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

  // fungsi untuk memasukkan post ke bookmark
  const handleBookmark = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: params.id,
    };

    // ini untuk memanggil function mutation
    bookMarkPost(payload);
  };

  // fungsi untuk menghapus post dari bookmark
  const handleUnBookmark = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: params.id,
    };

    // ini untuk memanggil function mutation dari unbookmark
    unBookMarkPost(payload);
  };

  // get detail post
  const { isLoading, data } = useQuery("getSingleDonasi", () =>
    axios.get(API_ENDPOINT.SINGLE_DONASI(params.id))
  );

  // jangan tampilkan apapun jika loading
  if (isLoading) return;

  const { title, createdAt, description, linkForm, bannerImg } = data.data.post;
  const createdDate = new Date(createdAt).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { name, avatarImg } = data.data.post.author;

  const handleAddComment = (e) => {
    e.preventDefault();
    const payload = {
      comment: commentText,
      postId: params.id,
    };
    addComment(payload);
  };

  const handleLike = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: params.id,
    };
    likePost(payload);
  };

  const handleUnlike = () => {
    const payload = {
      userId: JSON.parse(localStorage.getItem("auth_user")).id,
      postId: params.id,
    };
    unlikePost(payload);
  };

  return (
    <article className="">
      <div className="p-6 md:py-10 md:px-20 flex">
        <img
          className="h-16 w-16 object-cover rounded-full mr-4"
          alt="Photo Profile"
          src={avatarImg}
        />
        <div>
          <h1 className="text-lg font-medium text-gray-900">{title}</h1>
          <h2 className="text-md font-normal text-gray-600">
            Diposting oleh: {name}
          </h2>
          <h3 className="text-xs font-normal text-gray-400">{createdDate}</h3>

          <p className="my-4  text-sm/relaxed text-gray-500">{description}</p>

          <a className="text-s underline font-normal text-cyan-500 hover:text-cyan-700" href={linkForm} target="_blank" rel="noreferrer">{linkForm}</a>

          {bannerImg && (
            <img
              className="h-56 w-full object-cover rounded-md"
              alt=""
              src={bannerImg}
            />
          )}
        </div>
      </div>
      <div className="p-4 ml-16 sm:p-6 flex gap-6">
        {isLiked ? (
          <MdFavorite
            onClick={handleUnlike}
            className="cursor-pointer text-red-700 text-2xl transform motion-safe:hover:scale-110"
          />
          // <span onClick={handleUnlike}>Liked</span>
        ) : (
          <MdFavoriteBorder
            onClick={handleLike}
            className="cursor-pointer text-2xl transform motion-safe:hover:scale-110"
          />
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
            {isLoadingAddComment ? "Loading..." : <MdSend />}
          </button>
        </div>
      </form>

      <Comment postId={params.id} />
    </article>
  );
};

export default DetailPage;
