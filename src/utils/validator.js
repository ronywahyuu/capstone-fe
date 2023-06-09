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

  registerDataSchema: yup.object({
    name: yup
     .string()
     .required(["Nama harus diisi!"]),
    email: yup
      .string()
      .required(["Email harus diisi!"])
      .email("Email tidak valid!"),
    password: yup
      .string()
      .required(["Password harus diisi!"]),
    password_confirmation: yup
      .string()
      .required(["Konfirmasi Password harus diisi!"])
  }),

};

export default INPUT_VALIDATOR;
