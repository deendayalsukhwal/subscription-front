import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-plan',
  templateUrl: './add-new-plan.component.html',
  styleUrls: ['./add-new-plan.component.css']
})
export class AddNewPlanComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      planId: [null, Validators.required],
      planName: [null, Validators.required],
      planDescription: [null, Validators.required],
      planDiscountedPrice: [null, Validators.required],
      planActualPrice: [null, Validators.required],
      isActive: [false],
      createdAt: [null],
      updatedAt: [null]
    });
  }

  onSubmit() {
    // Handle form submission
    if (this.form.valid) {
      // Perform actions like sending form data to backend
      console.log(this.form.value);
    } else {
      // Form is invalid, display error messages or take appropriate action
    }
  }
}
