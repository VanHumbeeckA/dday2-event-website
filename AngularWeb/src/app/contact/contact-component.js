import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'contact',
    controllerAs: 'ContactCtrl'
})
@View({ template: require('./contact.html')})
@Inject('$q')
export class ContactComponent {


    constructor($q) {
        this.initData();
    }

    initData() {

    }
}