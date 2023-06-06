import { useNavigate } from "react-router-dom";
import useStore from "../store";
import { useMutation } from "react-query";
import USER_API from "../api/user-api";

const useAuth = (authFn) => {
  const store = useStore();
  const navigate = useNavigate();

  const navigateLocation = () => {
    if (authFn === "login") {
      navigate("/home/timeline");
    }
    if (authFn === "register") {
      navigate("/login");
    }
  };
  // API login or register mutation, use authFn as parameter
  const { mutate: authUser, isLoading } = useMutation(
    (userData) => USER_API.loginFn(userData),
    {
      onMutate: () => {
        store.setLoading(true);
      },
      onSuccess: async (data) => {
        store.setLoading(false);
        localStorage.setItem("auth_user", JSON.stringify(data.data.user));
        navigateLocation();
      },
      onError: (error) => {
        store.setLoading(false);
        console.log(error);
      },
    }
  );

  return { authUser, isLoading };
};

export default useAuth;
