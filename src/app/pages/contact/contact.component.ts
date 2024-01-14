import { Component } from '@angular/core';
import { EmailFormComponent } from 'src/app/shared/email-form/email-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [EmailFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public email: string = 'tori@torilayne.com'
  public cell: string = '832-729-6752'

}
