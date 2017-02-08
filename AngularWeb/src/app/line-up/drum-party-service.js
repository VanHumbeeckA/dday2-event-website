import {Service} from "angular-decorators";
import find from "lodash/find";

@Service("DrumPartyService")
export class DrumPartyService {
    constructor() {

    }

    formatDate(datestring) {
        return new moment(datestring, "HH.mm").format("HH:mm");
    }

    getDrumPartyOptions() {
        return {
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
                ],
                tabledata: [
                    {
                        date: this.formatDate("18.30"),
                        leerling: "Lean Vannes",
                        graad: "L1",
                        nummer: "Papaoutai",
                        artist: "Stromai"
                    },
                    {
                        date: null,
                        leerling: "Jack Meert",
                        graad: "L1",
                        nummer: "Born In The U.S.A.",
                        artist: "Bruce Springsteen"
                    },
                    {
                        date: null,
                        leerling: "Can Deno",
                        graad: "L1",
                        nummer: "Where Is My Mind",
                        artist: "The Pixies"
                    },
                    {
                        date: null,
                        leerling: "Wannes Pelemans",
                        graad: "L1",
                        nummer: "The Lazy Song",
                        artist: "Bruno Mars"
                    },
                    {
                        date: null,
                        leerling: "Edward Hopwood",
                        graad: "L2",
                        nummer: "Another One Bites The Dust",
                        artist: "Queen"
                    },

                    {
                        date: this.formatDate("19.00"),
                        leerling: "Tine Lauwers",
                        graad: "L2",
                        nummer: "Eye Of The Tiger",
                        artist: "Survivor"
                    },
                    {
                        date: null,
                        leerling: "Johannes Vermeersch",
                        graad: "L2",
                        nummer: "Imagine",
                        artist: "The Beatles"
                    },
                    {
                        date: null,
                        leerling: "Michiel Roggen",
                        graad: "L2",
                        nummer: "Heathens",
                        artist: "Twenty One Pilots"
                    },
                    {
                        date: null,
                        leerling: "Rodric Peuskens",
                        graad: "L3",
                        nummer: "Come Together",
                        artist: "The Beatles"
                    },
                    {
                        date: null,
                        leerling: "Kasper Hellemans",
                        graad: "L3",
                        nummer: "Enter Sandman",
                        artist: "Metallica"
                    },
                    {
                        date: null,
                        leerling: "Felix-Jan Vandoorne",
                        graad: "L3",
                        nummer: "Can’t Stop The Feeling",
                        artist: "Justin Timberlake"
                    },
                    {
                        date: null,
                        leerling: "Paul Heijmans",
                        graad: "L3",
                        nummer: "Numb",
                        artist: "Linkin Park"
                    },
                    {
                        date: null,
                        leerling: "Tijs Franckx",
                        graad: "L4",
                        nummer: "Uptown Funk",
                        artist: "Bruno Mars"
                    },
                    {
                        date: null,
                        leerling: "Sibren Bergs",
                        graad: "L4",
                        nummer: "One For The Road ",
                        artist: "Arctic Monkeys"
                    },
                    {
                        date: null,
                        leerling: "Eli Aerts",
                        graad: "L4",
                        nummer: "Black Betty",
                        artist: "Ram Jam"
                    },
                    {
                        date: null,
                        leerling: "Eric Huyskens",
                        graad: "M1",
                        nummer: "Master Of Puppets",
                        artist: "Metallica"
                    },

                    {
                        date: this.formatDate("20.00"),
                        leerling: "Bavo Lissens",
                        graad: "M1",
                        nummer: "Smells Like Teen Spirit",
                        artist: "Nirvana"
                    },
                    {
                        date: null,
                        leerling: "Kamiel Vanhulst",
                        graad: "M1",
                        nummer: "Bombtrack",
                        artist: "Rage Against The Machine"
                    },
                    {
                        date: null,
                        leerling: "Demian Van den Berghe",
                        graad: "M1",
                        nummer: "Out Of The Black",
                        artist: "Royal Blood"
                    },
                    {
                        date: null,
                        leerling: "Otto Jost",
                        graad: "M1",
                        nummer: "Jeremy",
                        artist: "Pearl Jam"
                    },
                    {
                        date: null,
                        leerling: "Ariana Gobert",
                        graad: "M1",
                        nummer: "Trip Switch",
                        artist: "Nothing But Thieves"
                    },
                    {
                        date: null,
                        leerling: "Luca Duyckaerts",
                        graad: "M1",
                        nummer: "Dark Necessities",
                        artist: "Red Hot Chili Peppers"
                    },
                    {
                        date: null,
                        leerling: "Nienke Ceuppens",
                        graad: "M1",
                        nummer: "Perfect Strangers",
                        artist: "Jonas Blue ft. JP Cooper"
                    },
                    {
                        date: null,
                        leerling: "Oberon Defort",
                        graad: "M2",
                        nummer: "The Pretender",
                        artist: "Foo Fighters"
                    },
                    {
                        date: null,
                        leerling: "Jesse Pelemans",
                        graad: "M2",
                        nummer: "Billionaire",
                        artist: "Travie McCoy ft. Bruno Mars"
                    },
                    {
                        date: null,
                        leerling: "Loulou Hoste",
                        graad: "M2",
                        nummer: "Hopeful",
                        artist: "Bars and Melody"
                    },
                    {
                        date: null,
                        leerling: "Pieterjan Gilis",
                        graad: "M2",
                        nummer: "Under Pressure ",
                        artist: "Queen"
                    },

                    {
                        date: this.formatDate("21.00"),
                        leerling: "Oscar Swyns",
                        graad: "M2",
                        nummer: "Arabella",
                        artist: "Arctic Monkeys"
                    },
                    {
                        date: null,
                        leerling: "Jonas Dobbelaere",
                        graad: "M2",
                        nummer: "Under A Glass Moon",
                        artist: "Dream Theater"
                    },
                    {
                        date: null,
                        leerling: "Niklas von Werne",
                        graad: "M2",
                        nummer: "Almost Easy",
                        artist: "Avenged Sevenfold"
                    },
                    {
                        date: null,
                        leerling: "Eftychia Dimitriadou",
                        graad: "L1",
                        nummer: "The Unforgiven I",
                        artist: "Metallica"
                    },
                    {
                        date: null,
                        leerling: "Lieve Jansen",
                        graad: "L2",
                        nummer: "Verloren Hart Verloren Droom",
                        artist: "Johnny White"
                    },
                    {
                        date: null,
                        leerling: "Eric Salemi",
                        graad: "L3",
                        nummer: "Everybody’s Been Burned",
                        artist: "Miles Tackett"
                    },
                    {
                        date: null,
                        leerling: "Bert Tijskens",
                        graad: "L3",
                        nummer: "Sing Sing Sing",
                        artist: "Benny Goodman"
                    },
                    {
                        date: null,
                        leerling: "Willem Verstappen",
                        graad: "M1",
                        nummer: "Apollo’s Theme",
                        artist: "Intero"
                    },
                    {
                        date: null,
                        leerling: "Kris De Schepper",
                        graad: "M2",
                        nummer: "Moondance",
                        artist: "Van Morrison"
                    },
                    {
                        date: null,
                        leerling: "Simon Tijskens",
                        graad: "M2",
                        nummer: "Ride",
                        artist: "Twenty One Pilots"
                    },
                    {
                        date: null,
                        leerling: "Wannes Tijskens",
                        graad: "M2",
                        nummer: "Best Of You",
                        artist: "Foo Fighters"
                    },

                    {
                        date: this.formatDate("22.00"),
                        leerling: "Rozemarijn Claes",
                        graad: "H2",
                        nummer: "Re-Education (Through Labor)",
                        artist: "Rise Against"
                    },
                    {
                        date: null,
                        leerling: "Jacob Gernay",
                        graad: "H2",
                        nummer: "You Must Be Joking ",
                        artist: "Cirque Du Soleil"
                    },
                    {
                        date: null,
                        leerling: "Robbe Decraemer",
                        graad: "H1",
                        nummer: "Knights Of Cydonia",
                        artist: "Muse"
                    },
                    {
                        date: null,
                        leerling: "Michiel Herrebout",
                        graad: "H1",
                        nummer: "Metropolis, Pt 1: The Miracle And The Sleeper",
                        artist: "Dream Theater"
                    },
                    {
                        date: null,
                        leerling: "Frederik Goossens",
                        graad: "H2",
                        nummer: "Killing In The Name",
                        artist: "Rage Against The Machine"
                    },
                    {
                        date: null,
                        leerling: "Senne Smets",
                        graad: "H2",
                        nummer: "Smoke On The Water",
                        artist: "Deep Purple"
                    },
                    {
                        date: null,
                        leerling: "Kobe De Greef ",
                        graad: "H3",
                        nummer: "Alone",
                        artist: "Marshmello"
                    },
                    {
                        date: null,
                        leerling: "Merel Van der biesen",
                        graad: "H3",
                        nummer: "Dance, Dance",
                        artist: "Fall Out Boy"
                    },
                    {
                        date: null,
                        leerling: "Brent Ausloos",
                        graad: "H3",
                        nummer: "Closer",
                        artist: "The Chainsmokers ft. Halsey"
                    },
                    {
                        date: null,
                        leerling: "Catherine Denayer",
                        graad: "H3",
                        nummer: "Together",
                        artist: "Selah Sue ft. Childish Gambino"
                    },

                ]
            }
        }
    }
}
