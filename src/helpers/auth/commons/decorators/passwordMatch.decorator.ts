import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'passwordMatch', async: false })
export class PasswordMatchConstraint implements ValidatorConstraintInterface {
  validate(confirmPassword: string, args: ValidationArguments) {
    const [originalPasswordPropertyName] = args.constraints;

    const originalPasswordValue = (args.object as any)[originalPasswordPropertyName];

    return confirmPassword === originalPasswordValue;
  }
  defaultMessage(args: ValidationArguments) {
    return 'Passwords do not match';
  }
}
