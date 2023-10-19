import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [ './register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService  ) {}

  ngOnInit(): void {
  }

  public myForm: FormGroup = this.fb.group({
    email:          ['', [Validators.required, Validators.minLength(4), Validators.maxLength(250) ] ],
    username:       ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12) ] ],
    password:       ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10) ] ],
    VerifyPassword: ['', [Validators.required,  ] ],

    //https://stackoverflow.com/questions/3797098/what-are-the-standard-minimum-and-maximum-lengths-of-username-password-and-emai
  })

  isValidField( field: string): boolean | null {
    return this.myForm.controls[field].errors 
     && this.myForm.controls[field].touched
  }

  getFieldError( field: string): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return  'this field is required';

        case 'minlength':
          return  `too short, at least ${errors['minlength'].requiredLength } letters long. `;
      }
    }

    return null;
  }


  onSave() {

    if ( this.myForm.controls['password'].value != this.myForm.controls['VerifyPassword'].value || this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
    return console.log ("nuh uh"); 
    } 
    
    //console.log(this.myForm.value);

    if(this.myForm.valid) {
      const userData = this.myForm.value;
      this.authService.createUser(userData).subscribe(
        (Response) => {
          console.log(this.myForm.value, Response);
          this.router.navigate(['./forum/home'])
        },
        (error) => {
          console.error('Error creating user', error);
        }
      )
    }
  }

}
