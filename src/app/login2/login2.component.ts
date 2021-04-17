import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  oriClass: DOMTokenList;

  data = {
    email: 'f@ex',
    password: 'aaa123FFF',
    isRememberMe: true
  };

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.oriClass = document.body.classList;
    document.body.classList.add('bg-gradient-primary');
    this.form = this.fb.group({
      email: 'f@ex',
      password: 'aaa123FFF',
      isRememberMe: true
    });
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-gradient-primary');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('送出表單: ', form.value);
    }
  }

}
