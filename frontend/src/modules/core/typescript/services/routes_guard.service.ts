import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TransporterService} from "./transporter.service";
import {SessionService} from "./session.service";
import {AuthService} from "./auth.service";


@Injectable()
export class RoutesGuardService implements CanActivate {

    constructor(private authService: AuthService, private sessionService: SessionService, private router: Router,  private transporterService: TransporterService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.transporterService.setData('redirectUrl', state.url);
        this.router.navigate(['/login']);
        return false;
    }
}