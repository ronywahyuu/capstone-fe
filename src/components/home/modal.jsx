/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { QueryClient, useMutation, useQuery } from "react-query";
import useStore from "../../store";
import { useForm } from "react-hook-form";
import USER_API from "../../api/user-api";
import axios from "axios";
import API_ENDPOINT from "../../globals/api-endpoint";

const Modal = () => {
  // const [showModal, setShowModal] = useState(false);
  const { showModal, setShowModal } = useStore();

  // edit profile form
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    // remove value from input
    unregister(["name", "email", "password", "imgFile"])
    // unregister("name");
    // unregister("email");
    // unregister("password");
    // unregister("imgFile");
    setShowModal();
  };

  const userId = JSON.parse(localStorage.getItem("auth_user")).id;
  // mutation to edit profile
  const { mutate: editProfile, isLoading } = useMutation(
    (payload) =>
      axios.put(API_ENDPOINT.UPDATE_USER(userId), payload, {
        withCredentials: true,
      }),
    {
      onSuccess: (data) => {
        console.log(data);
        if (data.error) {
          return;
        }

        window.location.reload();

        setShowModal(false);
      },
    }
  );

  const onSubmitEdit = (values) => {
    // return only value that has been changed
    const payload = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v !== "")
    );

    // // handle image
    if (payload?.imgFile[0] !== undefined) {
      const imgName = payload.imgFile[0].name;
      const imgNameSplit = imgName.split(".");
      const imgNameExt = imgNameSplit[imgNameSplit.length - 1];
      const imgNameWithoutExt = imgNameSplit[0];
      const imgNameFinal = `${imgNameWithoutExt}-${Date.now()}.${imgNameExt}`;

      const formData = new FormData();
      formData.append("name", payload.name);
      formData.append("email", payload.email);
      formData.append("imgFile", payload.imgFile[0], imgNameFinal);

      editProfile(formData);
      return
    }

    delete payload.imgFile;
    localStorage.setItem("auth_user", JSON.stringify({
      ...JSON.parse(localStorage.getItem("auth_user")),
      ...payload
    }));
    editProfile(payload);
  };

  const renderModal = showModal && (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      overflow-x-hidden
      overflow-y-auto
      outline-none
      focus:outline-none
      bg-gray-500
      bg-opacity-75
    "
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl font-semibold">Edit Profile</h3>
            <button
              onClick={closeModal}
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            {/* form to edit profile */}
            <form
              onSubmit={handleSubmit(onSubmitEdit)}
              className="flex flex-col gap-4"
            >
              <div>
                <label
                  htmlFor="UserEmail"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="UserEmail"
                  placeholder="john@rhcp.com"
                  defaultValue={JSON.parse(localStorage.getItem("auth_user")).email}
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  {...register("email")}
                />
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="block text-xs font-medium text-gray-700"
                >
                  Nama
                </label>

                <input
                  type="text"
                  id="Name"
                  placeholder="john@rhcp.com"
                  defaultValue={JSON.parse(localStorage.getItem("auth_user")).name}
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  {...register("name")}
                />
              </div>
              <div>
                <label
                  htmlFor="Profession"
                  className="block text-xs font-medium text-gray-700"
                >
                  Profesi
                </label>

                <input
                  type="text"
                  id="Profession"
                  defaultValue={JSON.parse(localStorage.getItem("auth_user")).profession}
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  {...register("profession")}
                />
              </div>
              <div>
                <label
                  htmlFor="Password"
                  className="block text-xs font-medium text-gray-700"
                >
                  Password Baru
                </label>

                <input
                  type="password"
                  id="Password"
                  placeholder="********"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  {...register("password")}
                />
              </div>
              <div>
                <label
                  htmlFor="ProfilePict"
                  className="block text-xs font-medium text-gray-700"
                >
                  Foto Profil
                </label>

                <input type="file" id="ProfilePict" {...register("imgFile")} />
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end pt-4 border-t border-solid border-gray-300 rounded-b">
                <button
                  onClick={closeModal}
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Tutup
                </button>
                <button
                  className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  {isLoading ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return renderModal;
};

export default Modal;
