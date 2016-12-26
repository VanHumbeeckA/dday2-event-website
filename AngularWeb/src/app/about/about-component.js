import {Component, Inject, View} from "angular-decorators";
import orderBy from "lodash/orderBy"

@Component({
    selector: 'about',
    controllerAs: 'AboutCtrl'
})
@View({ template: require('./about.html')})
@Inject('$q', 'SponsorService')
export class AboutComponent {

    constructor($q, SponsorService) {
        this.sponsorService = SponsorService;
        this.sponsors = orderBy(this.sponsorService.getSponsors(), (s) => s.type, "desc");
    }

    initData() {

    }
}