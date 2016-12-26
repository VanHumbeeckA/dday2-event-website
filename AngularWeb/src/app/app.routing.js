import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';



export const routing = ($stateProvider, $urlRouterProvider) => {
    "use strict";

    $stateProvider
        .state("index", {
            abstract: true,
            url: "/index",
            template: require("./components/common/content.html")
        })
        .state("index.home", {
            url: "/home",
            template: `<home></home>`,
            params: {
                title: 'D-Day 2.0'
            }
        })
        .state("index.line-up", {
            url: "/line-up",
            template: `<line-up></line-up>`,
            params: {
                title: 'Line-Up'
            }
        })
        .state("index.about", {
            url: "/about",
            template: `<about></about>`,
            params: {
                title: 'Over ons'
            }
        })
        .state("index.contact", {
            url: "/contact",
            template: `<contact></contact>`,
            params: {
                title: 'Praktisch'
            }
        })
    ;

    $urlRouterProvider.otherwise("/index/home");
};