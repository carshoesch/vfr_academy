import dummy1 from './assets/img/rugby_academy_hero_dummy.jpg'
import dummy2 from './assets/img/rugby_academy_hero_dummy2.jpg'

const cardData = [
    {
        id: 0,
        creationDate: '21_02_2023',
        title: 'Masterclass',
        position: '1. Reihe',
        positionRaw: 'front_row',
        description: 'mit Michel Poppmaier, Headcoach Frankfur 1880 und ehemaliger deutscher Nationalspieler',
        image: dummy1,
        // todo: need to redirect to a certain page based on the id of the object 
    },
    {
        id: 1,
        title: 'Masterclass',
        creationDate: '21_02_2023',
        position: 'Innen',
        positionRaw: 'centre',
        description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
        image: dummy2,
        cardLink: 'https://www.google.de'
    },
    {
        id: 2,
        title: 'Masterclass',
        creationDate: '21_02_2023',
        position: '2. Reihe',
        positionRaw: 'second_row',
        description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
        image: dummy2,
        cardLink: 'https://www.google.de'
    },
    {
        id: 3,
        title: 'Masterclass',
        creationDate: '21_02_2023',
        position: 'Flanker & Nr. 8',
        positionRaw: 'flanker_nr8',
        description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
        image: dummy2,
        cardLink: 'https://www.google.de'
    },
    {
        id: 4,
        title: 'Masterclass',
        creationDate: '21_02_2023',
        position: 'Gedrängehalb',
        positionRaw: 'scrumhalf',
        description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
        image: dummy2,
        cardLink: 'https://www.google.de'
    },
]

export default cardData