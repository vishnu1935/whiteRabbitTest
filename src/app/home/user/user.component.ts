import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (!this.registerForm.invalid) {
      let user = {
        user: {
          name: {
            title: this.registerForm.value.title,
            first: this.registerForm.value.firstName,
            last: this.registerForm.value.lastName,
          },
          email: this.registerForm.value.email,
          username: this.registerForm.value.username,
          password: this.registerForm.value.password,
          dob: this.registerForm.value.dob,
          phone: this.registerForm.value.phone
        }
      }
      let userList = JSON.parse(localStorage.getItem('dataSource'));
      userList.push(user);
      localStorage.removeItem('dataSource');
      localStorage.setItem('dataSource', JSON.stringify(userList));
      this.route.navigateByUrl('home');
    }

  }

}
