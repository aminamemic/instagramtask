import {Component, OnInit} from '@angular/core';
import {RestService} from "../../../core/typescript/services/rest.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/typescript/services/auth.service";
import {TransporterService} from "../../../core/typescript/services/transporter.service";
import {SessionService} from "../../../core/typescript/services/session.service";
import {ResponseExtractor} from "../../../core/typescript/utils/response_extractor";
import {SessionConfig} from "../../../core/typescript/config/session.config";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ValidateFields} from "../../../core/typescript/config/validate_fields.config";
import {ILoginData} from "../abstract/auth.interface";
import {INSTAGRAM_OAUTH} from "../../../core/typescript/config/constants";

@Component({
    selector: 'login',
    templateUrl: '../../templates/login.html'
})
export class LoginComponent implements OnInit{

    private loginForm: FormGroup;
    private validateUserIDErrors: boolean = false;
    private validatePasswordErrors: boolean = false;
    private validateFields = ValidateFields;
    private loginData: ILoginData = {};



    constructor(public restService: RestService, private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private sessionService: SessionService, private transporterService: TransporterService){

    }

    private initValidators(field: string) {
        switch (field) {
            case ValidateFields.USERNAME:
                this.validateUserIDErrors = true;
                break;
            case ValidateFields.PASSWORD:
                this.validatePasswordErrors = true;
                break;
        }
    }

    private login() {
        this.authService.login(this.loginData,
            (error, response) => {
                if (!error) {
                        this.sessionService.setSession(ResponseExtractor.headerExtractor(response, SessionConfig.HEADERS.AUTH_HEADER));
                        let userData: any = ResponseExtractor.dataExtractor(ResponseExtractor.bodyExtractor(response));
                        this.sessionService.setUserData(JSON.stringify(userData));
                        window.location.href = INSTAGRAM_OAUTH;
                }
            }
    );
    }



    ngOnInit(): void {
        if (this.sessionService.getSession()) {
            window.location.href = INSTAGRAM_OAUTH;
        }
        this.loginForm = this.formBuilder.group({
            usernameValidator: ['', Validators.required],
            passwordValidator: ['', Validators.compose([Validators.required])],
        });
    }

}