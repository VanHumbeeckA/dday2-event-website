import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'line-up',
    controllerAs: 'LineUpCtrl'
})
@View({ template: require('./line-up.html')})
@Inject('$q')
export class LineUpComponent {


    constructor($q) {
        this.initData();
    }

    initData() {
        this.saturday = {
            locations: ['Hoofd podium'],
            events: [
                {
                    name: 'Drumparty',
                    location: 'Hoofd podium',
                    startDate: new Date(2016,2,18,18,30),
                    endDate: new Date(2016,2,18,23,0),
                    options: {}
                },
                {
                    name: 'After-Drumparty',
                    location: 'Hoofd podium',
                    startDate: new Date(2016,2,18,23,0),
                    endDate: new Date(2016,2,19,23,59),
                    options: {}
                }
            ]
        };

        this.sunday = {
            locations: ['Hoofd podium', 'Roland stand', 'Zaal 1', 'Zaal 2', 'Zaal 3', 'Zaal 4'],
            events: [
                {
                    name: 'Roland stand',
                    location: 'Roland stand',
                    startDate: new Date(2016,2,19,12,30),
                    endDate: new Date(2016,2,19,18,0),
                    options: {}
                },
                {
                    name: 'Geschiedenis van de drumklas',
                    location: 'Zaal 1',
                    startDate: new Date(2016,2,19,12,30),
                    endDate: new Date(2016,2,19,18,0),
                    options: {}
                },
                {
                    name: 'Exotische Percussie',
                    location: 'Zaal 2',
                    startDate: new Date(2016,2,19,12,30),
                    endDate: new Date(2016,2,19,18,0),
                    options: {}
                },
                {
                    name: 'Drummen voor beginners',
                    location: 'Zaal 3',
                    startDate: new Date(2016,2,19,12,30),
                    endDate: new Date(2016,2,19,18,0),
                    options: {}
                },
                {
                    name: 'Tuning en samples maken',
                    location: 'Zaal 4',
                    startDate: new Date(2016,2,19,13,0),
                    endDate: new Date(2016,2,19,18,0),
                    options: {}
                },
                {
                    name: 'Clinic: Jordi Geuens',
                    location: 'Hoofd podium',
                    startDate: new Date(2016,2,19,13,0),
                    endDate: new Date(2016,2,19,14,0),
                    options: {}
                },
                {
                    name: 'Herman Cambré & Stef Cambré | Drumbattle',
                    location: 'Hoofd podium',
                    startDate: new Date(2016,2,19,14,30),
                    endDate: new Date(2016,2,19,15,30),
                    options: {}
                },
                {
                    name: 'Roland Push Your Drumming 3: Michael Schack',
                    location: 'Hoofd podium',
                    startDate: new Date(2016,2,19,16,0),
                    endDate: new Date(2016,2,19,17,30),
                    options: {}
                },
                {
                    name: 'Slotconcert',
                    location: 'Hoofd podium',
                    startDate: new Date(2016,2,19,18,30),
                    endDate: new Date(2016,2,19,22,0),
                    options: {}
                },
            ]
        };

        this.ocations = [
            'Hoofdpodium'
        ];
    }
}