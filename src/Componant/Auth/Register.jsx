import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";

export default function Register() {
let navigate=useNavigate()

async function registerData(values){
 let {data}= await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values)
 console.log(data);
 toast.success("Success Welcome to login",{position:"top-right"})
 navigate("/")
}


  let ValidationScheme = Yup.object({
    name: Yup.string()
      .max(15, "Name should be less than 15 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9-]{5,8}$/, "Password should start with a capital letter")
      .required("Password is required"),
    age: Yup.number()
      .positive("Age must be positive")
      .integer("Age must be an integer")
      .required("Age is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid phone number")
      .required("Phone is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    validationSchema: ValidationScheme,
    onSubmit: (values) => registerData(values),
  });

  return (
    <>
      <div className="w-75 mx-auto text-white">
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name" className="h3 mt-3 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control mb-3"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="alert alert-danger">{formik.errors.name}</div>
            ) : null}
          </div>

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
            ) : null}
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
            ) : null}
          </div>

          {/* Age */}
          <div className="form-group">
            <label htmlFor="age" className="h3 mt-3 mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control mb-3"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.age && formik.touched.age ? (
              <div className="alert alert-danger">{formik.errors.age}</div>
            ) : null}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone" className="h3 mt-3 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control mb-3"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="alert alert-danger">{formik.errors.phone}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-info mb-3 mt-3">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
