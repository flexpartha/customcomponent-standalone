import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FormFieldComponent } from './shared/form-field/form-field.component';
import { AppRequiredFieldComponent } from './shared/app-required-field/app-required-field.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [AppRequiredFieldComponent, FormFieldComponent]
})
export class AppComponent implements OnInit {
  title = 'customcomponentDemo';

  customForm!: FormGroup;

  nameList:any = [];
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(){
    this.customForm = this.fb.group({
      fstNm: new FormControl(''),
      lstNm: new FormControl(''),
    })
  }
  getFormValue(){
    this.nameList.push(this.customForm.value);
    console.log("List VALUE::--",this.nameList);
  }

  getNameList(value:any){
    console.log("LIST VALUE",value);
    this.nameList = value;
  }
}
