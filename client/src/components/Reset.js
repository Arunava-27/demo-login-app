import React from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import styles from "../styles/Username.module.css";
import { resetPasswordValidation } from "../helper/Validate";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPwd: ""
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-slate-500">
              Enter New Password.
            </span>
            <form action="" className="py-20" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="New Password"
                />
                <input {...formik.getFieldProps("confirmPwd")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Confirm Password"
                />
                <button className={styles.btn} type="submit">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
