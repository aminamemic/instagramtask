import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/typescript/core.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ScreenDetectionService} from "../core/typescript/services/screen_detection.service";
import {ProfileComponent} from "./typescript/components/profile.component";


@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule, CoreModule, CommonModule],
    declarations: [ProfileComponent],
    exports: [ProfileComponent],
    providers: [ScreenDetectionService]
})


export class UsersModule {}