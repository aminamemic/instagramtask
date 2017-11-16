import {ModuleWithProviders}  from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from "../components/main/main.component";
import {ProfileComponent} from "../../../users/typescript/components/profile.component";


export const GENERIC_ROUTES = [
    {
        path: 'users',
        component: MainComponent,
        children: [
            {path: 'profile', component: ProfileComponent}
        ]
    }
];




export const Routes: ModuleWithProviders = RouterModule.forChild(GENERIC_ROUTES);
