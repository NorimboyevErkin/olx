import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registerYup = yup.object().shape({
  email: yup.string().email().required("No email address."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const productYup = yup.object().shape({
  title: yup
    .string()
    .required("E'lon sarlavhasi kiritilishi kerak")
    .max(70, "E'lon sarlavhasi 70 belgidan kam bo'lishi kerak")
    .min(20, "Sarlavhada kamida 20 ta belgi bo'lishi kerak"),
  categoryId: yup.number().positive().required("Category tanlanishi kerak."),
  mainCategoryId: yup
    .number()
    .positive()
    .required("Category tanlanishi kerak."),
  price: yup.string().required("Narx kiritish kerak."),
  who: yup.string().required("Account yoq."),
  valute: yup.string(),
  img: yup.array(),
  status: yup.string().nullable(),
  personalBusiness: yup.string().nullable(),
  byAgreement: yup.boolean(),
  description: yup
    .string()
    .required("No description.")
    .max(80, "Tavsif 80 belgidan kam bo'lishi kerak emas"),
  location: yup.string().required("Joylashuvingizni kiriting."),
  email: yup.string().email().required("No email address."),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
