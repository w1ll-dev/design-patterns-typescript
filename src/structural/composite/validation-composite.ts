abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
class ValidateString extends ValidationComponent {
  validate(value: string) {
    return typeof value === 'string';
  }
}

class ValidateNumber extends ValidationComponent {
  validate(value: string) {
    return /\d+/.test(value);
  }
}

class ValidateEmail extends ValidationComponent {
  validate(value: string) {
    return /@/.test(value);
  }
}

// composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      if (!child.validate(value)) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((child) => this.children.push(child));
  }
}

const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();

const validationsComposite = new ValidationComposite();

validationsComposite.add(validateString, validateEmail, validateNumber);

console.log(validationsComposite.validate('a@1'));
