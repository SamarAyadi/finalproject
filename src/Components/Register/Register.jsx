import Styles from "./Register.module.css";

import { useFormik } from "formik";

export default function Register() {
  function registerSubmit(values) {
    console.log("Submit");
  }

  function validate(values) {
    console.log("validate call")
    let phoneRegex =
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
    if (!values.name) {
      errors.name = "name is required";
    } else if (values.name.length < 3) {
      errors.name = "name minlength is 3";
    } else if (values.name.length > 10) {
      errors.name = "name maxlength is 10";
    }

    if (!values.phone) {
      errors.phone = "phone is required";
    }
    if (!phoneRegex.test(values.phone)) {
      errors.phone = "phone number invalid";
    }

    if (!values.email) {
      errors.email = "email is required";
    }
    if (!emailRegex.test(values.email)) {
      errors.email = "email  invalid";
    }
    return errors;
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validate,
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
          {formik.errors.name && formik.touched.phone ? (
            <div className="alert mt-2 p-2 alert-danger">
              {formik.errors.name}
            </div>
          ) : (
            ""
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
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert mt-2 p-2 alert-danger">
              {formik.errors.phone}
            </div>
          ) : (
            ""
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
          <button className="btn bg-main text-white mt-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
