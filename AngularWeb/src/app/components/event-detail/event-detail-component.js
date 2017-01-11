import {Component, Require, Inject, View} from "angular-decorators";

@Component({
    selector: 'event-detail',
    controllerAs: 'EventDetailCtrl'
})
@View({ template: require('./event-detail.html')})
@Inject('$stateParams', 'LineUpService')
export class EventDetailComponent {

    constructor($stateParams, LineUpService) {
        this.eventName = $stateParams.eventName;
        this.event = $stateParams.event;
        this.lineUpService = LineUpService;

        if (this.event == null) {
            this.event = LineUpService.findEvent(this.eventName);
        }
    }

}