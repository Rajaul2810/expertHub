 import * as Yup from 'yup'

 export const registerSchema = Yup.object({
    name: Yup.string().min(2,"Too short").max(25, "Too long").required("Name required"),
    email: Yup.string().email().required("Email required"),
    password: Yup.string().min(4).required("Password required"),
    c_password: Yup.string().required("Confirm Password required").oneOf([Yup.ref("password"),null],"Password mush match"),
  });

  export const loginSchema  = Yup.object({
    email: Yup.string().email().required("Email required"),
    password: Yup.string().min(4).required("Password required"),
  });