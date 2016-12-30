//// IE polyfill
import "babel-polyfill";

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

import carousel from 'angular-ui-bootstrap/src/carousel';
import tabs from 'angular-ui-bootstrap/src/tabs'
// import 'moment';
// import 'moment/locale/nl-be';
// import 'angular-moment';


//// local config
import {routing} from './app.routing';

//// CSS
import '../style/bootstrap.min.css';
import '../style/business-casual.css';

// SASS
import '../style/sass/general/fonts.scss';
import '../style/sass/main.scss';

//// modules
// import * as TimeTableModule from './components/timetable.js/timetable-provider';

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
//import {AddToCalComponent} from './components/addtocalendar/addtocalendar-component';

const MODULE_NAME = 'ddayApp';

Module(MODULE_NAME, ['ngAnimate', 'ngSanitize', 'ngTouch', 'ngFileSaver', 'ui.router', carousel, tabs])
    .config(routing)
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
    // .add(AddToCalComponent)
    .run(() => {
        //amMoment.changeLocale('nl-be');
        FastClick.attach(document.body);
    })
;


export default MODULE_NAME;