import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'my-footer',
    controllerAs: 'footerCtrl'
})
@View({ template: require('./footer.html')})
@Inject('$q')
export class FooterComponent {

    constructor($q) {

    }
}

