export const validateForm = (name, email, phone)=>{
    let errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!phone) {
      errors.phone = 'Phone number is required';
    }
  
    return errors;
}