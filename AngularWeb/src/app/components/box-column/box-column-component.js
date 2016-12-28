import {Component, Inject, View, Transclude, Require} from "angular-decorators";

@Component({
    selector: 'box-column',
    controllerAs: 'BoxColumnCtrl',
    properties: [
        '@title',
        '@date'
    ]
})
@View({ template: require('./box-column.html')})
@Transclude
@Require('^parent')
export class BoxColumnComponent {

    constructor() {

    }
}

