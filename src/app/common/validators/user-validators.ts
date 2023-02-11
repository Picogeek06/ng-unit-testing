import { AbstractControl, ValidationErrors } from "@angular/forms";
import { usernameConfigs } from "../constants/validatorConfigs";

export function usernameValidator(control: AbstractControl): ValidationErrors | null {
  const username = control.value;
  const pattern  = usernameConfigs.pattern;
  // function to check all username validations according to the usernameConfigs
  if (username) {
    if (username.length > usernameConfigs.maxLength) {
      return { validationError: usernameConfigs.errorMessages.maxLength };
    }

    if (username.length < usernameConfigs.minLength) {
      return { validationError: usernameConfigs.errorMessages.minLength };
    }

    if (!pattern.test(username)) {
      return { validationError: usernameConfigs.errorMessages.pattern };
    }
  } else {
    return { validationError: usernameConfigs.errorMessages.required };
  }
  return null;
}