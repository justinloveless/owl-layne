import {Component, Input} from '@angular/core';
import {FormProperties} from 'src/app/components/form/form-properties';
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import {NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";
import {FormAction} from "./form-action";

@Component({
  selector: 'app-form',
  standalone: true,
    imports: [
        NgSwitch,
        NgForOf,
        NgSwitchCase
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() properties?: FormProperties;

  public submit(e: Event) {
    switch (this.properties?.action) {
        case FormAction.email:
            this.sendEmail(e)
            break;
        default:
            console.log('unhandled submit event')
            alert('Unhandled Submit Event: ' + this.properties?.action)
            break;
    }
  }
  
  private sendEmail(e: Event) {
      e.preventDefault();
      // TODO: get service ID, template ID, and Public Key from environment variables
      emailjs.sendForm('service_ek1p0yy', 'template_tkenx2v', e.target as HTMLFormElement, '-wfuREVmWjb0X9-17')
          .then((result: EmailJSResponseStatus) => {
              console.log(result.text);

          }, (error) => {
              console.log(error.text);
          });
  }
}
