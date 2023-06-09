import * as yup from "yup";
const INPUT_VALIDATOR = {
  loginDataSchema: yup.object({
    email: yup
      .string()
      .required(["Email harus diisi!"])
      .email("Email tidak valid!"),
    password: yup
      .string()
      .required(["Password harus diisi!"])
  }),


};

export default INPUT_VALIDATOR;
