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
      Validators.required
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
