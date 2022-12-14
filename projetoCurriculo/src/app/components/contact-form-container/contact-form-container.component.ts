import { ContactFormData } from './../../models/contact-form-data.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      name: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required, Validators.email]),
      message: new FormControl("",Validators.required),
    });
  }

  public submitForm(): void {
    this.formData = this.form.getRawValue();

    console.log(this.formData);
  }

  get name() { return this.form.get('name')!; };

  get email() { return this.form.get('email')!; };

  get message() { return this.form.get('message')!; };

}
