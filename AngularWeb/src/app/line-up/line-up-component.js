import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'line-up',
    controllerAs: 'LineUpCtrl'
})
@View({ template: require('./line-up.html')})
@Inject('LineUpService', 'FileSaver')
export class LineUpComponent {


    constructor(lineUpService, FileSaver) {
        this.lineUpService = lineUpService;
        this.initData();
    }

    initData() {
        var data = this.lineUpService.getLineUp();
        this.saturday = data.saturday;
        this.sunday = data.sunday;
    }
}