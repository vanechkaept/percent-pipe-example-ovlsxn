// #docregion
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public num1: number = 0.25;
  public num2: number = 0.5;
  public title: string;

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: 1
    });
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
