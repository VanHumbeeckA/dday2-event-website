import {Service, Inject} from "angular-decorators";
import find from "lodash/find";


@Service("LineUpService")
@Inject("DrumPartyService")
export class LineUpService {

    constructor(DrumPartyService) {
        this.lineUpData = this.getLineUp();
        this.options = this.getOptions();
        this.drumpartyService = DrumPartyService;
        this.drumpartyOptions = this.drumpartyService.getDrumPartyOptions();
    }

    formatDate(datestring) {
        return new moment(datestring, "YYYYMM").format("MMMM YYYY");
    }

    findEvent(name) {
        let allEvents = this.lineUpData['saturday'].events.concat(this.lineUpData['sunday'].events);
        let event = find(allEvents, (o) => o.name == name);
        return event || null;
    }

    getOptions() {
        return {
            wereldpercussie: {
                class: "timetable-clickable theme-workshop",
                data: {
                    shortName: 'Wereld percussie',
                    image: "/img/filler/workshops.jpg",
                    paragraphs: [
                        "Nataniel Melo (Terrakota, Clac) laat je kennismaken met de pracht van slaginstrumenten uit alle werelddelen. Conga, bata, surdo, talking drum, kalimba, mbira, balafon… En nog veel meer. Ontdek de oneindige klanken van de percussiewereld en probeer ze zelf uit"
                    ]
                }
            },
            marimba: {
                class: "theme-workshop",
                data: {
                    shortName: 'Marimba',
                    image: "/img/filler/marimba-player.jpg"
                }
            },
            drums: {
                class: "timetable-clickable theme-workshop",
                data: {
                    shortName: "Drums",
                    image: "/img/filler/drumkit2.jpg",
                    paragraphs: [
                        "Altijd al eens van dichtbij willen kennismaken met een drumstel? Dit is je kans. Onze oud-leerlingen (waaronder enkele professionele muzikanten) leren je de eerste stappen, dan is het aan jou om je uit te leven en de opwinding van het drummen te voelen. Speel je zelf al langer? Dan kunnen we jammen!"
                    ]
                }
            },
            stemmen: {
                class: "timetable-clickable theme-workshop",
                data: {
                    shortName: "Stemmen",
                    image: "/img/filler/drum-tuning1.jpg",
                    paragraphs: [
                        "Heb je soms moeite met het stemmen van je drums of weet je niet waar te beginnen? Bastiaan Jonniaux (The Lighthouse, Atmospheres) legt je in een paar stappen uit hoe je je drums goed kan laten klinken en waar je allemaal op moet letten. Handige tips & tricks verzekerd! "
                    ]
                }
            },
            sampling: {
                class: "timetable-clickable theme-workshop",
                data: {
                    shortName: "Sampling",
                    image: "/img/filler/sampling.jpg",
                    paragraphs: [
                        "Een micro, handen, voeten, keukengerief…en een labtop in combinatie met een drumstel. Ontdenk hoe je samples maakt en wat je hier allemaal mee kan doen."
                    ]
                }
            },
            geluid: {
                class: "timetable-clickable theme-info",
                data: {
                    shortName: "Gehoor",
                    paragraphs: [
                        "Slagwerk veel lawaai? Ontdek tijdens deze infosessies hoe je een kamer slagwerkproof kan maken en hoe je je gehoor kan beschermen tegen al het slagwerkgeweld."
                    ]
                }
            },
            drumparty: this.drumpartyOptions
        }
    }

