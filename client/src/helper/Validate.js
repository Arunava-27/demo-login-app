import { toast } from "react-hot-toast";


// validate username

function userNameVerify(err={}, values={}) {
  if (!values.username) {
    err.username = toast.error("Username is required");
  } else if (values.username.length < 3) {
    err.username = toast.error("Username must be at least 3 characters");
    } else if (values.username.length > 20) {
    err.username = toast.error("Username must be less than 20 characters");
    } 
    // else if (!/^[a-zA-Z0-9_]+$/.test(values.username)) {
    // err.username = "Username must be alphanumeric";
    // }
    return err;    
}

//  validate login page username

export async function validateUsername(values) {
  const errors = userNameVerify({}, values);

    return errors;
}
