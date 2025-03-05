import {
  isEmail,
  isString,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'emailOrNationalId', async: false })
export class EmailOrNationalIdConstraint implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    return isEmail(value) || isString(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Key must be a valid email or a national ID (number string).';
  }
}
