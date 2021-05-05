import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBody } from '../../../models/FormBody';
import { FormService } from '../../../services/form/form.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  public hasSent = false;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    console.log(this.getFormValue());
    this.formService.submitForm(this.getFormValue()).subscribe(() => {
      this.clearForm();
      this.hasSent = true;
    });
  }

  private clearForm(): void {
    this.form.setValue({
      name: '',
      email: '',
      message: ''
    });
  }

  private getFormValue(): FormBody {
    const formData: FormBody = {
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message
    };

    return formData;
  }

}
