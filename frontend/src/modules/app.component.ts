import {Component, ViewContainerRef} from '@angular/core';
@Component({
    selector: 'ng-app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
