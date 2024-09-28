export const checkValidateData = (email, password) => {
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/.test(password);
  
    // if (name) {
    //   const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);
    //   if (!isNameValid) return "Enter a valid name";
    // }
  
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  }