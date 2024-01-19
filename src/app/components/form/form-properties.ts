import { FormField } from './form-field';

export interface FormProperties {
  action: string;
  method: string;
  fields: FormField[];
  submitButtonText: string;
}
