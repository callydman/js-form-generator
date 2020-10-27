import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      ]),
    date: new FormControl('', [
      Validators.required
    ]),
    bribeAmount: new FormControl('', [
      Validators.required,
      Validators.pattern(/[0-9]+/)
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const name = this.form.controls.name.value
    const date = this.form.controls.date.value
    const bribeAmount = this.form.controls.bribeAmount.value
  }

  onResetClick() {
    this.form.reset();
  }

}