    getLineUp() {
        return {
            saturday: {
                locations: ['Zaal'],
                events: [
                    {
                        name: 'Drumparty',
                        location: 'Zaal',
                        startDate: new Date(2016, 2, 18, 18, 30),
                        endDate: new Date(2016, 2, 18, 23, 0),
                        options: this.getOptions().drumparty
                    }
                    ,
                    {
                        name: 'After-Drumparty',
                        location: 'Zaal',
                        startDate: new Date(2016, 2, 18, 23, 0),
                        endDate: new Date(2016, 2, 19, 3, 0),
                        options: {
                            class: 'event-podium'
                        }
                    }
                ]
            },
            sunday: {
                locations: ['Zaal', 'Zaal zijkant', 'Inkomhal A', 'Inkomhal B',  'Bosmuseum', 'Jeugdhuis', 'Bureel 1 (groot)', 'Bureel 2 (klein)'],
                events: [
                    {
                        name: 'Roland electronische try out',
                        location: 'Inkomhal A',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                            class: "timetable-clickable theme-commercieel",
                            data: {
                                image: "/img/sponsors/sponsor_hoofd_roland.png",
                                paragraphs: [
                                    "Maak kennis met de nieuwste generatie electronische drums van Roland. Kom een electronisch drumstel proberen en ontdek de mogelijkheden."
                                ]
                            }
                        }
                    },
                    {
                        name: 'Adams promo stand',
                        location: 'Inkomhal B',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: {
                            class: "timetable-clickable theme-commercieel",
                            data: {
                                image: "/img/sponsors/sponsor_hoofd_adams.jpg",
                                paragraphs: [
                                    "Als slagwerkspecialist en hoofdsponsor zal Adams in de inkomhal staan met een assortiment stokken, slagwerkacessoires en enkele instrumenten. "
                                ]
                            }
                        }
                    },
                    {
                        name: 'Geschiedenis van de drumklas',
                        location: 'Zaal zijkant',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 20, 30),
                        options: {
                            class: "theme-commercieel",
                            data: {
                                image: "/img/muziekschool/kulturama.JPG",
                            }
                        }
                    },
                    {
                        name: 'Wereld percussie [sessie 1]',
                        location: 'Bosmuseum',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 13, 45),
                        options: this.getOptions().wereldpercussie
                    },
                    {
                        name: 'Wereld percussie [sessie 2]',
                        location: 'Bosmuseum',
                        startDate: new Date(2016, 2, 19, 15, 0),
                        endDate: new Date(2016, 2, 19, 15, 45),
                        options: this.getOptions().wereldpercussie
                    },
                    {
                        name: 'Marimba [sessie 1]',
                        location: 'Bosmuseum',
                        startDate: new Date(2016, 2, 19, 14, 0),
                        endDate: new Date(2016, 2, 19, 14, 45),
                        options: this.getOptions().marimba
                    },
                    {
                        name: 'Marimba [sessie 2]',
                        location: 'Bosmuseum',
                        startDate: new Date(2016, 2, 19, 16, 0),
                        endDate: new Date(2016, 2, 19, 16, 45),
                        options: this.getOptions().marimba
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 1]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 12, 30),
                        endDate: new Date(2016, 2, 19, 13, 0),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 2]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 13, 30),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 3]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 13, 30),
                        endDate: new Date(2016, 2, 19, 14, 0),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Stemmen [Sessie 1]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 14, 0),
                        endDate: new Date(2016, 2, 19, 14, 30),
                        options: this.getOptions().stemmen
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 4]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 14, 30),
                        endDate: new Date(2016, 2, 19, 15, 0),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 5]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 15, 0),
                        endDate: new Date(2016, 2, 19, 15, 30),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 6]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 15, 30),
                        endDate: new Date(2016, 2, 19, 16, 0),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Stemmen [Sessie 2]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 16, 0),
                        endDate: new Date(2016, 2, 19, 16, 30),
                        options: this.getOptions().stemmen
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 7]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 16, 30),
                        endDate: new Date(2016, 2, 19, 17, 0),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 8]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 17, 0),
                        endDate: new Date(2016, 2, 19, 17, 30),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Kennismaking met drums [Sessie 9]',
                        location: 'Jeugdhuis',
                        startDate: new Date(2016, 2, 19, 17, 30),
                        endDate: new Date(2016, 2, 19, 18, 0),
                        options: this.getOptions().drums
                    },
                    {
                        name: 'Tuning en samples maken [Sessie 1]',
                        location: 'Bureel 1 (groot)',
                        startDate: new Date(2016, 2, 19, 12, 45),
                        endDate: new Date(2016, 2, 19, 13, 15),
                        options: this.getOptions().sampling
                    },
                    {
                        name: 'Tuning en samples maken [Sessie 2]',
                        location: 'Bureel 1 (groot)',
                        startDate: new Date(2016, 2, 19, 13, 15),
                        endDate: new Date(2016, 2, 19, 13, 45),
                        options: this.getOptions().sampling
                    },
                    {
                        name: 'Tuning en samples maken [Sessie 3]',
                        location: 'Bureel 1 (groot)',
                        startDate: new Date(2016, 2, 19, 14, 15),
                        endDate: new Date(2016, 2, 19, 14, 45),
                        options: this.getOptions().sampling
                    },
                    {
                        name: 'Tuning en samples maken [Sessie 4]',
                        location: 'Bureel 1 (groot)',
                        startDate: new Date(2016, 2, 19, 14, 45),
                        endDate: new Date(2016, 2, 19, 15, 15),
                        options: this.getOptions().sampling
                    },
                    {
                        name: 'Tuning en samples maken [Sessie 5]',
                        location: 'Bureel 1 (groot)',
                        startDate: new Date(2016, 2, 19, 15, 45),
                        endDate: new Date(2016, 2, 19, 16, 15),
                        options: this.getOptions().sampling
                    },
                    {
                        name: 'Tuning en samples maken [Sessie 6]',
                        location: 'Bureel 1 (groot)',
                        startDate: new Date(2016, 2, 19, 16, 15),
                        endDate: new Date(2016, 2, 19, 16, 45),
                        options: this.getOptions().sampling
                    },
                    {
                        name: 'Gehoor & isolatie [Sessie 1]',
                        location: 'Bureel 2 (klein)',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 13, 30),
                        options: this.getOptions().geluid
                    },
                    {
                        name: 'Gehoor & isolatie [Sessie 2]',
                        location: 'Bureel 2 (klein)',
                        startDate: new Date(2016, 2, 19, 13, 30),
                        endDate: new Date(2016, 2, 19, 14, 0),
                        options: this.getOptions().geluid
                    },
                    {
                        name: 'Gehoor & isolatie [Sessie 3]',
                        location: 'Bureel 2 (klein)',
                        startDate: new Date(2016, 2, 19, 14, 30),
                        endDate: new Date(2016, 2, 19, 15, 0),
                        options: this.getOptions().geluid
                    },
                    {
                        name: 'Gehoor & isolatie [Sessie 4]',
                        location: 'Bureel 2 (klein)',
                        startDate: new Date(2016, 2, 19, 15, 0),
                        endDate: new Date(2016, 2, 19, 15, 30),
                        options: this.getOptions().geluid
                    },
                    {
                        name: 'Gehoor & isolatie [Sessie 5]',
                        location: 'Bureel 2 (klein)',
                        startDate: new Date(2016, 2, 19, 16, 0),
                        endDate: new Date(2016, 2, 19, 16, 30),
                        options: this.getOptions().geluid
                    },
                    {
                        name: 'Gehoor & isolatie [Sessie 6]',
                        location: 'Bureel 2 (klein)',
                        startDate: new Date(2016, 2, 19, 16, 30),
                        endDate: new Date(2016, 2, 19, 17, 0),
                        options: this.getOptions().geluid
                    },
                    {
                        name: 'Clinic: Jordi Geuens & Erik Rademakers',
                        location: 'Zaal',
                        startDate: new Date(2016, 2, 19, 13, 0),
                        endDate: new Date(2016, 2, 19, 14, 15),
                        options: {
                            class: 'event-podium timetable-clickable',
                            data: {
                                shortName: 'Clinic: Jordi',
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
                        name: 'Clinic: Bram Raeymaekers',
                        location: 'Zaal',
                        startDate: new Date(2016, 2, 19, 14, 30),
                        endDate: new Date(2016, 2, 19, 15, 45),
                        options: {
                            class: 'event-podium timetable-clickable',
                            data: {
                                shortName: 'Clinic: Bram',
                                image: "/img/drummers/bram_raeymaekers.png",
                                paragraphs: [
                                    "Bram is één van de meest actieve sessie drummers in België. Hij volgde les bij o.a. Dom Famularo, Dré Pallemaerts en Stéphane Galland. Hierdoor ontwikkelde hij een zeer eigen speelstijl die hij gebruikt voor veel verschillende muziekgenres. In deze workshop toont hij een pak leuke grooves en technieken die hij toepast bij o.a. Hadise, Zap Mama, De Ketnetband, Oto-machine,… ",
                                    "Bram speelt op YAMAHA Drums en SABIAN Cymbals."
                                ]
                            }
                        }
                    },
                    {
                        name: 'Michael Schack',
                        location: 'Zaal',
                        startDate: new Date(2016, 2, 19, 16, 0),
                        endDate: new Date(2016, 2, 19, 17, 30),
                        options: {
                            class: 'event-podium timetable-clickable',
                            data: {
                                shortName: 'Clinic: Push your drum',
                                image: "/img/drummers/michael_schack_3.JPG",
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
                        location: 'Zaal',
                        startDate: new Date(2016, 2, 19, 18, 30),
                        endDate: new Date(2016, 2, 19, 21, 0),
                        options: {
                            class: 'event-podium'
                        }
                    },
                ]
            }
        }
    }
}