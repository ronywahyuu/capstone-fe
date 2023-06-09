import axios from "axios";
import API_ENDPOINT from "../../globals/api-endpoint";
import PropTypes from "prop-types";
import {  useQuery } from "react-query";

const Comment = ({ postId }) => {
  // get comments
  const { isLoading: isLoadingComments, data: comments } = useQuery(
    "getComments",
    () => axios.get(API_ENDPOINT.GET_COMMENT_DONASI(postId))
  );



  if (isLoadingComments) return;

  const commentsElement = comments.data.comments.map((comment) => {
    return (
      <section key={comment.id} className="mb-3">
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm mx-40">
          <div className="p-4 sm:p-6 flex">
            <img
              className="h-12 w-12 object-cover rounded-full mr-4"
              alt="Photo Profile"
              src={comment.author.avatarImg}
            />
            <div>
              <h2 className="text-base font-medium text-gray-900">
                {comment.author.name}
              </h2>
              <h3 className="text-xs font-normal text-gray-400">
                Jumat, 12 Desember 2012
              </h3>

              <p className="my-4 w-full text-sm/relaxed text-gray-500">
                {comment.comment}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  });

  const renderComment =
    comments.data.comments.length !== 0 ? (
      commentsElement
    ) : (
      <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm mx-40">
        <div className="p-4 sm:p-6 flex">
          <div>
            <h2 className="text-base font-medium text-gray-900">
              Belum ada komentar
            </h2>
          </div>
        </div>
      </div>
    );

  return renderComment;
};

Comment.propTypes = {
  postId: PropTypes.string,
};

export default Comment;
