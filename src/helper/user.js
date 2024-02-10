import toast from "react-hot-toast";
import { authenticate } from "./helper.js";
//Validate login page userName:
export async function userNameValidate(values) {
  const errors = userNameVerify({}, values);

  if(values.username){
    // check user exist or not
    const { status } = await authenticate(values.username);
    if(status !== 200){
        errors.exist = toast.error('User does not exist...!')
    }
};
  return errors;
}
//Export Password validate :
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}
//Validate reset page validation :
export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pass) {
    errors.exist = toast.error("Password not match ...");
  }

  return errors;
}

//Validate register form :
export async function registerValidate(values) {
  const errors = userNameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
}

//Validate profile form :

export async function profileValidate(values) {
  let errors = firtnameVerify({}, values);
  lastNameVerify(errors, values);
  mobileVerify(errors, values);
  emailVerify(errors, values);
}
//...........................................

//Validate userName
function userNameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username can't be empty");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username!");
  }

  return error;
}
//Validate password :

function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    error.password = toast.error("Password can't be empty");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password..!");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password must be more than  4 digits");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special character");
  }

  return error;
}

//Validate Email :
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email can't be empty");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email .... ");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}

//Validate firstName:
function firtnameVerify(error = {}, values) {
  if (!values.firstName) {
    error.firstName = toast.error("firstName Can't be empty");
  } else if (values.firstName.includes(" ")) {
    error.firstName = toast.error("Wrong firstName ... ");
  }

  return error;
}

//Validate lastName:
function lastNameVerify(error = {}, values) {
  if (!values.lastName) {
    error.lastName = toast.error("lastName Can't be empty");
  } else if (values.lastName.includes(" ")) {
    error.lastName = toast.error("Wrong lastName ... ");
  }

  return error;
}

//Validate mobile:
function mobileVerify(error = {}, values) {
  if (!values.mobile) {
    error.mobile = toast.error("Mobile Number Can't be empty");
  } else if (values.mobile.includes(" ")) {
    error.mobile = toast.error("Wrong Mobile number ... ");
  } else if (values.mobile.length < 10) {
    error.mobile = toast.error("Mobile number must have 10 digits ... ");
  } else if (values.mobile.length > 10) {
    error.mobile = toast.error("Mobile number only accept 10 digits ... ");
  }
  return error;
}
