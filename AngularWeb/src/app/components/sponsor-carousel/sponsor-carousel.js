import {Component, Inject, View, Require} from "angular-decorators";
import orderBy from "lodash/orderBy"

@Component({
    selector: 'sponsor-carousel',
    controllerAs: 'SpCarCtrl',
    properties: [

    ]
})
@View({ template: require('./sponsor-carousel.html')})
@Inject('SponsorService')
@Require('^parent')
export class SponsorCarouselComponent {

    constructor(SponsorService) {
        this.sponsorService = SponsorService;
        this.noWrapSlides = false;
        this.carouselTimer = 4000;
        this.sponsors = orderBy(this.sponsorService.getSponsors(), (s) => s.type, "desc");
    }

    hasUrl() {

    }
}

