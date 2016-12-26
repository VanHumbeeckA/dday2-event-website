import {Component, Inject, View, Transclude} from "angular-decorators";

@Component({
    selector: 'box',
    controllerAs: 'BoxCtrl',
    properties: [
        '@imageSrc',
        '@title',
        '@isOdd'
    ]
})
@View({ template: require('./box.html')})
@Inject('$q')
@Transclude
export class BoxComponent {

    constructor($q) {
        this.initData();
    }

    initData() {

    }
}

