import * as yup from "yup";

export const loginSchema = yup.object().shape({
  id: yup.string().required("Id is required"),
  password: yup.string().min(6).max(32).required(),
});
