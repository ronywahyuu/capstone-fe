import { MdFavoriteBorder, MdTurnedInNot, MdChatBubbleOutline, MdOutlineShare, MdSend } from "react-icons/md";

const DetailPage = ({ content }) => {
  return (
    <article>
    <div className="p-4 sm:p-6 flex">
    <img
      className="h-16 w-16 object-cover rounded-full mr-4"
      alt="Photo Profile"
      src="../../public/profile.png"
    />
    <div>
      <h1 className="text-lg font-medium text-gray-900">{content}</h1>
      <h2 className="text-lg font-semibold text-gray-900">
        John Doe
      </h2>
      <h3 className="text-xs font-normal text-gray-400">
        Jumat, 12 Desember 2012
      </h3>

      <p className="my-4 line-clamp-3 text-sm/relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>

      <img className="h-56 w-full object-cover" alt="" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
    </div>
  </div>
  <div className="p-4 ml-16 sm:p-6 flex gap-6">
    <MdFavoriteBorder className="text-2xl transform motion-safe:hover:scale-110" />
    <MdChatBubbleOutline className="text-2xl transform motion-safe:hover:scale-110" />
    <MdOutlineShare className="text-2xl transform motion-safe:hover:scale-110" />
    <MdTurnedInNot className="text-2xl transform motion-safe:hover:scale-110" />
  </div>

  <div className="p-4 ml-16 sm:p-6 flex">
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
        />
        <MdSend className="text-3xl ml-5 mt-3 transform motion-safe:hover:scale-110" />
    </div>
  </div>

  <section className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm mx-40">
  <div className="p-4 sm:p-6 flex">
    <img
      className="h-12 w-12 object-cover rounded-full mr-4"
      alt="Photo Profile"
      src="../../public/profile.png"
    />
    <div>
      <h2 className="text-base font-medium text-gray-900">
        John Doe
      </h2>
      <h3 className="text-xs font-normal text-gray-400">
        Jumat, 12 Desember 2012
      </h3>

      <p className="my-4 w-full text-sm/relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
    </div>
    </div>
  </section>
    </article>
  );
};

export default DetailPage;