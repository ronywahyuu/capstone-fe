import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

const PostCard = ({ content }) => {
  const location = useLocation();
  const savedLocation = location.pathname.includes("saved");
  console.log(content)
  const {
    title,
    description,
    createdAt,
    bannerImg,
    author,
    likedCount,
    commentsCount,
  } = content;
  const createdDate = new Date(
    savedLocation ? content?.post.createdAt : createdAt
  ).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const avatarImg = author?.avatarImg;
  const name = author?.name;
  // const { avatarImg, name } = author;

  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm my-6 ">
      <div className="p-4 sm:p-6 ">
        <div className="flex  relative">
          {location.pathname !== "/home/saved" && (
            <img
              className="h-16 w-16 object-cover rounded-full mr-4"
              alt="Photo Profile"
              src={avatarImg}
            />
          )}

          <div>
            <h1 className="text-lg font-medium text-gray-900">{
              savedLocation ? content?.post.title : title
            }</h1>
            <p className="text-xs font-normal text-gray-400">
              {/* Jumat, 12 Desember 2012 */}
              {createdDate}
            </p>
            <span className="text-xs font-normal text-gray-400">
              Diposting oleh : {savedLocation ? "Anda" : name}
            </span>
          </div>

          <BsBookmark className="absolute right-0 text-xl" />
        </div>
        <div>
          <p className="my-4 line-clamp-3 text-sm/relaxed text-gray-500 ">
            {
              savedLocation ? content?.post.description : description
            }
          </p>

          {bannerImg && (
            <img
              className="h-56 w-full object-cover my-5"
              alt=""
              src={bannerImg}
            />
          )}

          <div className=" sm:flex justify-between items-center">
            <div className="flex gap-5 mb-5 md:mb-0" aria-label="action button">
              <div className="flex">
                <AiOutlineLike className="text-xl" />
                <span className="text-sm text-gray-700">{likedCount}</span>
              </div>
              <div className="flex">
                <AiOutlineComment className="text-xl" />
                <span className="text-sm text-gray-700">{commentsCount}</span>
              </div>
            </div>
            <Link
              to="/home/timeline/12"
              className="block bg-cyan-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-cyan-700"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

PostCard.propTypes = {
  content: PropTypes.object,
};

export default PostCard;
