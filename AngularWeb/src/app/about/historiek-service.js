import {Service, Inject} from "angular-decorators";
import find from "lodash/find";

@Inject("$state")
@Service("HistoriekService")
export class HistoriekService {
    constructor() {

    }

    formatDate(datestring) {
        return new moment(datestring, "YYYYMM").format("MMMM YYYY");
    }

    getHistoriek() {
        return {
            paragraphs: [
                "25 jaar drumklas, met heel wat activiteit… Hoe kan het ook anders, met de hyperkinetische energie die rond drummers hangt (behalve op zaterdagvoormiddagen…).",
                "Stil zitten staat niet in ons woordenboek. Dat zie je wel aan de activiteiten die steeds weer op stapel staan. Naast de traditionele jaarlijkse klasconcerten, schoolfeesten, drumparty’s… krijg je hier nog een kort overzicht van de geschiedenis van de slagwerkklas:",
            ],
            paragraphs2: [
                "25 jaar met onvergetelijke ervaringen (en de mat waar de eerste oefeningen op gespeeld werden heeft inmiddels plaats gemaakt voor een heus instrumentarium). Deze herinneringen zullen op D-Day 2.0 ongetwijfeld terug bovengehaald worden. Hopelijk kan D-Day 2.0 zelf toegevoegd worden aan de evenementen waar nog lang over gesproken zal worden!",
                "De huidige slagwerkklas (samenspel en instrumentaal ensemble): Can Deno, Jack Meert, Leon Vannes, Wannes Pelemans, Eftychia Dimitriadou, Michiel Roggen, Edward Hopwood, Tine Lauwers, Johannes Vermeersch, Lieve Jansen, Bert Tijskens, Felix-Jan Vandoorne, Paul Heijmans, Rodric Peuskens, Eric Salemi, Tijs Franckx, Eli Aerts, Sibren Bergs, Nienke Ceuppens, Otto Jost, Kamiel Vanhulst, Luca Duyckaerts, Ariana Gobert, Eric Huyskens, Bavo Lissens, Demian Van den Berghe, Willem Verstappen, Pieterjan Gilis, Jesse Pelemans, Jonas Dobbelaere, Niklas von Werne, Loulou Hoste, Simon Tijskens, Kristien De Schepper, Oberon Defort, Oscar Swyns, Wannes Tijskens, Robbe Decraemer, Michiel Herrebout, Jacob Gernay,  Frederik Goossens, Rozemarijn Claes, Catherine Denayer, Merel Van der biesen, Brent Ausloos, Kobe Degreef, Senne Smets, Sam Brouckmans, Ilse Barbier.",
                "Leraars: Pieter Mellaerts, Tom Pipeleers en Guy Remmerie"
            ],
            tabledata: [
                {
                    date: this.formatDate("199209"),
                    event: [
                        "Eerste drumles aan de gemeentelijke muziekacademie te Oud-Heverlee. Als eerst leerlingen mochten we verwelkomen: Bieke Brants, Pieter Bastin, Dieder Vangindertael en Isaak Yperman.",
                        "<em>Alleen een lokaal hadden we toen, en een mat waar de eerste oefeningen op gespeeld werden. Van trommels of een drumstel was toen helemaal nog geen sprake…</em>",
                        "Leraar: Guy Remmerie"
                    ]
                }, {
                    date: this.formatDate("199401"),
                    event: [
                        "Eerste Schoolfeest: Luchtballon / Reis rond de wereld"
                    ]
                }, {
                    date: this.formatDate("199601"),
                    event: [
                        "Deelname aan concert met Japanse marimbavirtuose Keiko Abe in CC De Warande Turnhout",
                    ]
                }, {
                    date: this.formatDate("199610"),
                    event: [
                        "Rockpodium Oud-Heverlee"
                    ]
                }, {
                    date: this.formatDate("199804"),
                    event: [
                        "In de ban van Japan: Japanse Dag in CC te Beringen – Paal"
                    ]
                }, {
                    date: this.formatDate("199811"),
                    event: [
                        "Flight 121, concert georganiseerd door Kon. Harmonie St.-Hilarius Bierbeek in CC De Borre"
                    ]
                }, {
                    date: this.formatDate("199903"),
                    event: [
                        "Lenteconcert georganiseerd door Kon. Harmonie De Weergalm Blanden"
                    ]
                }, {
                    date: this.formatDate("200001"),
                    event: [
                        "Zoet-Water-Proms (georganiseerd door Gem. Academie Voor Muziek en Woord en de Kon. Harmonie De Weergalm Blanden) in De Roosenberg, Oud-Heverlee"
                    ]
                }, {
                    date: this.formatDate("200002"),
                    event: [
                        "Egon Loosvelt met Will Tura in concert te Aarschot/Heist-op-den-Berg"
                    ]
                }, {
                    date: this.formatDate("200003"),
                    event: [
                        "Toon De Jonghe Laureaat Jong Tenuto"
                    ]
                }, {
                    date: this.formatDate("200110"),
                    event: [
                        "<strong>D-Day</strong>"
                    ]
                }, {
                    date: this.formatDate("200201"),
                    event: [
                        "2de Zoet-Water-Proms"
                    ]
                }, {
                    date: this.formatDate("200210"),
                    event: [
                        "Leraar: Luk Artois (tot juni 2004)"
                    ]
                }, {
                    date: this.formatDate("200401"),
                    event: [
                        "3de Zoet-Water-Proms"
                    ]
                }, {
                    date: this.formatDate("200405"),
                    event: [
                        "Arenatour met Belle Perez in Mechelen, Roeselare, Oostende, Bree, Hasselt…"
                    ]
                }, {
                    date: this.formatDate("200409"),
                    event: [
                        "Leraar: Tom Maes (tot december 2006. Met een korte vervanging door Wim Eggermont)",
                    ]
                }, {
                    date: this.formatDate("200609"),
                    event: [
                        "Drumguys Scholenveldloop De Meerdaelse Jonge Crosser",
                        "Drumguys voor 5 jaar Alegria Leuven"
                    ]
                }, {
                    date: this.formatDate("200701"),
                    event: [
                        "Leraar: Tom Pipeleers",
                        "Leraar: Peter Préal (tot juni 2008)",
                        "<em>De eerste collega’s van Guy Remmerie wiens familienaam geen biermerk is….</em>"
                    ]
                }, {
                    date: this.formatDate("200702"),
                    event: [
                        "4de Zoet-Water-Proms"
                    ]
                }, {
                    date: this.formatDate("200709"),
                    event: [
                        "Drumguys Dorpsfeest Haasrode"
                    ]
                }, {
                    date: this.formatDate("200711"),
                    event: [
                        "Boempatat"
                    ]
                }, {
                    date: this.formatDate("200802"),
                    event: [
                        "Kulturama te Leuven"
                    ]
                }, {
                    date: this.formatDate("201009"),
                    event: [
                        "Six-Pack-Drums voor 9 jaar Alegria Leuven"
                    ]
                }, {
                    date: this.formatDate("201010"),
                    event: [
                        "The Return Of Boempatat"
                    ]
                }, {
                    date: this.formatDate("201012"),
                    event: [
                        "Kersttour ‘Kerstklanken Voor Iedereen’ in de kerken van Oud-Heverlee, Blanden, Sint-Joris-Weert en Haasrode",
                        "<em>Dat was de laatste witte Kerst. En of we dat geweten hebben….</em>"
                    ]
                }, {
                    date: this.formatDate("201104"),
                    event: [
                        "Deelname aan ‘Lof Der Zotheid’"
                    ]
                }, {
                    date: this.formatDate("201105"),
                    event: [
                        "Brunchconcert Moederdag ism Harmonie Blanden"
                    ]
                }, {
                    date: this.formatDate("201204"),
                    event: [
                        "Open Avond Guatemala: CM te Kessel-Lo"
                    ]
                }, {
                    date: this.formatDate("201304"),
                    event: [
                        "Het Feest: 25 jaar academie GAMWOH"
                    ]
                }, {
                    date: this.formatDate("201410"),
                    event: ["OH Kom Eens Kijken"]
                }, {
                    date: this.formatDate("201504"),
                    event: ["Vernissage: Opluisteren Cultuurprijs Oud-Heverlee"]
                }, {
                    date: this.formatDate("201509"),
                    event: [
                        "Drumband Scholenveldloop De Meerdaelse Jonge Crosser ",
                        "Leraar Pieter Mellaerts"
                    ]
                }, {
                    date: this.formatDate("201511"),
                    event: ["Zoet-Water-Festival georganiseerd door Kon. Harmonie De Weergalm Blanden"]
                }, {
                    date: this.formatDate("201602"),
                    event: ["Frederik Goossens Provinciaal Kampioen VLAMO Vlaams Brabant"]
                }, {
                    date: this.formatDate("201702"),
                    event: ["<strong>D-Day 2.0</strong>"]
                }

            ]
        }
    }
}
