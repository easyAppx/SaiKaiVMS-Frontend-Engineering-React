export default function validate(values) {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const linkedinRegex =  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;

    if(!values.firstname){
        errors.firstname = "Firstname is required!";
    }
    if(!values.lastname){
    errors.lastname = "Lastname is required!";
    }
    if(!values.email){
    errors.email = "Email is required!";
    }
    else if(!regex.test(values.email)){
    errors.email = "This is not a valid email format!"
    }
    // if(!values.phonenumber){
    // errors.phonenumber = "Phone Number is required!";
    // }
    // else if(!phoneRegex.test(values.phonenumber)){
    // errors.phonenumber = "This is not a valid phone number format!"
    // }
    if(!values.linkedin){
    errors.linkedin = "LinkedIn Profile is required!";
    }
    else if(!linkedinRegex.test(values.linkedin)){
    errors.linkedin = "This is not a valid format!"
    }
    // if(values.howyouheard == ""){
    // errors.howyouheard = "Please make a selection here!";
    // }

    return errors;

}