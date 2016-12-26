import {Component, Inject, View, Require, Transclude} from "angular-decorators";
import forEach from "lodash/forEach";
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
@Inject('$log', '$timeout')
@Transclude
@Require('^parent')
export class TimeTableComponent {

    constructor($log, $timeout) {
        this.$log = $log;

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
        this.$log.info(this.minHour);
        this.timetable.setScope(min, max);

        this.timetable.addLocations(this.locations);

        forEach(this.ddayEvents, (event, k) => {
            this.$log.info(event.name);
            this.timetable.addEvent(event.name, event.location, event.startDate, event.endDate, event.options)
        });

    }

    renderTimeTable() {
        this.renderer = new Timetable.Renderer(this.timetable);
        this.renderer.draw("." + this.identifier);
    }
}
