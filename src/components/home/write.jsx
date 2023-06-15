import axios from "axios";
import API_ENDPOINT from "../../globals/api-endpoint";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
const WritePost = () => {
  const location = useLocation();
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // mutation for submit data
  const { mutate: addDonasi, isLoading } = useMutation(
    (payload) =>
      axios.post(API_ENDPOINT.CREATE_DONASI, payload, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        navigate("/home/timeline");
        queryClient.invalidateQueries("donasi");
      },
      onError: (error) => {
        // console.log(error.response.data);
        alert(error.response.data.message);
      }
    }
  );

  // mutation for submit blog
  const { mutate: addBlog } = useMutation(
    (payload) =>
      axios.post(
        API_ENDPOINT.CREATE_BLOG,
        payload,
        { withCredentials: true }
      ),
    {
      onSuccess: () => {
        console.log("success");
        navigate("/home/blog");
        queryClient.invalidateQueries("blog");
      },
      onError: (error) => {
        alert(error.response.data.message);
      }
    }
  );

  // ==================== JSX conditional render for post donasi ====================
  if (location.pathname === "/home/timeline/write") {
    // handle submit and upload file
    const onSubmit = (data) => {
      // console.log(data)
      const { imgFile } = data;

      if (imgFile[0] === undefined) {
        const formDataWithoutImg = new FormData();
        formDataWithoutImg.append("title", data.title);
        formDataWithoutImg.append("description", data.description);
        formDataWithoutImg.append("linkForm", data.linkForm);

        addDonasi(formDataWithoutImg);
      }

      // generate picture name
      const imgName = imgFile[0].name;
      const imgNameSplit = imgName.split(".");
      const imgNameExt = imgNameSplit[imgNameSplit.length - 1];
      const imgNameWithoutExt = imgNameSplit[0];
      const imgNameFinal = `${imgNameWithoutExt}-${Date.now()}.${imgNameExt}`;
      // console.log(imgNameFinal)

      // handle img
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("linkForm", data.linkForm);
      // image
      formData.append("imgFile", imgFile[0], imgNameFinal);

      // console.log(imgFile[0])
      addDonasi(formData);
    };
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h4 className="text-center text-lg font-medium sm:text-2xl">
            Buat Donasi
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-0 mt-4 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-t-4 border-cyan-500"
          >
            <div>
              <label className="sr-only">Judul</label>
              <div className="relative">
                <input
                  className={`w-full rounded-lg border-gray-200 ${
                    errors.title && "border-red-500"
                  } p-4 pe-12 text-sm shadow-sm`}
                  placeholder="Judul"
                  type="text"
                  id="judul"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="absolute text-red-500 text- inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    Isi kolom ini
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="sr-only">Deskripsi</label>
              <div className="relative">
                <textarea
                  className={`w-full rounded-lg border-gray-200 ${
                    errors.title && "border-red-500"
                  } p-4 pe-12 text-sm shadow-sm`}
                  placeholder="Deskripsi"
                  rows="1"
                  id="deskripsi"
                  {...register("description", { required: true })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="input-link" className="sr-only">
                Input Link
              </label>
              <div className="relative">
                <input
                  className={`w-full rounded-lg border-gray-200 ${
                    errors.title && "border-red-500"
                  } p-4 pe-12 text-sm shadow-sm`}
                  placeholder="Input Link"
                  type="text"
                  id="input-link"
                  {...register("linkForm", { required: true })}
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Upload file</label>
              <div className="relative">
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Upload File"
                  type="file"
                  id="upload-file"
                  {...register("imgFile")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
            >
              {isLoading ? "Memposting..." : "Kirim"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (location.pathname === "/home/blog/write") {
    // handle submit and upload file
  const onSubmitBlog = (data) => {
    // const payload = {
    //   title: data.title,
    //   body: data.body,

    // }
    // console.log(payload)
    const { imgFile } = data;

    if (imgFile[0] === undefined) {
      const formDataWithoutImg = new FormData();
      formDataWithoutImg.append("title", data.title);
      formDataWithoutImg.append("body", data.body);
      // formDataWithoutImg.append("linkForm", data.linkForm);

      addBlog(formDataWithoutImg);
    }

    // generate picture name
    const imgName = imgFile[0].name;
    const imgNameSplit = imgName.split(".");
    const imgNameExt = imgNameSplit[imgNameSplit.length - 1];
    const imgNameWithoutExt = imgNameSplit[0];
    const imgNameFinal = `${imgNameWithoutExt}-${Date.now()}.${imgNameExt}`;
    // console.log(imgNameFinal)

    // handle img
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    // formData.append("linkForm", data.linkForm);
    // image
    formData.append("imgFile", imgFile[0], imgNameFinal);

    // console.log(imgFile[0])
    // addDonasi(formData);
    addBlog(formData);
  };
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h4 className="text-center text-lg font-medium sm:text-2xl">
            Buat Blog
          </h4>

          <form
            onSubmit={handleSubmit(onSubmitBlog)}
            className="mb-0 mt-4 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-t-4 border-cyan-500"
          >
            <div>
              <label className="sr-only">Judul</label>
              <div className="relative">
                <input
                  className={`w-full rounded-lg border-gray-200 ${
                    errors.title && "border-red-500"
                  } p-4 pe-12 text-sm shadow-sm`}
                  placeholder="Judul"
                  type="text"
                  id="judul"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="absolute text-red-500 text- inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    Isi kolom ini
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="sr-only">Deskripsi</label>
              <div className="relative">
                <textarea
                  className={`w-full rounded-lg border-gray-200 ${
                    errors.title && "border-red-500"
                  } p-4 pe-12 text-sm shadow-sm`}
                  placeholder="Deskripsi"
                  rows="1"
                  id="deskripsi"
                  {...register("body", { required: true })}
                />
              </div>
            </div>


            <div>
              <label className="sr-only">Upload file</label>
              <div className="relative">
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Upload File"
                  type="file"
                  id="upload-file"
                  {...register("imgFile")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
            >
              {isLoading ? "Memposting..." : "Kirim"}
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default WritePost;
