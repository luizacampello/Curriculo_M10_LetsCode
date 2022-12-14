import { ContactFormData } from './../../models/contact-form-data.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form-container',
  templateUrl: './contact-form-container.component.html',
  styleUrls: ['./contact-form-container.component.css'],
})
export class ContactFormContainerComponent {
  public form!: FormGroup;
  public formData!: ContactFormData;

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl(),
    });
  }

  public submitForm(): void {
    this.formData = this.form.getRawValue();
    
    console.log(this.formData.email);
  }

}
