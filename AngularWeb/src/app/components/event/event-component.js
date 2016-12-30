import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'event',
    controllerAs: 'EventCtrl',
    properties: [
        '=event'
    ]
})
@View({ template: require('./event.html')})
export class EventComponent {

    constructor() {

    }

    initData() {
        this.saturday = data.saturday;
        this.sunday = data.sunday;
    }
}