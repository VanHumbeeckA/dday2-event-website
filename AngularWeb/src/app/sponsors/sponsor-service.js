import {Service} from "angular-decorators";

@Service("SponsorService")
export class SponsorService {

    constructor() {

    }

    getSupporters() {
        return [
            {
                name: "Abels Kristien",
                text: "Egenhoven",
                type: 50
            },
            {
                name: "Anne Willekens",
                text: "Sint-Joris-Weert",
                type: 100
            }, {
                name: "Muziektherapie LUCA",
                text: "",
                type: 100
            }, {
                name: "Onze anonieme sympathisanten!",
                text: "",
                type: 0
            }
        ]
    }


    getSponsors() {
        return [
            {
                name: "Adams Musical Instruments",
                url: "http://www.adams-music.be/",
                image: "/img/sponsors/sponsor_hoofd_adams.jpg",
                type: 500
            },{
                name: "Vriends, centrale verwarming & sanitair",
                url: "http://www.vriends.be/",
                image: "/img/sponsors/sponsor_hoofd_vriends.jpg",
                type: 500
            },{
                name: "Beckers Motors",
                url: "http://www.beckersmotors.be/",
                image: "/img/sponsors/sponsor_hoofd_ford.jpg",
                type: 500
            },{
                name: "Roland",
                url: "https://www.roland.com/global/",
                image: "/img/sponsors/sponsor_hoofd_roland.png",
                type: 500
            },{
                name: "Handson & Partner",
                url: "http://www.handsonpartners.be/",
                image: "/img/sponsors/sponsor_hoofd_handson.png",
                type: 500
            },{
                name: "AE, Architects for Business",
                url: "http://www.ae.be/",
                image: "/img/sponsors/sponsor_hoofd_AE.png",
                type: 500
            },{
                name: "Escent",
                url: "http://escent.eu/",
                image: "/img/sponsors/sponsor_200_escent.png",
                type: 200
            },{
                name: "Forever Living",
                url: "https://foreverliving.com/",
                image: "/img/sponsors/sponsor_200_forever.jpg",
                type: 200
            },{
                name: "Boekhoudkantoor ROGGEN",
                url: "http://www.bizbook.be/nl/roggen-dimitri/blanden/425819",
                image: "/img/sponsors/sponsor_200_roggen.png",
                type: 200
            }, {
                name: "Livingstone",
                url: "http://www.living-stone.be/",
                image: "/img/sponsors/sponsor_livingstone.JPG",
                type: 200
            }, {
                name: "Frituur Sportcentrum Leuven",
                url: "https://nl-nl.facebook.com/Frituur-sportcentrum-bij-Bart-en-Laura-197600157001202/",
                image: "/img/sponsors/sponsor_100_frituur_sportcentrum.JPG",
                type: 100
            },
            {
                name: "Het Rokken",
                url: "http://www.bivakhuis.be/",
                image: "/img/sponsors/sponsor_100_rokken.jpeg",
                type: 100
            },
            {
                name: "Traiteur Culinesse",
                url: "http://traiteurculinesse.be/",
                image: "/img/sponsors/sponsor_100_traiteurculinesse.JPG",
                type: 100
            },
            {
                name: "Ter Land Invest",
                url: "#",
                image: "/img/sponsors/sponsor_100_terlandinvest.jpg",
                type: 100
            },
            {
                name: "Coca-Cola",
                url: "http://www.coca-cola.com/",
                image: "/img/sponsors/sponsor_50_cola.png",
                type: 50
            },
            {
                name: "Depotter",
                url: "http://www.patisseriedepotter.be/",
                image: "/img/sponsors/sponsor_50_depotter.jpg",
                type: 50
            },
            {
                name: "Uw logo hier",
                url: "mailto:dday19022017@gmail.com",
                image: "/img/sponsors/placeholder.jpg",
                type: 0
            },
            {
                name: "Toro architecten",
                url: "http://www.toroarchitecten.be/",
                image: "/img/sponsors/sponsor_100_toro.png",
                type: 100
            },
            {
                nome: "KBC Raf Mellaerts",
                url: "https://www.kbcagent.be/verzekeringskantoormellaerts/where",
                image: "/img/sponsors/sponsor_250_kbc.jpg",
                type: 250
            },
            {
                name: "Nationale loterij",
                url: "https://www.nationale-loterij.be/nl/onze-spelen/joker-plus",
                image: "/img/sponsors/sponsor_500_joker.JPG",
                type: 500
            },
            {
                name: "Body Centrum",
                url: "http://www.bodycentrum.be/",
                image: "/img/sponsors/sponsor_200_bodycentrum.jpg",
                type: 230
            },
            {
                name: "Sioen",
                url: "http://www.sioenfurniture.be/",
                image: "/img/sponsors/sponsor_50_sioen.jpg",
                type: 50
            }, {
                name: "Dierenarts An Havet",
                url: "http://www.dapanhavet.be/",
                image: "/img/sponsors/sponsor_50_dierenarts2.JPG",
                type: 50
            }, {
                name: "Chan'Talk'",
                url: "http://chantalk.be/",
                image: "/img/sponsors/sponsor_100_chantalk.jpg",
                type: 100
            }, {
                name: "Crescendo Music",
                url: "https://www.crescendo-music.com/",
                image: "/img/sponsors/sponsor_50_crescendomusic.JPG",
                type: 50
            }, {
                name: "Heating Center",
                url: "https://www.heating.be/en",
                image: "/img/sponsors/sponsor_100_heatingcenter.jpg",
                type: 100
            }, {
                name: "Delhaize Sint-Joris-Weert",
                url: "http://shop.delhaize.be/fr-be/storelocator/viewStoreDetail?poiName=10048646",
                image: "/img/sponsors/sponsor_100_delhaize.jpg",
                type: 100
            }, {
                name: "Gemeente Oud-Heverlee",
                url: "https://www.oud-heverlee.be/",
                image: "/img/sponsors/sponsor_hoofd_oudheverlee.jpg",
                type: 500
            }, {
                name: "Krantenwinkel Daisy",
                url: "http://www.handelsgids.be/oud-heverlee/dagbladhandel-daisy/",
                image: "/img/sponsors/sponsor_50_daisy.JPG",
                type: 50
            }, {
                name: "Erea",
                url: "http://www.erea.be/",
                image: "/img/sponsors/sponsor_50_erea.JPG",
                type: 50
            }, {
                name: "Equilli Boortmeerbeek",
                url: "http://equilli.com/boortmeerbeek/",
                image: "/img/sponsors/sponsor_hoofd_equilli.png",
                type: 500
            }, {
                name: "Gilcon - KIA",
                url: "http://www.gilcon.be/",
                image: "/img/sponsors/sponsor_50_kia_leuven.jpg",
                type: 100
            }, {
                name: "Tuincentrum Michaux",
                url: "https://www.facebook.com/Tuincentrum-Michaux-153038644764474/",
                image: "/img/sponsors/sponsor_50_tuincentrummichaux.jpg",
                type: 50
            }, {
                name: "Hogeschool PXL",
                url: "https://www.pxl.be/",
                image: "/img/sponsors/sponsor_hoofd_pxl.png",
                type: 500
            }, {
                name: "Condesco",
                url: "http://www.condesco.be",
                image: "/img/sponsors/sponsor_50_condesco.jpg",
                type: 50
            }, {
                name: "Kunstcollectief",
                url: "http://www.kunstcollectief-oh.be/",
                image: "/img/sponsors/sponsor_hoofd_kunstcollectief.png",
                type: 500
            }, {
                name: "KBC Blanden",
                url: "http://www.spaargids.be/sparen/kbc/haasrode-blandenstraat-77.html",
                image: "/img/sponsors/sponsor_100_kbc_blanden.JPG",
                type: 100
            }, {
                name: "Vic Firth",
                url: "http://vicfirth.com/",
                image: "/img/sponsors/sponsor_50_vicfirth.jpg",
                type: 51
            }, {
                name: "Sabian",
                url: "http://www.sabian.com/",
                image: "/img/sponsors/sponsor_50_sabian.jpg",
                type: 51
            }, {
                name: "Westmalle",
                url: "http://www.trappistwestmalle.be/",
                image: "/img/sponsors/sponsor_hoofd_westmalle.JPG",
                type: 250
            }, {
                name: "Koemikoemi",
                url: "http://www.koemikoemi.be/",
                image: "/img/sponsors/sponsor_koemikoemi.png",
                type: 50
            }
        ]
    }
}