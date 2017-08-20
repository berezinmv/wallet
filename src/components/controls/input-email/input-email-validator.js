import emailValidator from "email-validator";

const inputEmailValidator = (value: string) => (!value || emailValidator.validate(value)) ? undefined : "Invalid email";

export default inputEmailValidator;