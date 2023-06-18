import PropTypes from "prop-types";

const Comments = ({ comment, isLoading }) => {
  const formattedDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="mb-3 mx-10">
      <div className="overflow rounded-lg border border-gray-100 bg-white shadow-sm ">
        <div className="p-4 sm:p-6 flex">
          <img
            className="h-12 w-12 object-cover rounded-full mr-4"
            alt="Photo Profile"
            src={comment.author.avatarImg}
          />
          <div className=" w-full">
            <h2 className="text-base font-medium text-gray-900">
              {comment.author.name}
            </h2>
            <h3 className="text-xs font-normal text-gray-400">
              {formattedDate(comment.createdAt)}
            </h3>

            <p className="my-4 w-full text-sm/relaxed text-gray-500">
              {comment.comment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Comments.propTypes = {
  comment: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Comments;
