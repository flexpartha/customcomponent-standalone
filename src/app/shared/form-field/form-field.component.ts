import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgFor]
})
export class FormFieldComponent implements OnInit {

  customForm!: FormGroup;

  nameList:any = [];
  genderOptions:any = [
    {
      "id":"1",
      "gender":"Male",

    },
    {
      "id":"2",
      "gender":"female",
      
    },
    {
      "id":"3",
      "gender":"Non-binary",
      
    },
    {
      "id":"4",
      "gender":"Gender non-conforming",
      
    },
    {
      "id":"5",
      "gender":"Prefer not to say",
      
    }
  ]
  @Output() dispatchnameList:EventEmitter<any> = new EventEmitter()
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(){
    this.customForm = this.fb.group({
      fstNm: new FormControl(''),
      lstNm: new FormControl(''),
      selectedgender: new FormControl('')
    })
  }
  setFormValue(){
    this.nameList.push(this.customForm.value);
    this._snackBar.open("Data Passed Successfuly in Parent Component","close");
    this.dispatchnameList.emit(this.nameList);
  }
}
