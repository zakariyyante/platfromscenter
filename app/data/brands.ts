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
    id: "bwin-fr",
    name: "Bwin",
    logo: "/brands/bwin_dark.png",
    rating: 9.9,
    bonus: "Votre mise remboursée jusqu'à 100€",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573&clickid=",
    isMobile: false,
    votes: 2556,
  },
  {
    id: "SlotRush",
    name: "SlotRush",
    logo: "/brands/SLOTRUSH.png",
    rating: 9.8,
    bonus: "Jusqu'à 4000€ + 200FS",
    url: "https://linkslotrush.com/iyhqswoke?subid=SlotRush-SL2FR24&clickid=",
    isMobile: true,
    votes: 12450,
    
  },
  {
    id: "SpinFormula",
    name: "SpinFormula",
    logo: "/brands/Spinformula.svg",
    rating: 9.8,
    bonus: "550% jusqu’à 15000€ + 550FS",
    url: "https://corsa.cxclick.com/visit/?bta=35059&nci=5345&utm_campaign=SpinFormula-SL2FR24&afp=",
    isMobile: true,
    votes: 12450,
    
    
  },
  {
    id: "BravoPlay",
    name: "BravoPlay",
    logo: "/brands/bravoplay.svg",
    rating: 9.8,
    bonus: "Jusqu'à 5000€ + 150FS",
    url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-SL2FR24&aff_click_id=",
    isMobile: true,
    votes: 12450,
    
  },
];
