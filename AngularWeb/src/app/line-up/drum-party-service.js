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
                        date: this.formatDate("18.30"),
                        leerling: "Jack Meert",
                        graad: "L1",
                        nummer: "Born In The U.S.A.",
                        artist: "Bruce Springsteen"
                    },
                    {
                        date: this.formatDate("18.30"),
                        leerling: "Can Deno",
                        graad: "L1",
                        nummer: "Where Is My Mind",
                        artist: "The Pixies"
                    },
                    {
                        date: this.formatDate("18.30"),
                        leerling: "Wannes Pelemans",
                        graad: "L1",
                        nummer: "The Lazy Song",
                        artist: "Bruno Mars"
                    },
                    {
                        date: this.formatDate("18.30"),
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
                        date: this.formatDate("19.00"),
                        leerling: "Johannes Vermeersch",
                        graad: "L2",
                        nummer: "Imagine",
                        artist: "The Beatles"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Michiel Roggen",
                        graad: "L2",
                        nummer: "Heathens",
                        artist: "Twenty One Pilots"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Rodric Peuskens",
                        graad: "L3",
                        nummer: "Come Together",
                        artist: "The Beatles"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Kasper Hellemans",
                        graad: "L3",
                        nummer: "Enter Sandman",
                        artist: "Metallica"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Felix-Jan Vandoorne",
                        graad: "L3",
                        nummer: "Can’t Stop The Feeling",
                        artist: "Justin Timberlake"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Paul Heijmans",
                        graad: "L3",
                        nummer: "Yeah 3x",
                        artist: "Chris Brown"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Tijs Franckx",
                        graad: "L4",
                        nummer: "Uptown Funk",
                        artist: "Bruno Mars"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Sibren Bergs",
                        graad: "L4",
                        nummer: "One For The Road ",
                        artist: "Arctic Monkeys"
                    },
                    {
                        date: this.formatDate("19.00"),
                        leerling: "Eli Aerts",
                        graad: "L4",
                        nummer: "Black Betty",
                        artist: "Ram Jam"
                    },
                    {
                        date: this.formatDate("19.00"),
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
                        date: this.formatDate("20.00"),
                        leerling: "Kamiel Vanhulst",
                        graad: "M1",
                        nummer: "Bombtrack",
                        artist: "Rage Against The Machine"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Demian Van den Berghe",
                        graad: "M1",
                        nummer: "Out Of The Black",
                        artist: "Royal Blood"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Otto Jost",
                        graad: "M1",
                        nummer: "Jeremy",
                        artist: "Pearl Jam"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Ariana Gobert",
                        graad: "M1",
                        nummer: "Trip Switch",
                        artist: "Nothing But Thieves"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Luca Duyckaerts",
                        graad: "M1",
                        nummer: "Dark Necessities",
                        artist: "Red Hot Chili Peppers"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Nienke Ceuppens",
                        graad: "M1",
                        nummer: "Perfect Strangers",
                        artist: "Jonas Blue ft. JP Cooper"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Oberon Defort",
                        graad: "M2",
                        nummer: "The Pretender",
                        artist: "Foo Fighters"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Jesse Pelemans",
                        graad: "M2",
                        nummer: "Billionaire",
                        artist: "Travie McCoy ft. Bruno Mars"
                    },
                    {
                        date: this.formatDate("20.00"),
                        leerling: "Loulou Hoste",
                        graad: "M2",
                        nummer: "Hopeful",
                        artist: "Bars and Melody"
                    },
                    {
                        date: this.formatDate("20.00"),
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
                        date: this.formatDate("21.00"),
                        leerling: "Jonas Dobbelaere",
                        graad: "M2",
                        nummer: "Under A Glass Moon",
                        artist: "Dream Theater"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Niklas von Werne",
                        graad: "M2",
                        nummer: "Almost Easy",
                        artist: "Avenged Sevenfold"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Eftychia Dimitriadou",
                        graad: "L1",
                        nummer: "The Unforgiven I",
                        artist: "Metallica"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Lieve Jansen",
                        graad: "L2",
                        nummer: "Verloren Hart Verloren Droom",
                        artist: "Johnny White"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Eric Salemi",
                        graad: "L3",
                        nummer: "Everybody’s Been Burned",
                        artist: "Miles Tackett"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Bert Tijskens",
                        graad: "L3",
                        nummer: "Sing Sing Sing",
                        artist: "Benny Goodman"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Willem Verstappen",
                        graad: "M1",
                        nummer: "Apollo’s Theme",
                        artist: "Intero"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Kris De Schepper",
                        graad: "M2",
                        nummer: "Moondance",
                        artist: "Van Morrison"
                    },
                    {
                        date: this.formatDate("21.00"),
                        leerling: "Simon Tijskens",
                        graad: "M2",
                        nummer: "Ride",
                        artist: "Twenty One Pilots"
                    },
                    {
                        date: this.formatDate("21.00"),
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
                        date: this.formatDate("22.00"),
                        leerling: "Jacob Gernay",
                        graad: "H2",
                        nummer: "You Must Be Joking ",
                        artist: "Cirque Du Soleil"
                    },
                    {
                        date: this.formatDate("22.00"),
                        leerling: "Robbe Decraemer",
                        graad: "H1",
                        nummer: "Knights Of Cydonia",
                        artist: "Muse"
                    },
                    {
                        date: this.formatDate("22.00"),
                        leerling: "Michiel Herrebout",
                        graad: "H1",
                        nummer: "Metropolis, Pt 1: The Miracle And The Sleeper",
                        artist: "Dream Theater"
                    },
                    {
                        date: this.formatDate("22.00"),
                        leerling: "Frederik Goossens",
                        graad: "H2",
                        nummer: "Sacrificed Sons",
                        artist: "Dream Theater"
                    },
                    {
                        date: this.formatDate("22.00"),
                        leerling: "Senne Smets",
                        graad: "H2",
                        nummer: "Smoke On The Water",
                        artist: "Deep Purple"
                    },
                    {
                        date: this.formatDate("22.00"),
                        leerling: "Kobe De Greef ",
                        graad: "H3",
                        nummer: "Alone",
                        artist: "Marshmello"
                    },
                    {
                        date: this.formatDate("22.00"),
                        leerling: "Merel Van der biesen",
                        graad: "H3",
                        nummer: "Dance, Dance",
                        artist: "Fall Out Boy"
                    },
                    {
                        date: this.formatDate("22.00"),
                        leerling: "Brent Ausloos",
                        graad: "H3",
                        nummer: "Closer",
                        artist: "The Chainsmokers ft. Halsey"
                    },
                    {
                        date: this.formatDate("22.00"),
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
