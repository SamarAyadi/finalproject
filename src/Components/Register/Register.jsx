import Styles from "./Register.module.css";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  function registerSubmit(values) {
    console.log(values);
  }



  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "name minlength is 3")
      .max(10, "name maxlength is 10")
      .required("name is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "phone is invalid")
      .required("phone is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password start with uppercase")
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("rePassword is required"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: () => registerSubmit,
  });

  return (
    <>
      <div className="w-75 mx-auto py-4">
        <h2>Register Now</h2>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="form-control mb-2"
            type="text"
            id="name"
            name="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="alert mt-2 p-2 alert-danger">
              {formik.errors.name}
            </div>
          )}

          <label htmlFor="email">Email :</label>
          <input
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="form-control mb-2"
            type="email"
            id="email"
            name="email"
          />
           {formik.errors.email && formik.touched.email && (
            <div className="alert mt-2 p-2 alert-danger">
              {formik.errors.email}
            </div>
          )}

          <label htmlFor="phone">Phone :</label>
          <input
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="form-control mb-2"
            type="tel"
            id="phone"
            name="phone"
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="alert mt-2 p-2 alert-danger">
              {formik.errors.phone}
            </div>
          )}
          <label htmlFor="password">Password:</label>
          <input
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="form-control mb-2"
            type="password"
            id="password"
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="alert mt-2 p-2 alert-danger">
              {formik.errors.password}
            </div>
          )}

          <label htmlFor="rePassword">RePassword:</label>
          <input
            value={formik.values.rePassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="form-control mb-2"
            type="password"
            id="rePassword"
            name="rePassword"
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="alert mt-2 p-2 alert-danger">
              {formik.errors.rePassword}
            </div>
          )}
          <button disabled={!(formik.isValid && formik.dirty)} className="btn bg-main text-white mt-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
