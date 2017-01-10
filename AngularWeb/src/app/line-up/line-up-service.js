import {Service} from "angular-decorators";

@Service("LineUpService")
export class LineUpService {

    constructor() {

    }

    getLineUp() {
        return {
            saturday: {
                locations: ['Podium'],
                events: [
                    {
                        name: 'Drumparty',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 18, 18, 0),
                        endDate: new Date(2016, 2, 18, 23, 0),
                        options: {
                            class: 'event-podium',
                            data: {
                                image: "/img/muziekschool/animal.jpg",
                                abstract: "De Slagwerkklas van Academie De Vonk nodigt iedereen uit op de DRUMPARTY op zaterdag 18 februari 2017 vanaf 18.00u in de Roosenberg te Oud-Heverlee.",
                                paragraphs: [
                                    "18 februari 2017: de dertiende editie van de Drumparty. Iedereen van de slagwerkklas heeft weer een nummer (techno, pop, rock, metal... ) voorbereid om op onze Drumparty live te spelen. Al deze nummers worden dan door onze eigen dj’s (ook leerlingen van de slagwerkklas) aan elkaar geweven tot een heuse drumparty.",
                                    "De muziek start om 18.00u, de optredens starten omstreeks 18.30u. En dan gaat het non-stop tot ongeveer 23.00u. Het geheel wordt afgesloten met een spetterende  After-Drumparty. Zoals op de andere Drumparty’s zullen er doorlopend drank en snacks te verkrijgen zijn. Ook de traditionele Happy Hour is weer van de partij. Al is het nog even gissen naar het precieze uur. Of onze onovertroffen “Samgria(na)” ook dit jaar weer te verkrijgen is…???",
                                    "Een uurschema van de optredens (volgorde van de leerlingen) wordt later nog verspreid. Zo kan je zien wanneer uw favoriete drummer/drumster in actie treedt. Kom dus gerust eens binnenwandelen (inkom is natuurlijk gratis), breng gerust nog wat volk mee en maak er samen met ons een leuke Party van.",
                                    "Wij hopen u dan te mogen begroeten,",
                                    "De Slagwerkklas."
                                ]
                            }
                        }
                    },
                    {
                        name: 'After-Drumparty',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 18, 23, 0),
                        endDate: new Date(2016, 2, 19, 3, 0),
                        options: {
                            class: 'event-podium'
                        }
                    }
                ]
            },
            sunday: {
                locations: ['Podium', 'Roland stand', 'Zaal 1', 'Zaal 2', 'Zaal 3', 'Zaal 4'],
                events: [
                    {
                        name: 'Roland stand',
                        location: 'Roland stand',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                            url: 'index.home' // TODO: add href also to anchor tag! not sufficient for only ui-sref
                        }
                    },
                    {
                        name: 'Geschiedenis van de drumklas',
                        location: 'Zaal 1',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                        }
                    },
                    {
                        name: 'Wereld percussie',
                        location: 'Zaal 2',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                            data: {
                                image: "/img/filler/workshops.jpg",
                                paragraphs: [
                                    "Nataniel Melo (Terrakota, Clac) laat je kennismaken met de pracht van slaginstrumenten uit alle werelddelen. Conga, bata, surdo, talking drum, kalimba, mbira, balafon… En nog veel meer. Ontdek de oneindige klanken van de percussiewereld en probeer ze zelf uit"
                                ]
                            }
                        }
                    },
                    {
                        name: 'Kennismaking met drums',
                        location: 'Zaal 3',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                            data: {
                                image: "/img/filler/drumkit.jpg",
                                paragraphs: [
                                    "Altijd al eens van dichtbij willen kennismaken met een drumstel? Dit is je kans. Onze oud-leerlingen (waaronder enkele professionele muzikanten) leren je de eerste stappen, dan is het aan jou om je uit te leven en de opwinding van het drummen te voelen. Speel je zelf al langer? Dan kunnen we jammen!"
                                ]
                            }
                        }
                    },
                    {
                        name: 'Tuning en samples maken',
                        location: 'Zaal 4',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {}
                    },
                    {
                        name: 'Clinic: Jordi Geuens',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 14, 0),
                        options: {
                            class: 'event-podium'
                        }
                    },
                    {
                        name: 'Herman Cambré & Stef Cambré | Drumbattle',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 19, 14, 30),
                        endDate: new Date(2016, 2, 19, 15, 30),
                        options: {
                            class: 'event-podium'
                        }
                    },
                    {
                        name: 'Roland Push Your Drumming 3: Michael Schack',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 19, 16, 0),
                        endDate: new Date(2016, 2, 19, 17, 30),
                        options: {
                            class: 'event-podium'
                        }
                    },
                    {
                        name: 'Slotconcert',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 19, 18, 30),
                        endDate: new Date(2016, 2, 19, 22, 0),
                        options: {
                            class: 'event-podium'
                        }
                    },
                ]
            }
        }
    }
}