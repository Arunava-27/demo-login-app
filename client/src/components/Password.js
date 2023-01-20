import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import avatar from "../assets/profile.png";
import { validatePassword } from "../helper/Validate";
import showPwdImg from "../assets/show-pass.svg";
import hidePwdImg from "../assets/hide-pass.svg";
import styles from "../styles/Password.module.css";

export default function Password() {
  // const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: validatePassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-slate-500">
              Please enter your password to continue
            </span>
            <form action="" className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-5">
                <img className={styles.profile_img} src={avatar} alt="avatar" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
              <div style={{display:"flex",justifyContent:"space-around" }}>
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type={isRevealPwd ? "text" : "password"}
                  placeholder="Password"
                />
                <img style={{border: "2px"}}
                  className={styles.toggle_img}
                  alt=""
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </div>
                
                <button className={styles.btn} type="submit">
                  Sign In
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-slate-500">
                  Forgot Password?{" "}
                  <Link className="text-red-500" to="/recovery">
                    Recover Now
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
