import {Component } from '@angular/core';
import {RestService} from "../../../../core/typescript/services/rest.service";

@Component({
    selector: 'main',
    templateUrl: '../../../templates/main/main.html'
})
export class MainComponent {

  constructor(public restService: RestService){

  }

}
