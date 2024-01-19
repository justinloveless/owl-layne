import { Component, Input } from '@angular/core';
import { FormProperties } from 'src/app/components/form/form-properties';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() properties?: FormProperties;
}
