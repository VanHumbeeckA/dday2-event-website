import {Component, Inject, View, Transclude} from "angular-decorators";

@Component({
    selector: 'title-box',
    controllerAs: 'TitleBoxCtrl',
    properties: [
        '@title',
    ]
})
@View({ template: require('./box.html')})
@Inject('$q')
@Transclude
export class TitleBoxComponent {

    constructor($q) {
        this.initData();
    }

    initData() {

    }
}

