export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
    {
    id: "TowerCasino",
    name: "TowerCasino",
    logo: "/brands/tower.png",
    rating: 9.9,
    bonus: "100% JUSQU'À 2000€ + 300TG",
    url: "https://twcs.joklora.com/?mid=372329_2243631&subid=TowerCasino-SL2FR35&clickid=",
    isMobile: true,
    votes: 12450,
  },
  {
        id: "LuckyGem",
        name: "LuckyGem",
        logo: "/brands/lucky.svg",
        rating: 9.9,
        bonus: "700% + 700TG",
        url: "https://luckygemplay.com/tmorahfie?subid=LuckyGem-SL2FR35&visit_id=",
        isMobile: true,
        votes: 12450,
      },
    {
    id: "BetBluff",
    name: "BetBluff",
    logo: "/brands/BETBLUFF.svg",
    rating: 9.9,
    bonus: "350% JUSQU'À 2000€ & 1000TG ",
    url: "https://go.evoaffiliates.com/visit/?bta=38782&nci=6556&afp1=BetBluff-SL2FR35&afp=",
    isMobile: true,
    votes: 12450,
  },
  {
      id: "RoyalDogs",
      name: "RoyalDogs",
      logo: "/brands/royal.webp",
      rating: 9.9,
      bonus: "250% JUSQU'À 2500€",
      url: "https://hawkaffiliates.cxclick.com/visit/?bta=35110&nci=5358&utm_campaign=RoyalDogs-SL2FR35&afp=",
      isMobile: true,
      votes: 12450,
  },
  
  {
    id: "bwin-fr",
    name: "Bwin",
    logo: "/brands/bwin_dark.png",
    rating: 9.9,
    bonus: "Votre mise remboursée jusqu'à 100€",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573&clickid=",
    isMobile: false,
    votes: 2556,
  },
  
//   {
//     id: "WinoCasino",
//     name: "WinoCasino",
//     logo: "/brands/wino.svg",
//     rating: 9.9,
//     bonus: "600% jusqu’à 10000€",
//     url: "https://go.afftrackio.com/visit/?bta=35487&nci=5357&utm_campaign=WinoCasino-SL2FR24&afp=",
//     isMobile: true,
//     votes: 12450,
//   },
//   {
//     id: "SlotRush",
//     name: "SlotRush",
//     logo: "/brands/SLOTRUSH.png",
//     rating: 9.8,
//     bonus: "Jusqu'à 4000€ + 200FS",
//     url: "https://linkslotrush.com/iyhqswoke?subid=SlotRush-SL2FR24&clickid=",
//     isMobile: true,
//     votes: 12450,
    
//   },
//   {
//     id: "SpinFormula",
//     name: "SpinFormula",
//     logo: "/brands/Spinformula.svg",
//     rating: 9.8,
//     bonus: "550% jusqu’à 15000€ + 550FS",
//     url: "https://corsa.cxclick.com/visit/?bta=35059&nci=5345&utm_campaign=SpinFormula-SL2FR24&afp=",
//     isMobile: true,
//     votes: 12450,
    
    
//   }, 
//   {
//     id: "BravoPlay",
//     name: "BravoPlay",
//     logo: "/brands/bravoplay.svg",
//     rating: 9.8,
//     bonus: "Jusqu'à 5000€ + 150FS",
//     url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-SL2FR24&aff_click_id=",
//     isMobile: true,
//     votes: 12450,
    
//   },
];
