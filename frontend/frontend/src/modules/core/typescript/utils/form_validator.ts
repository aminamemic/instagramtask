import {FormControl} from '@angular/forms';
import {IValidatiorResponse} from "../abstract/validator.interface";
import {Regex} from "../config/regex.config";



export class FormValidator {

    static emailValidator(control: FormControl): IValidatiorResponse {
        if (control.value != "" && !Regex.EMAIL_REGEX.test(control.value)) {
            return {"correctMailFormat": true};
        }
        return null;
    }


    static validatePasswordStrength(control: FormControl): IValidatiorResponse {
        if (control.value != "" && !Regex.STRONG_PASS_REGEX.test(control.value)) {
            return {"passwordStrong": true};
        }
        return null;
    }


    static validatePasswordDateFormat(control: FormControl): IValidatiorResponse {
        if (control.value != "" && !Regex.DD_MM_YYYY.test(control.value)) {
            return {"passwordInDateFormat": true};
        }
        return null;
    }

}
