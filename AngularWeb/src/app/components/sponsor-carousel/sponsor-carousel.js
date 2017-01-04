import {Component, Inject, View, Require} from "angular-decorators";
import orderBy from "lodash/orderBy"
import filter from "lodash/filter";

@Component({
    selector: 'sponsor-carousel',
    controllerAs: 'SpCarCtrl',
    properties: []
})
@View({template: require('./sponsor-carousel.html')})
@Inject('SponsorService')
@Require('^parent')
export class SponsorCarouselComponent {

    constructor(SponsorService) {
        this.sponsorService = SponsorService;
        this.noWrapSlides = false;
        this.carouselTimer = 3500;
        let allSponsors = orderBy(this.sponsorService.getSponsors(), (s) => s.type, "desc");
        this.sponsors = filter(allSponsors, (s) => !s.sympatisant);
    }

    hasUrl() {

    }
}

