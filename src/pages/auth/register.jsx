import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import USER_API from "../../api/user-api";
import useStore from "../../store";

const RegisterPage = () => {
  const store = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API register mutation
  const { mutate: registerUser, isLoading } = useMutation(
    (userData) => USER_API.registerFn(userData),
    {
      onMutate: () => {
        store.setLoading(true);
      },
      onSuccess: async (data) => {
        store.setLoading(false);
        localStorage.setItem("auth_user", JSON.stringify(data.user));
        navigate("/login");
      },
      onError: (error) => {
        store.setLoading(false);
        console.log(error);
      },
    }
  );

  const onSubmit = (values) => {
    if (values.password !== values.password_confirmation) {
      alert('password tidak sama')
      return;
      }
    // eslint-disable-next-line no-unused-vars
    const { password_confirmation, ...userData } = values;
    registerUser(userData);

  
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <img
              src="./public/logo.svg"
              alt="Logo Toghetherboost Apps"
              className="mb-6"
            />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Selamat Datang
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="FullName" className="block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  id="FullName"
                  name="name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  {...register("name", {
                    required: "Nama tidak boleh kosong",
                  })}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  {...register("email", {
                    required: "Email tidak boleh kosong",
                  })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  {...register("password", {
                    required: "Password tidak boleh kosong",
                  })}
                />
                {errors.password && (
                  <span className="text-red-600">{errors.password.message}</span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Konfirmasi Password
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  {...register("password_confirmation", {
                    required: "Konfirmasi Password tidak boleh kosong",
                  })}
                />
                {errors.password_confirmation && (
                  <span className="text-red-600">{errors.password_confirmation.message}</span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-cyan-600 bg-cyan-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Daftar"}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Sudah punya akun?
                  <a href="/login" className="text-cyan-700 underline ml-2">
                    Log in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default RegisterPage;
