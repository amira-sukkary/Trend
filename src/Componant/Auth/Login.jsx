import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom'
import {toast} from "react-hot-toast";
import axios from "axios";


export default function Login({saveLogin}) {
  let navigate=useNavigate()

  async function loginData(values){
    let {data}= await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values)
    console.log(data);
    toast.success("Success Welcome to Home",{position:"top-right"})
    localStorage.setItem("token",data.token)
    saveLogin();
    navigate('/home');
   }

  let ValidationScheme = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9-]{5,8}$/, "Password should start with a capital letter")
      .required("Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationScheme,
    onSubmit: (values) => loginData (values),
  });

  return (
    <>
      <div className="w-75 mx-auto text-white">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="h3 mt-3 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mb-3"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger">{formik.errors.email}</div>
            ) : (
              ""
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="h3 mt-3 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mb-3"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger">{formik.errors.password}</div>
            ) : (
              ""
            )}
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-info mb-3 mt-3">
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
