import { toast } from "react-hot-toast";

// validate username

function userNameVerify(err = {}, values = {}) {
  if (!values.username) {
    err.username = toast.error("Username is required");
  } else if (values.username.length < 3) {
    err.username = toast.error("Username must be at least 3 characters");
  } else if (values.username.length > 100) {
    err.username = toast.error("Username must be less than 20 characters");
  }
  // else if (!/^[a-zA-Z0-9_]+$/.test(values.username)) {
  // err.username = "Username must be alphanumeric";
  // }
  return err;
}

// validate password
function userPasswordVerify(err = {}, values = {}) {
  const specialChars = /^[A-Za-z0-9!@#$%^&*)(+=._-]+$/g;

  if (!values.password) {
    err.password = toast.error("Password Required....!");
  } else if (values.password.includes(" ")) {
    err.password = toast.error("Wrong Password");
  } else if (values.password.length < 8) {
    err.password = toast.error("Password must have more than 8 characters");
  } else if (!specialChars.test(values.password)) {
    err.password = toast.error("Password must have special characters....!");
  }

  return err;
}

// validate reset password
export async function resetPasswordValidation(values){
  const errors = userPasswordVerify({}, values);

  if(values.password !== values.confirmPwd){
    errors.exist = toast.error("Passwords do not Match....!"); 
  }

  return errors;
}

// validate register form
export async function registerValidation(values) {
  const errors = userNameVerify({}, values);
  userPasswordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

//  validate login page username

export async function validateUsername(values) {
  const errors = userNameVerify({}, values);

  return errors;
}
export async function validatePassword(values) {
  const errors = userPasswordVerify({}, values);

  return errors;
}

//  validate email
function emailVerify(err = [], values) {
  if (!values.email) {
    err.email = toast.error('Email is required');
  } else if (values.email.includes(" ")) {
    err.email = toast.error('Wrong Email...!');
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
    err.email = toast.error('Invalid Email');
  }

  return err;
}