import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ngForm could be get with 2 ways, ViewChild or passed in from HTML
  // (commented out the other way, not is using ViewChild)
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer: string;
  genders = ['male', 'female'];
  defaultGender = 'female';

  suggestUserName() {
    const suggestedName = 'Superuser';

    // setValue must include all field in the form,
    // and will overwrite all the existing value entered on the form
    // this.signupForm .setValue(
    //   {
    //     userData: {
    //       username: suggestedName,
    //       email: ''
    //     },
    //     secret: 'pet',
    //     gender: 'male',
    //     questionAnswer: ''
    //   }
    // );

    // whereas patchValue could only fill certain fields.
    this.signupForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }

  onReset() {
    this.signupForm.reset();
  }
}
