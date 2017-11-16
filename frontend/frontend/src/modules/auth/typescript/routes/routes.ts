import {ModuleWithProviders}  from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from "../components/login.component";
import {ProfileComponent} from "../../../users/typescript/components/profile.component";

// Route Configuration
export const AUTH_ROUTES: any = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},

];

export const Routes: ModuleWithProviders = RouterModule.forRoot(AUTH_ROUTES);
