import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import avatar from "../assets/profile.png";
import styles from "../styles/Register.module.css";
import { registerValidation } from "../helper/Validate";
import convertToBase64 from "../helper/convert"

export default function Username() {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {profile : file || ''})
      console.log(values);
    },
  });

  //  formik dosent support file upload so we need to create this handler.

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width: "45%", paddingTop: '2em'}}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-slate-500">
              Explore More By Connecting with Us.
            </span>
            <form action="" className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-5">
                <label htmlFor="profile">
                <img className={styles.profile_img} src={file || avatar} alt="avatar" />
                </label>
                <input onChange={onUpload} type="file" name="" id="profile" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps("email")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Email*"
                />
                <input {...formik.getFieldProps("username")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Username*"
                />
                <input {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Password*"
                />
                <button className={styles.btn} type="submit">
                  Register
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-slate-500">
                 Already a Member?{" "}
                  <Link className="text-red-500" to="/">
                    Sign In
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
