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
 
  // {
  //     id: "Lussurio",
  //     name: "Lussurio",
  //     logo: "/brands/lussurio.svg",
  //     rating: 9.9,
  //     bonus: "550% JUSQU'À 3485€ + 400 TOURS GRATUITS",
  //     url: "https://lussurios.com/afweyuz2fh?subid=Lussurio-SL2FR35&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  // },
  {
        id: "SpinMillion",
        name: "SpinMillion",
        logo: "/brands/spinmillion.png",
        rating: 9.9,
        bonus: "200% JUSQU'À 1000€ + 100 TOURS GRATUITS",
        url: "https://bestcpa.online/click?o=542&a=36&sub_id1=SpinMillion-SL2FR35&aff_click_id=",
        isMobile: true,
        votes: 12450,
      },

  {
        id: "LuckyGem",
        name: "LuckyGem",
        logo: "/brands/lucky.svg",
        rating: 9.9,
        bonus: "700% + 700 TOURS GRATUITS",
        url: "https://bestcpa.online/click?o=440&a=36&link_id=829&sub_id1=LuckyGem-SL2FR35&aff_click_id=",
        isMobile: true,
        votes: 12450,
      },
      {
        id: "SpinFormula",
        name: "SpinFormula",
        logo: "/brands/Spinformula.svg",
        rating: 9.8,
        bonus: "550% JUSQU'À 15000€ + 550 TOURS GRATUITS",
        url: "https://corsa.cxclick.com/visit/?bta=35059&nci=5345&utm_campaign=SpinFormula-SL2FR35&afp=",
        isMobile: true,
        votes: 12450,
        
      },
      {
        id: "GambleGorilla",
        name: "GambleGorilla",
        logo: "/brands/gamblegorilla.svg",
        rating: 9.8,
        bonus: "350% JUSQU'À 2000€ + 1000 TOURS GRATUITS",
        url: "https://go.froggypartners.com/visit/?bta=35987&nci=7347&afp1=GambleGorilla-SL2FR35&afp=",
        isMobile: true,
        votes: 12450,
        
      },
      {
        id: "BravoPlay",
        name: "BravoPlay",
        logo: "/brands/bravoplay.svg",
        rating: 9.8,
        bonus: "JUSQU'À 5000€ + 150 TOURS GRATUITS",
        url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-SL2FR35&aff_click_id=",
        isMobile: true,
        votes: 12450,
        
      },
      {
            id: "Emberbet",
            name: "Emberbet",
            logo: "/brands/emerbet.svg",
            rating: 9.9,
            bonus: "200% JUSQU'À 1000€ + 100 TOURS GRATUITS",
            url: "https://bestcpa.online/click?o=650&a=36&link_id=1042&sub_id1=EmberBet-SL2FR35&aff_click_id=",
            isMobile: true,
            votes: 12450,
          },
      // {
      //       id: "WinKingdom",
      //       name: "WinKingdom",
      //       logo: "/brands/winkingdom.svg",
      //       rating: 9.9,
      //       bonus: "JUSQU'À 15000€ + 550TG",
      //       url: "https://winkingdom.media/n1ol6qkvws?subid=WinKingdom-SL2FR35&visit_id=",
      //       isMobile: true,
      //       votes: 12450,
      //     },
  // {
  //   id: "VillaSpin",
  //   name: "VillaSpin",
  //   logo: "/brands/villaspin.webp",
  //   rating: 9.8,
  //   bonus: "500% JUSQU'À 15000€ + 500TG",
  //   url: "https://go.drctvoodoo.com/click?pid=6&offer_id=731&sub_id1=VillaSpin-SL2FR35&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //       id: "WinPlace",
  //       name: "WinPlace",
  //       logo: "/brands/winplace.png",
  //       rating: 9.9,
  //       bonus: "250% JUSQU'À 14000€ + 300TG ",
  //       url: "https://winplacepartner.media/n1q6puxsfo?subid=WinPlace-SL2FR35&visit_id=",
  //       isMobile: true,
  //       votes: 12450,
  //     },

//     {
//     id: "BetBluff",
//     name: "BetBluff",
//     logo: "/brands/BETBLUFF.svg",
//     rating: 9.9,
//     bonus: "350% JUSQU'À 2000€ + 1000TG ",
//     url: "https://go.evoaffiliates.com/visit/?bta=38782&nci=6556&afp1=BetBluff-SL2FR35&afp=",
//     isMobile: true,
//     votes: 12450,
//   },

   
//   {
//       id: "RoyalDogs",
//       name: "RoyalDogs",
//       logo: "/brands/royal.webp",
//       rating: 9.9,
//       bonus: "250% JUSQU'À 2500€",
//       url: "https://hawkaffiliates.cxclick.com/visit/?bta=35110&nci=5358&utm_campaign=RoyalDogs-SL2FR35&afp=",
//       isMobile: true,
//       votes: 12450,
//   },
  
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


 
];
