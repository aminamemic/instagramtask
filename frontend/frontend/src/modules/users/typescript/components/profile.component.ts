import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {SessionService} from "../../../core/typescript/services/session.service";
import {InstagramService} from "../../../auth/typescript/services/instagramService";
import {ResponseExtractor} from "../../../core/typescript/utils/response_extractor";
import {IInstagramResponse} from "../../../core/typescript/abstract/instagram_response.interface";



@Component({
    selector: 'profile',
    templateUrl: '../../templates/profile.html'
})

export class ProfileComponent implements OnInit {

    userProfile: IInstagramResponse;
    display: boolean;


    constructor(private sessionService: SessionService, private instagramService: InstagramService, private router: Router) {

    }

    private getDataFromInstagram() {
        this.instagramService.getDataFromInstagram(
            (error, response) => {
                if (!error) {
                    this.userProfile = ResponseExtractor.dataExtractor(ResponseExtractor.bodyExtractor(response));
                    if(this.userProfile.hasOwnProperty('user') || this.userProfile.hasOwnProperty('media')){
                        this.display = true;
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                }
            });
    }


    ngOnInit() {
        this.getDataFromInstagram();
    }
}