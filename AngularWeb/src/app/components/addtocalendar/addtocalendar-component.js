import {Component, View} from "angular-decorators";

@Component({
    selector: 'add-to-cal',
    controllerAs: 'AddToCalCtrl'
})
@View({template: require('./addtocalendar.html')})
export class AddToCalComponent {
    constructor() {

    }
}