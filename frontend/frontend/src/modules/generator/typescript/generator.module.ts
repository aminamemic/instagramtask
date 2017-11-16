import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CoreModule} from "../../core/typescript/core.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/headers/header.component";
import {EmitterService} from "../../core/typescript/services/emitter.service";
import {NotificationsService} from "angular2-notifications";
import {ScreenDetectionService} from "../../core/typescript/services/screen_detection.service";
import {Routes} from "./routes/routes";

@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule, CoreModule, CommonModule, Routes],
  declarations: [MainComponent, HeaderComponent],
  exports:      [MainComponent, HeaderComponent],
  providers: [EmitterService, NotificationsService, ScreenDetectionService]
})

export class GeneratorModule {}
