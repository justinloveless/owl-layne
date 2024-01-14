import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_ek1p0yy', 'template_tkenx2v', e.target as HTMLFormElement, '-wfuREVmWjb0X9-17')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
  }

}
