import { Product } from "./email.model";

export const SEND_EMAIL_GENERAL_TEXT = 'https://indahbody.africa/api/general-email.php';
export const COMPANY_EMIAL = 'inquiries@indahbody.africa';
export const ORDER = 'ORDER';



export const SKIN_TYPES: any[] = [
  {
    Id: 'Normal-Skin',
    Name: 'Normal Skin',
    Description: `This skin is neither too dry nor too oily.
       It has regular texture, no imperfections and a clean, soft appearance, and does not need special care.`,
    Icon: 'assets/images/i1.png'
  },
  {
    Id: 'Sensitive-Skin',
    Name: 'Sensitive Skin',
    Description: `
      Sensitive skin is more prone to react to stimuli to which normal skin has no reaction.
      It is a fragile skin, usually accompanied by feelings of discomfort, such as heat, tightness, redness or itching.
      It is a delicate skin that needs more care to fight dryness, roughness and its usual appearance.
      `,
    Icon: 'assets/images/i2.png'
  },
  {
    Id: 'Dry-Skin',
    Name: 'Dry Skin',
    Description: `
      In many cases, dry skin is caused by external factors such as the weather ,
      low air humidity and immersion in hot water, and it is usually temporary.
It is generally characterized by a feeling of tightness and roughness.
  It may also acquire an ashy gray color, with occurrence of desquamation, itching, redness and small cracks.
      `,
    Icon: 'assets/images/i3.png'
  },
  // {
  //   Id: 'Normal-Skin',
  //   Name: 'Normal Skin',
  //   Description: `
  //     Oily skin has a porous, humid and bright appearance. It is caused 
  //     by excessive fat production by sebaceous glands, 
  //     and usually determined by genetic and/or hormonal causes.
  //     `,
  //   Icon: 'assets/images/i4.png'
  // },
  {
    Id: 'Oily-Skin',
    Name: 'Oily  Skin',
    Description: `
    Oily skin occurs when the sebaceous glands produce too much sebum, or oil, 
    which can make it look shiny or greasy. Excess sebum can also block pores and lead to pimples.
     Areas most affected are the face, neck, chest and back.

    Many people have oily skin during puberty, but some people’s skin is oily all their life,
     because of predisposing genes or hormones. If your parents had oily skin, you may have it, too.
      And any hormonal changes – due to menstruation, pregnancy, emotional situations, 
    the transition into menopause – can also cause skin to become oily.
      `,
    Icon: 'assets/images/oily.png'
  },
  {
    Id: 'Combination-Skin',
    Hided: true,
    Name: 'Combination   Skin',
    Description: `
    Combination Skin Type
Your skin can be dry or normal in some areas
 and oily in others, such as the T-zone (nose, forehead, and chin).
  Many people have this type. It may need slightly different care in different areas.
\n

  Combination skin can have:

  Pores that look larger than normal, because they’re more open
  Blackheads
  Shiny skin
      `,
    Icon: 'assets/images/comp.png'
  },


];


export const PRODUCTS: Product[] = [
  {
    Name: 'Foaming facial cleanser',
    Description: ``,
    Icon: 'assets/images/products/Foaming-facial-cleanser.png',
    Price: 225,
    Quantity: 1,
    Category: 'All skin types'
  },
  {
    Name: 'body polish',
    Description: ``,
    Icon: 'assets/images/products/Sugar-polish.png',
    Icon2: 'assets/images/products/SuperPolish2.png',
    Price: 115,
    Quantity: 1,
    Category: 'Normal-skin & sensitive-skin'
  },
  {
    Name: 'Vitamin C Serum',
    Description: ``,
    Icon: 'assets/images/products/Vitamin-C-Serum.png',
    Price: 280,
    Quantity: 1,
    Category: 'Combination-skin & Normal-Skin'
  },
  {
    Name: 'Kaoline Clay mask',
    Description: ``,
    Icon: 'assets/images/products/Kaoline-Clay-mask.png',
    Price: 110,
    Quantity: 1,
    Category: 'Sensitive-skin & oily-skin'
  },
  {
    Name: 'Bath milk',
    Description: ``,
    Icon: 'assets/images/products/Bath-milk.png',
    Price: 110,
    Quantity: 1,
    Category: 'Sensitive-skin & normal-skin'
  },
  {
    Name: 'Rosea mist spray',
    Description: ``,
    Icon: 'assets/images/products/Rosea-mist-spray.png',
    Price: 95,
    Quantity: 1,
    Category: 'All skin types'
  },
  {
    Name: 'Bath bombs(3s)',
    Description: ``,
    Icon: 'assets/images/products/Bathbombs.png',
    Price: 110,
    Quantity: 1,
    Category: 'All skin types'
  },
  {
    Name: 'Honey and aloe mask',
    Description: ``,
    Icon: 'assets/images/products/Honey-and-aloe-mask.png',
    Icon2: 'assets/images/products/Honey-and-aloe-mask-2.png',
    Price: 110,
    Quantity: 1,
    Category: 'All skin types'
  },
  {
    Name: 'Himalayan salt scrub ',
    Description: ``,
    Icon: 'assets/images/products/Himalayan.png',
    Price: 130,
    Quantity: 1,
    Category: 'Oily-skin & Combination-skin'
  },








  //   {
  //   Name: 'kaoline clay mask',
  //   Description: `It is a long established fact that a reader will be distracted by the 
  //     readable content of a page when looking at its layout. The point of using 
  //     Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
  //     opposed to using 'Content here, content here', making it look like 

  //     `,
  //   Icon: 'assets/images/p1.png',
  //   Price: 70,
  //   Quantity: 1
  // },
  // {
  //   Name: 'Body body polish Sugar ',
  //   Description: `
  //     Body body polish Sugar makes an amazing abrasive ingredient in scrubs. 
  //     les a natural humectant, so it retains moisture and ensures skin is kept
  //      hydrated, making it ideal for delicate and sensitive skin, especially because
  //       it melts away upon contact with water 
  //     `,
  //   Icon: 'assets/images/p2.png',
  //   Price: 70,
  //   Quantity: 1
  // }

];