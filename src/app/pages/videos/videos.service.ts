import { Injectable } from '@angular/core';
import { Video } from '../../shared/models/video.model';



@Injectable({
    providedIn: 'root'
})
export class VideosService {

    constructor() { }

    getVideoByIndex(i: number) {
        return this.videos[i]
    }

    getVideos() {
        return this.videos
    }

    videos: Video[] = [
        {
            title: 'De Wachtkamer',
            subtitle: 'Alzheimer',
            src: 'https://player.vimeo.com/video/164251046?h=54848425e8',
            description: 'Als Lots Stam naar zangles gaat, staat de docent haar op de hoek van de straat al op te wachten. Dat is nodig, want Lots weet soms de weg niet meer. Een paar jaar geleden werd zij geconfronteerd met geheugenproblemen, die in ernst toenemen. Samen met haar man Joop geniet Lots, ondanks dat, met volle teugen van het leven zoals het komt. Maar ze wordt onzeker en voelt zich steeds vaker eenzaam. Wil Lots weten wat er met haar aan de hand is? Of blijven ze verre van de medische molen nu het leven hun nog zoveel te bieden heeft? Wat doe je met een eventuele ziekte waar geen enkele remedie tegen is? In deze aflevering geven Joop en Lots een inkijkje in hun leven waarin ze om leren gaan met ernstige geheugenproblemen; en gaan zij zelf op zoek naar het antwoord op de vraag: willen we het weten?'
        },
        {
            title: 'De Wachtkamer ',
            subtitle: 'Dwangstoornis',
            src: "https://player.vimeo.com/video/164386140?h=59ece06bbe",
            description: 'Youri is 18 jaar en hij lijdt aan een extreme dwangstoornis. Zijn ouders zijn ten einde raad. Wat moeten ze met hun zoon beginnen? Hoe komt hij van zijn stoornis af? En komt er een moment ,dat je als ouders moet erkennen dat je niet langer voor je kind kan zorgen?'
        },
        {
            title: 'De Wachtkamer ',
            subtitle: 'De truc van het leven',
            src: "https://player.vimeo.com/video/164244837?h=0271e2399a",
            description: ''
        },
        {
            title: 'Van Oord ',
            subtitle: 'Marine ingenuity',
            src: "https://player.vimeo.com/video/164256394?h=6efc2b3f7d",
            description: 'In just two words, marine ingenuity, we express that we are passionate dredging and marine contractors with a worldwide innovative approach to meet your challenges. Our people – who manage a versatile fleet – specialise in dredging and offshore projects (oil, gas and wind).   Van Oord is a leading international contractor. Its head office is located in Rotterdam, the Netherlands. The company\'s expertise ranges from design to execution and it has been involved in such noteworthy projects as Palm Jumeirah in Dubai, the port of Rotterdam\'s Maasvlakte 2 expansion, trench dredging and backfilling in northern Russia, and the construction of several offshore wind farms in the North Sea.'
        },
        {
            title: 'Mevrouw de professor',
            subtitle: 'Vrouwen in de wetenschap',
            src: "https://player.vimeo.com/video/79479722?h=94ffd61619",
            description: ''
        },
        {
            title: 'Antonius Ziekenhuis',
            subtitle: 'Logo',
            src: "https://player.vimeo.com/video/79396559?h=bdd32f742f",
            description: ''
        },
        {
            title: 'Milka',
            subtitle: 'Candybar',
            src: "https://player.vimeo.com/video/79654710?h=278af97e1b",
            description: ''
        },
        {
            title: 'Antonius Ziekenhuis',
            subtitle: 'Tv Utrecht',
            src: "https://player.vimeo.com/video/79658436?h=834c0d553a",
            description: ''
        },
        {
            title: 'Nickelodeon',
            subtitle: 'Wensdagmiddag',
            src: "https://player.vimeo.com/video/79685398?h=e9c23192c7",
            description: ''
        },
        {
            title: 'Porsche',
            subtitle: 'Cayenne',
            src: "https://player.vimeo.com/video/78908131?h=3db80666e4",
            description: ''
        },
        {
            title: 'Nederland',
            subtitle: 'op zn kop',
            src: "https://player.vimeo.com/video/78908130?h=d30ce39d68",
            description: ''
        },
        {
            title: 'De Holland',
            subtitle: '08-10-09',
            src: "https://player.vimeo.com/video/78907883?h=0b59a4fd67",
            description: ''
        },
        {
            title: 'Alleman',
            subtitle: '09-10-09',
            src: "https://player.vimeo.com/video/78907882?h=fbdc675766",
            description: ''
        },
        {
            title: 'George Bush',
            subtitle: '9-11',
            src: "https://player.vimeo.com/video/79671672?h=4c5268bbed",
            description: ''
        },
        {
            title: 'Formule 1',
            subtitle: '06-10-09',
            src: "https://player.vimeo.com/video/78907885?h=e0508f7cd5",
            description: ''
        },
        {
            title: 'MAN',
            subtitle: 'Presentatie nieuwe vrachtwagem',
            src: "https://player.vimeo.com/video/79679624?h=4984eaa9dd",
            description: ''
        },
        {
            title: 'Antonius Ziekenhuis',
            subtitle: 'Onderzoek helpt',
            src: "https://player.vimeo.com/video/79667927?h=702a3a4d25",
            description: ''
        },
        {
            title: 'Nickelodeon',
            subtitle: 'Kindernet / Preschool',
            src: "https://player.vimeo.com/video/78908129?h=f0459a8065",
            description: ''
        },
        {
            title: 'Japan',
            subtitle: '',
            src: "https://player.vimeo.com/video/78908127?h=ba320f0945",
            description: ''
        },
        {
            title: 'KRO',
            subtitle: 'Zo is het leven',
            src: "https://player.vimeo.com/video/78907884?h=d334a7de23",
            description: ''
        },
    ]
}
// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78907884?h=d334a7de23" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78908127?h=ba320f0945" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78908129?h=f0459a8065" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/79667927?h=702a3a4d25" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/79679624?h=4984eaa9dd" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78907885?h=e0508f7cd5" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/79671672?h=4c5268bbed" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78907882?h=fbdc675766" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78907883?h=0b59a4fd67" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78908130?h=d30ce39d68" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/78908131?h=3db80666e4" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/79685398?h=e9c23192c7" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/79658436?h=834c0d553a" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>

// <iframe title="vimeo-player" src = "https://player.vimeo.com/video/79654710?h=278af97e1b" width = "640" height = "360" frameborder = "0"    allowfullscreen > </iframe>
