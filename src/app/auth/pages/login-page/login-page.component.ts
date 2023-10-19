import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) {}

  ngOnInit(): void {
  }

  public myForm: FormGroup = this.fb.group({
    email:          ['', Validators.required],
    password:       ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10) ] ],
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


  login():void {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
    return console.log ("nuh uh"); 
    //if ( this.myForm.invalid || ) return console.log ("nuh uh");
    } 
    console.log(this.myForm.value);

    if(this.myForm.valid) {
      const userData = this.myForm.value;
      this.authService.login(userData).subscribe(
        (Response) => {
          console.log(this.myForm.value, Response);
          this.router.navigate(['./forum/home'])
        },
        (error) => {
          console.error('Login error', error);
        }
      )
    }
  }

}

