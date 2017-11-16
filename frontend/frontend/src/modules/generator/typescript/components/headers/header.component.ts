import {Component, OnInit} from '@angular/core';
import {RestService} from "../../../../core/typescript/services/rest.service";
import {SessionService} from "../../../../core/typescript/services/session.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/typescript/services/auth.service";


@Component({
    selector: 'header',
    templateUrl: '../../../templates/headers/header.html'
})
export class HeaderComponent implements OnInit {

    constructor(public restService: RestService, private sessionService: SessionService, private router: Router, private authService: AuthService) {

    }

    private user: any;

    logout() {
        this.authService.logout();
     }

    ngOnInit(): void {
        this.user = this.sessionService.getUserData();
    }
}
