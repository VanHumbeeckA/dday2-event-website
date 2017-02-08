//// IE polyfill
import "babel-polyfill";

//// Service worker
import {SwBootstrap} from './app.sw-bootstrap';
SwBootstrap();

//// vendor JS files
window.jQuery = window.$ = require('../../node_modules/jquery/dist/jquery.min');
window.moment = require('moment');
window.FastClick = require('../../node_modules/fastclick/lib/fastclick');
require('../../node_modules/bootstrap/dist/js/bootstrap.min');
//require('../../node_modules/addtocalendar/addtocalendar');

//// Base packages

// https://github.com/MikeRyan52/angular-decorators
import {Module} from 'angular-decorators';
import "angular";
import 'angular-ui-router';
import 'reflect-metadata';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-touch';
import 'angular-file-saver';
import 'angular-local-storage';

import carousel from 'angular-ui-bootstrap/src/carousel';
import tabs from 'angular-ui-bootstrap/src/tabs';
import accordion from 'angular-ui-bootstrap/src/accordion';
// import 'moment';
import 'moment/locale/nl-be';
// import 'angular-moment';


//// local config
import {routing} from './app.routing';
import {localStorageConfig} from './components/localstorage/config';

//// CSS
import '../style/bootstrap.min.css';
import '../style/business-casual.css';

//// SASS
import '../style/sass/general/fonts.scss';
import '../style/sass/main.scss';

//// components
import {NavigationComponent} from './components/common/navigation-component';
import {FooterComponent} from './components/common/footer-component';
import {HomeComponent} from './home/home-component';
import {ContactComponent} from './contact/contact-component';
import {LineUpComponent} from './line-up/line-up-component';
import {AboutComponent} from './about/about-component';
import {BoxComponent} from './components/box/box-component';
import {TitleBoxComponent} from './components/box-title-only/box-component';
import {TimeTableComponent} from './components/timetable/timetable-component';
import {SponsorService} from './sponsors/sponsor-service';
import {LineUpService} from './line-up/line-up-service';
import {EventComponent} from './components/event/event-component'
import {BoxColumnComponent} from './components/box-column/box-column-component';
import {SponsorCarouselComponent} from './components/sponsor-carousel/sponsor-carousel';
import {EventDetailComponent} from './components/event-detail/event-detail-component';
import {LocalStorageService} from './components/localstorage/localstorage-service';
import {HistoriekService} from './about/historiek-service';
import {DrumPartyService} from './line-up/drum-party-service';
//import {AddToCalComponent} from './components/addtocalendar/addtocalendar-component';

const MODULE_NAME = 'ddayApp';

Module(MODULE_NAME, [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ngFileSaver',
    'ui.router',
    'LocalStorageModule',
    carousel,
    tabs,
    accordion])
    .config(routing)
    .config(localStorageConfig)
    .add(DrumPartyService)
    .add(NavigationComponent)
    .add(FooterComponent)
    .add(HomeComponent)
    .add(ContactComponent)
    .add(LineUpComponent)
    .add(AboutComponent)
    .add(BoxComponent)
    .add(TitleBoxComponent)
    .add(TimeTableComponent)
    .add(SponsorService)
    .add(LineUpService)
    .add(EventComponent)
    .add(BoxColumnComponent)
    .add(SponsorCarouselComponent)
    .add(EventDetailComponent)
    .add(LocalStorageService)
    .add(HistoriekService)

    // .add(AddToCalComponent)
    .run(($rootScope) => {
        //amMoment.changeLocale('nl-be');
        FastClick.attach(document.body);

        $rootScope.$on('$stateChangeSuccess', function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    })
;


export default MODULE_NAME;