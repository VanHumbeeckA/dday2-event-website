import {Component, Require, Inject, View} from "angular-decorators";

@Component({
    selector: 'event-detail',
    controllerAs: 'EventDetailCtrl'
})
@View({ template: require('./event-detail.html')})
@Inject('$stateParams')
export class EventDetailComponent {

    constructor($stateParams) {
        this.event = $stateParams.event;
        this.eventName = $stateParams.eventName;
    }

}