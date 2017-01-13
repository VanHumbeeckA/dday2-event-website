import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'line-up',
    controllerAs: 'LineUpCtrl'
})
@View({ template: require('./line-up.html')})
@Inject('LineUpService', 'FileSaver', 'LocalStorageService')
export class LineUpComponent {

    constructor(lineUpService, FileSaver, LocalStorageService) {
        this.lineUpService = lineUpService;
        this.localStorageService = LocalStorageService;
        this.preferenceKey = "line-up-preference";
    }

    $onInit() {
        this.initData();
        this.activeTab = this.localStorageService.getKey(this.preferenceKey) || 0;
    }

    initData() {
        var data = this.lineUpService.getLineUp();
        this.saturday = data.saturday;
        this.sunday = data.sunday;
    }
    showTimeLine() {
        this.localStorageService.setKey(this.preferenceKey, 0);
    }

    showList() {
        this.localStorageService.setKey(this.preferenceKey, 1);
    }

}