import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import USER_API from "../../api/user-api";
import useStore from "../../store";
const LoginPage = () => {
  const store = useStore();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API login Mutation
  const { mutate: loginUser, isLoading } = useMutation(
    (userData) => USER_API.loginFn(userData),
    {
      onMutate: () => {
        store.setLoading(true);
      },
      onSuccess: async (data) => {
        store.setLoading(false);
        localStorage.setItem("auth_user", JSON.stringify(data.data.user));
        navigate("/home/timeline");
      },
      onError: (error) => {
        store.setLoading(false);
        console.log(error);
      },
    }
  );

  const onSubmit = (values) => {
    loginUser(values);
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <img
          src="./logo.svg"
          alt="Logo Toghetherboost Apps"
          className="ml-28 mb-6"
        />
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-5xl">Selamat Datang!</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Masukan email"
                {...register("email", {
                  required: "Email tidak boleh kosong",
                })}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Masukan password"
                {...register("password", {
                  required: "Password tidak boleh kosong",
                })}
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <div className="">
            <p className="text-sm text-center text-gray-500">
              Belum Punya Akun?
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-slate-700 px-5 py-3 font-medium text-white "
            >
              Daftar
            </button>
          </div>
        </form>
      </div>

      <div className="relative bg-cyan-500 h-64 w-full sm:h-96 lg:h-full lg:w-1/2 flex flex-col justify-center items-center">
        <img
          alt="Welcome"
          src="./lives-matter.png"
          className="absolute inset-0 object-cover"
        />
        <p className="mt-64 text-white text-center text-2xl font-bold sm:text-6xl">
          Berbagi donasi untuk bantu pendidikan!
        </p>
      </div>
    </section>
  );
};
export default LoginPage;
