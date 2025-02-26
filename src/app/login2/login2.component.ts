import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

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
      email: new FormControl('f@ex', {
        validators: [
          Validators.email,
          Validators.required
        ]
      }
      ),
      password: this.fb.control('aaa123FFF', {
        validators: [
          Validators.minLength(3),
          Validators.maxLength(32)
        ]
      }
      ),
      isRememberMe: true,
      extra: this.fb.array([
        this.makeExtra(),
        this.makeExtra()
      ])
    });
  }

  makeExtra() {
    return this.fb.group({
      name: '',
      tel: ''
    })
  }

  getFormArray(name: string) {
    return this.form.get(name) as FormArray;
  }

  addExtra() {
    this.getFormArray('extra').push(this.makeExtra());
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-gradient-primary');
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('送出表單: ', form.value);
    }
  }

}
