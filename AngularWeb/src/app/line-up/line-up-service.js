import {Service, Inject} from "angular-decorators";
import find from "lodash/find";

@Inject("$state")
@Service("LineUpService")
export class LineUpService {

    constructor($state) {
        this.$state = $state;
        this.lineUpData = this.getLineUp();
    }

    findEvent(name) {
        let allEvents = this.lineUpData['saturday'].events.concat(this.lineUpData['sunday'].events);
        let event = find(allEvents, (o) => o.name == name);
        return event || null;
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
                            class: 'event-podium class timetable-clickable',
                            data: {
                                image: "/img/muziekschool/animal.jpg",
                                abstract: "Drums ge(sound)checkt, spots besteld<br>Drumstokken gekocht van laatste nieuwjaarsgeld<br>Animal in ongeëvenaarde topconditie<br>D-Day 2.0 én een Drumparty in deze feesteditie<br>",
                                paragraphs: [
                                    "De Slagwerkklas van Academie De Vonk nodigt iedereen uit op de DRUMPARTY op zaterdag 18 februari 2017 vanaf 18.00u in de Roosenberg te Oud-Heverlee.",
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
                            class: "timetable-clickable",
                            data: {
                                image: "/img/sponsors/sponsor_hoofd_roland.png"
                            }
                        }
                    },
                    {
                        name: 'Geschiedenis van de drumklas',
                        location: 'Zaal 1',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {}
                    },
                    {
                        name: 'Wereld percussie',
                        location: 'Zaal 2',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                            class: "timetable-clickable",
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
                            class: "timetable-clickable",
                            data: {
                                image: "/img/filler/drumkit2.jpg",
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
                        name: 'Battle: Jordi Geuens & Erik Rademakers',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 14, 15),
                        options: {
                            class: 'event-podium timetable-clickable',
                            data: {
                                image: "/img/drummers/geuens_jordi_1.jpg",
                                paragraphs: [
                                    "Jordi Geuens was born in 1985 in Antwerp, Belgium and has been touched by the magic of making music -- in particular playing the drums -- for as long as he can remember. From an early age he began assembling drum sets from Lego boxes, toy drums, furniture, pots and pans and playing them with his own signature wooden spoons.",
                                    "When he was 5 he began playing a real drum set. He joined the local drum corps and soon after started taking lessons at the local music school. At the age of 18 he went on to study at the Pop Department of Codarts (Rotterdam Conservatory). He took lessons from Ad de Jong, Joost van Schaik, Hanz Deijnen, Dave van den Dries, Juan van Emmerloot and Hans Eijkenaar. During this period he was already an active musician and had the opportunity to play with Mira, Novastar and Postman.",
                                    "Jordi has been a very active session player since graduating, playing all kinds of music, both in studio and live, on stage. He plays with many different musicians, something that has allowed him to broaden his horizons, both as a person and a professional musician.",
                                    "He was an original member of Postman, Mira, Mings Pretty Heroes, Gustaph, Organtasy (with the great Hammond specialist Carlo de Wijs) and Lize Accoe. In addition to his involvement in these projects he has had the opportunity to play with artists such as Edsilia Rombley, Zap Mama, Brahim, Sandrine, Berget Lewis, Moiano, Candy Dulfer, Jeroen van der Boom, Leyers, Michiels & Soulsister and many more.",
                                    "In addition to keeping an active recording and touring schedule, Jordi has also taught at Zoltan Kodaly Music School in Belgium.",
                                    "Since 2011 Jordi has been touring throughout Europe with Belgium's latest sensation Selah Sue, whose debut album reached triple Platinum sales status in Belgium, Gold sales status in The Netherlands and double Platinum sales status in France. She has also received several notable awards such as Best Female Solo Artist (Belgian MIA awards 2010), the Prix Constantin (France, 2011) and the MIA Awards of Belgium (2011) for Best Selling Artist, Best Female Solo Artist, Best Album."
                                ]
                            }
                        }
                    },
                    {
                        name: 'Battle: Herman Cambré & Stef Cambré',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 19, 14, 30),
                        endDate: new Date(2016, 2, 19, 15, 45),
                        options: {
                            class: 'event-podium timetable-clickable',
                            data: {
                                image: "/img/filler/drumoffsmall.jpg",
                                paragraphs: [
                                    "Herman is drummer in de liveband van Clouseau.",
                                    "Hij is studiodrummer bij Belgische topartiesten (Arno, Vaya Con Dios, Jan Leyers, ...) en is drummer in verschillende tv-programma's (The Voice, De notenclub, Sing that Song, ...).",
                                    "Stef Cambré is de zoon van Herman en een opkomend Belgisch drumtalent."
                                ]
                            }
                        }
                    },
                    {
                        name: 'Michael Schack',
                        location: 'Podium',
                        startDate: new Date(2016, 2, 19, 16, 0),
                        endDate: new Date(2016, 2, 19, 17, 30),
                        options: {
                            class: 'event-podium',
                            data: {
                                image: "/img/drummers/michael_schack_3.jpg",
                                title: "Push Your Drumming…3! Roland V-Drums tour 2016/2017",
                                paragraphs: [
                                    "De drumwereld staat zo’n beetje op zijn kop sinds 9 september… Die dag stelde Roland immers de revolutionaire TD-50 drumset voor. De reacties hierop waren aanvankelijk zeer verdeeld, maar na een intense ontwikkelingstijd, enkele succesvolle première shows in Polen, Zwitserland, de UK, Taiwan, onlangs nog het HerfstFest drumfestival in Nederland én de afgelopen Netsky toernee doorheen Europa, heeft Michael Schack reeds bewezen dat die TD-50 héél straf, zo niet het strafste drumstel ooit is. Dat beleef je trouwens niet online, dat moet je live horen en zien.",
                                    "Ook #PushYourDrumming partner Christophe Cools heeft het een en ander in petto, dus tijd voor een heuse nieuwe toer doorheen de Benelux, de derde #PushYourDrumming inmiddels! Ook nu hoef je geen TD-50 te bestellen of zelfs een V-Drums te bezitten om ten volle van de nieuwe tips en tricks en de vette nieuwe muziek te genieten. #PushYourDrumming3 wil ook nu weer jong én oud inspireren en aanzetten tot eigen creativiteit en extra oefenkracht bij het drummen. En daarbij hoort ook een voor deze derde uitgave speciaal gecreëerde USB-stick, die na afloop van de clinic door elke bezoeker mee naar huis kan worden genomen. Je krijgt er deze keer zelfs een heuse gratis Nederlandstalige video-les bij!",
                                    "Wil je een snellere voet op jouw basdrumpedaal? Lossere én sterkere armen op die toms? Een betere sound op jouw drumstel? De laatste vette soundmogelijkheden van die nieuwe TD-50 ontdekken en daar inspiratie uithalen voor wat je uit je eigen drumstel kan toveren? Reserveer dan snel jouw zitje op 19 februari 2017 op D-Day 2.0",
                                    "Net als tijdens de vorige twee uitgaven krijg je ook nu die #PYD3 stick gratis mee, maar enkel en alleen wanneer je de clinic ook in levenden lijve bezoekt. Er zijn achteraf geen downloads mogelijk. Niet te missen, dus we zien je @ #PushYourDrumming3?",
                                    "Grote drumgroet,",
                                    "Michael Schack & Christophe Cools"
                                ]
                            }
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