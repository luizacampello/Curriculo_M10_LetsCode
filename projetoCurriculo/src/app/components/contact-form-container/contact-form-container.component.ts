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
  messageBox: boolean = false;
  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
      message: new FormControl("",[Validators.required, Validators.minLength(3)]),
    });
  }

  public submitForm(): void {
    this.formData = this.form.getRawValue();
    this.messageBox = true;

    console.log(this.formData);
  }

  closeMessage(): void{
    this.messageBox = false;
    this.form.reset();

  }

  get name() { return this.form.get('name')!; };

  get email() { return this.form.get('email')!; };

  get message() { return this.form.get('message')!; };

  public id: string = "contactFormContainer";
}
