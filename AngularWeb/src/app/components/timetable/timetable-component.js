import {Component, Inject, View, Require, Transclude} from "angular-decorators";
import forEach from "lodash/forEach";
import get from "lodash/get";
import {Timetable} from '../../vendor/timetable';


@Component({
    selector: 'time-table',
    controllerAs: 'TimeTableCtrl',
    properties: [
        '@minHour',
        '@maxHour',
        '=ddayEvents',
        '=locations',
        '@identifier'
    ]
})
@View({template: require('./timetable.html')})
@Inject('$log', '$timeout', '$state')
@Transclude
@Require('^parent')
export class TimeTableComponent {

    constructor($log, $timeout, $state) {
        this.$log = $log;
        this.$state = $state;

        this.$onInit = () => {
            this.initTimeTable();
            $timeout(() => {
                this.renderTimeTable();
            })

        };
    }

    initTimeTable() {
        this.timetable = new Timetable();
        let min = parseInt(this.minHour) || 12;
        let max = parseInt(this.maxHour) || 23;
        this.timetable.setScope(min, max);
        this.timetable.addLocations(this.locations);

        forEach(this.ddayEvents, (event, k) => {

            if (get(event, "options.data.paragraphs.length", -1) > 0) {
                let url = this.$state.href('index.line-up-detail', {eventName: event.name});
                event.options.url = url;
            }
            this.timetable.addEvent(event.name, event.location, event.startDate, event.endDate, event.options);
        });

    }

    renderTimeTable() {
        this.renderer = new Timetable.Renderer(this.timetable);
        this.renderer.draw("." + this.identifier);
    }
}
