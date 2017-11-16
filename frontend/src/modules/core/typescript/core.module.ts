import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RestService} from "./services/rest.service";
import {SessionService} from "./services/session.service";
import {RoutesGuardService} from "./services/routes_guard.service";
import {AuthService} from "./services/auth.service";
import {TransporterService} from "./services/transporter.service";
import {ResponseValidatorService} from "./services/response_validator.service";


@NgModule({
  imports: [HttpModule],
  declarations: [],
  exports:      [],
  providers: [RestService, SessionService, ResponseValidatorService, RoutesGuardService, AuthService, TransporterService]
})

export class CoreModule {}


