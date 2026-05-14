import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './leave-form.html',
  styleUrls: ['./leave-form.css']
})
export class LeaveForm {

  leaveForm: FormGroup;

  leaveTypes = ['Sick Leave', 'Casual Leave', 'Annual Leave'];

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      employeeName: ['', Validators.required],
      employeeId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      leaveType: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      console.log('Form Data:', this.leaveForm.value);
    } else {
      console.log('Form Invalid');
      this.leaveForm.markAllAsTouched();
    }
  }

}