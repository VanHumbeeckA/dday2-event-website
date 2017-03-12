import {Component, Inject, View} from "angular-decorators";

@Component({
    selector: 'home',
    controllerAs: 'HomeCtrl'
})
@View({ template: require('./home.html')})
@Inject('$anchorScroll', '$location')
export class HomeComponent {


    constructor($anchorScroll, $location) {
        this.slides = [];
        this.tombolatickets = [];
        this.myInterval = 5000;
        this.initData();
        this.$anchorScroll = $anchorScroll;
        this.$location = $location;
    }

    goToNumbers() {
        this.$location.hash('winning-numbers');
        this.$anchorScroll();
    }

    initData() {
        this.slides.push({
            image: "img/drummers/geuens_jordi_1.jpg",
            caption: "Jordi Geuens"
        }, {
            image: "img/slide-1.jpg",
            caption: "Coffee"
        });

        this.tombolatickets = [
            "0604",
            "0607",
            "1365",
            "1405",
            "1285",
            "1435",
            "0700",
            "1006",
            "0345",
            "0516",
            "0615",
            "1089",
            "1088",
            "0541",
            "1449",
            "1320",
            "0745",
            "0403"
        ];
    }

}

