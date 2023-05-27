import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ content }) => {
  return (
    <div className="border my-3">
      <h1>{content}</h1>
      <Link to="/home/timeline/12" className="text-blue-800">
        Read More
      </Link>
    </div>
  );
};

PostCard.propTypes = {
  content: PropTypes.string,
};

export default PostCard;
