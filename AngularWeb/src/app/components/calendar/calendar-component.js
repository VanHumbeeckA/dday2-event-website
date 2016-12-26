import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'calendar',
    controllerAs: 'CalendarCtrl'
})
@View({ template: require('./calendar.html')})
@Inject('$q')
export class CalendarComponent {


    constructor($q) {
        this.initData();
    }

    initData() {

    }
}