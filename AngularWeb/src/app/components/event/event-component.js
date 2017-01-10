import {Component, Inject, Require, View} from "angular-decorators";
import get from "lodash/get";

@Component({
    selector: 'event',
    controllerAs: 'EventCtrl',
    properties: [
        '=event',
        '@putCenter'
    ]
})
@View({template: require('./event.html')})
@Require('^parent')
@Inject("$state")
export class EventComponent {

    constructor($state) {
        this.$state = $state;
    }

    goToEvent() {
        if (this.isClickable()) {
            this.$state.go("index.line-up-detail", {
                eventName: this.event.name,
                event: this.event
            });
        }
    }

    isClickable() {
        return get(this.event, "options.data.paragraphs.length", -1) > 0;
    }
}