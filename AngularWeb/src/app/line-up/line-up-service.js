import {Service} from "angular-decorators";

@Service("LineUpService")
export class LineUpService {

    constructor() {

    }

    getLineUp() {
        return {
            saturday: {
                locations: ['Hoofdpodium'],
                events: [
                    {
                        name: 'Drumparty',
                        location: 'Hoofdpodium',
                        startDate: new Date(2016, 2, 18, 18, 30),
                        endDate: new Date(2016, 2, 18, 23, 0),
                        options: {
                            class: 'event-hoofdpodium',
                            data: {
                                text: ''
                            }
                        }
                    },
                    {
                        name: 'After-Drumparty',
                        location: 'Hoofdpodium',
                        startDate: new Date(2016, 2, 18, 23, 0),
                        endDate: new Date(2016, 2, 19, 23, 59),
                        options: {
                            class: 'event-hoofdpodium'
                        }
                    }
                ]
            },
            sunday: {
                locations: ['Hoofdpodium', 'Roland stand', 'Zaal 1', 'Zaal 2', 'Zaal 3', 'Zaal 4'],
                events: [
                    {
                        name: 'Roland stand',
                        location: 'Roland stand',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                            url: '#'
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
                                text: "Nataniel Melo (Terrakota, Clac) laat je kennismaken met de pracht van slaginstrumenten uit alle werelddelen. Conga, bata, surdo, talking drum, kalimba, mbira, balafon… En nog veel meer. Ontdek de oneindige klanken van de percussiewereld en probeer ze zelf uit"
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
                                text: "Altijd al eens van dichtbij willen kennismaken met een drumstel? Dit is je kans. Onze oud-leerlingen (waaronder enkele professionele muzikanten) leren je de eerste stappen, dan is het aan jou om je uit te leven en de opwinding van het drummen te voelen. Speel je zelf al langer? Dan kunnen we jammen!"
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
                        location: 'Hoofdpodium',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 14, 0),
                        options: {
                            class: 'event-hoofdpodium'
                        }
                    },
                    {
                        name: 'Herman Cambré & Stef Cambré | Drumbattle',
                        location: 'Hoofdpodium',
                        startDate: new Date(2016, 2, 19, 14, 30),
                        endDate: new Date(2016, 2, 19, 15, 30),
                        options: {
                            class: 'event-hoofdpodium'
                        }
                    },
                    {
                        name: 'Roland Push Your Drumming 3: Michael Schack',
                        location: 'Hoofdpodium',
                        startDate: new Date(2016, 2, 19, 16, 0),
                        endDate: new Date(2016, 2, 19, 17, 30),
                        options: {
                            class: 'event-hoofdpodium'
                        }
                    },
                    {
                        name: 'Slotconcert',
                        location: 'Hoofdpodium',
                        startDate: new Date(2016, 2, 19, 18, 30),
                        endDate: new Date(2016, 2, 19, 22, 0),
                        options: {
                            class: 'event-hoofdpodium'
                        }
                    },
                ]
            }
        }
    }
}