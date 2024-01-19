import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [
    PageComponent,
    FormComponent,
    HeaderComponent,
    ImageComponent,
    ParagraphComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageComponent,
    FormComponent,
    HeaderComponent,
    ImageComponent,
    ParagraphComponent,
  ],
})
export class ComponentsModule {}
