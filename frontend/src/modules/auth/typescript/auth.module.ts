import {NgModule} from '@angular/core';
import {CoreModule} from "../../core/typescript/core.module";
import {LoginComponent} from "./components/login.component";
import {Routes} from "./routes/routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {InstagramService} from "./services/instagramService";


@NgModule({
    imports: [BrowserModule, CoreModule, Routes, FormsModule, ReactiveFormsModule],
    declarations: [LoginComponent],
    exports:      [LoginComponent],
    providers: [InstagramService]
})

export class AuthModule {

}


