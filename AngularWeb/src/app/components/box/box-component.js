import {Component, Inject, View, Transclude, Require} from "angular-decorators";

@Component({
    selector: 'box',
    controllerAs: 'BoxCtrl',
    properties: [
        '@imageSrc',
        '@imageUrl',
        '@title',
        '@isOdd'
    ]
})
@View({ template: require('./box.html')})
@Transclude
@Require('^parent')
export class BoxComponent {

    constructor() {

    }

    hasUrl() {
        if (this.imageUrl && this.imageUrl.length > 0) {
            return true;
        }
        return false;
    }
}

