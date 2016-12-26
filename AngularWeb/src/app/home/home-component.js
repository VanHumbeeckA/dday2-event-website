import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'home',
    controllerAs: 'HomeCtrl'
})
@View({ template: require('./home.html')})
@Inject('$q')
export class HomeComponent {


    constructor($q) {
        this.slides = [];
        this.myInterval = 5000;
        this.initData();
    }

    initData() {
        this.slides.push({
            image: "img/drummers/geuens_jordi_1.jpg",
            caption: "Jordi Geuens"
        }, {
            image: "img/slide-1.jpg",
            caption: "Coffee"
        });
    }
}

