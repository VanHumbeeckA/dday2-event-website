import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'navigation',
    controllerAs: 'NavigationCtrl'
})
@View({ template: require('./navigation.html')})
@Inject('$state','$stateParams')
export class NavigationComponent {

    constructor($state, $stateParams) {
        this.stateName = $state.$current.name;
    }
}

