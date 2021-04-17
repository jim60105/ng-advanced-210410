import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  oriClass: DOMTokenList;

  data = {
    email: 'f@ex',
    password: 'aaa123FFF',
    isRememberMe: true
  }

  constructor() { }

  ngOnInit(): void {
    this.oriClass = document.body.classList;
    document.body.classList.add('bg-gradient-primary');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-gradient-primary');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('送出表單: ',form.value);
    }
  }

}
