import { Component, Input } from '@angular/core';
import { FormProperties } from 'src/app/types/form-properties';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() properties?: FormProperties;
}
