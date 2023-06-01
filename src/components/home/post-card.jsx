import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ content }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm my-6 mr-60">
  <div className="p-4 sm:p-6 flex">
    <img
      className="h-16 w-16 object-cover rounded-full mr-4"
      alt="Photo Profile"
      src="../../public/profile.png"
    />
    <div>
      <h1 className="text-lg font-medium text-gray-900">{content}</h1>
      <h2 className="text-xs font-normal text-gray-400">
        Jumat, 12 Desember 2012
      </h2>

      <p className="my-4 line-clamp-3 text-sm/relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>

      <img className="h-56 w-full object-cover" alt="" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>

      <div className="sm:flex sm:items-end sm:justify-end">
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
  content: PropTypes.string,
};

export default PostCard;
