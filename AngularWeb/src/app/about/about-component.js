import {Component, Inject, View} from "angular-decorators";
import orderBy from "lodash/orderBy"

@Component({
    selector: 'about',
    controllerAs: 'AboutCtrl'
})
@View({ template: require('./about.html')})
@Inject('$q', 'SponsorService', 'HistoriekService')
export class AboutComponent {

    constructor($q, SponsorService, HistoriekService) {
        this.sponsorService = SponsorService;
        this.sponsors = orderBy(this.sponsorService.getSponsors(), (s) => s.type, "desc");
        this.supporters = this.sponsorService.getSupporters();
        this.historiekService = HistoriekService;
    }

    $onInit() {
        this.historiek = this.historiekService.getHistoriek();
    }
}