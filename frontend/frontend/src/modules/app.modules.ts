import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {RouterModule} from '@angular/router';
import {CoreModule} from "./core/typescript/core.module";
import {AuthModule} from "./auth/typescript/auth.module";
import {GeneratorModule} from "./generator/typescript/generator.module";


//CSS imports
import './auth/style/auth.scss';
import './core/style/core.scss';
import './generator/style/generator.scss';
import './users/style/profile.scss';
import {UsersModule} from "./users/users.module";



// Module Composite Pattern
@NgModule({
  imports: [BrowserModule, RouterModule, CoreModule, AuthModule, GeneratorModule, UsersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModules { }
