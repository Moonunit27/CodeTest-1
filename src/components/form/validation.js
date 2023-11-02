import * as Yup from "yup";
import validationMessagesEn from "../../locales/en.json";
import validationMessagesNo from "../../locales/no.json";


const validationSchema = Yup.object({
  name: Yup.string().required("error-required"),
  email: Yup.string()
    .email("error-invalid-email")
    .required("error-required"),
  street: Yup.string().required("error-required"),
  city: Yup.string().required("error-required"),
  postalCode: Yup.string().required("error-required"),
  country: Yup.string().required("error-required"),
});

export default validationSchema;
