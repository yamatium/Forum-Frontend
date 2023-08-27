import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutPageComponent,
        children: [
            {path: 'login',          component: LoginPageComponent},
            {path: 'register', component: RegisterPageComponent},
            {path: '**',             redirectTo: 'login'},
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ],
   
})
export class AuthRoutingModule { }
