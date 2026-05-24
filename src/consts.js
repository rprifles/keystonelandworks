// Site-wide constants. Edit here to update across the whole site.

export const SITE = {
  name: 'Keystone LandWorks',
  legalName: 'Keystone LandWorks LLC',
  url: 'https://www.keystonelandworks.com',
  phone: '(804) 250-1709',
  phoneRaw: '8042501709',
  email: 'keystoneland@aol.com',
  region: 'Northern Neck, Virginia',
  yearsInBusiness: 25,
  foundedYear: new Date().getFullYear() - 25,
  geo: {
    // Tappahannock area - central to Northern Neck
    latitude: 37.9243,
    longitude: -76.8597,
  },
  social: {
    facebook: 'https://www.facebook.com/keystonelandworks',
    google: 'https://g.page/keystonelandworks',
  },
  hours: 'Mo-Fr 07:30-17:00, Sa 07:30-12:00',
  reviews: {
    rating: 5.0,
    count: 10,
  },
};

export const SERVICES = [
  {
    slug: 'forestry-mulching',
    name: 'Forestry Mulching',
    short: 'Brush, saplings, and overgrowth ground into mulch on-site.',
    description: 'Forestry mulching clears overgrown land in a single pass — no burning, no hauling, no debris piles.',
    keywords: ['forestry mulching', 'brush clearing', 'underbrush mulching', 'land mulching'],
  },
  {
    slug: 'land-clearing',
    name: 'Land Clearing',
    short: 'Lots, homesites, fence rows, and overgrown property cleared and ready for use.',
    description: 'Full-property land clearing for homesites, pasture, hunting land, and development.',
    keywords: ['land clearing', 'lot clearing', 'property clearing', 'homesite clearing'],
  },
  {
    slug: 'excavation',
    name: 'Excavation',
    short: 'Grading, site prep, ponds, and dirt work done clean.',
    description: 'Light to mid-scale excavation work — grading, site prep, drainage, and dirt moving.',
    keywords: ['excavation', 'excavating contractor', 'grading', 'dirt work', 'site prep'],
  },
  {
    slug: 'gravel-driveways',
    name: 'Gravel Driveway Installation',
    short: 'New gravel driveways, regrades, and access roads built to last.',
    description: 'New gravel driveways and access lane installation — properly graded, crowned, and built for Virginia weather.',
    keywords: ['gravel driveway', 'driveway installation', 'driveway repair', 'gravel road'],
  },
  {
    slug: 'lot-clearing',
    name: 'Lot & Homesite Clearing',
    short: 'Building lots and homesites cleared, stumped, and prepped for construction.',
    description: 'Homesite and building lot clearing — trees, stumps, brush, and grading handled in one job.',
    keywords: ['homesite clearing', 'building lot clearing', 'site preparation'],
  },
];

export const SERVICE_AREAS = [
  {
    slug: 'tappahannock-va',
    city: 'Tappahannock',
    county: 'Essex County',
    state: 'VA',
    blurb: 'Tappahannock is the gateway to the Northern Neck and the hub of Essex County. Many of our properties along the Rappahannock River need waterfront access work, lot clearing, and driveway installation.',
  },
  {
    slug: 'warsaw-va',
    city: 'Warsaw',
    county: 'Richmond County',
    state: 'VA',
    blurb: 'Warsaw and the surrounding Richmond County area is the heart of our service region. Farms, hunting tracts, and rural homesites all benefit from forestry mulching and clearing.',
  },
  {
    slug: 'kilmarnock-va',
    city: 'Kilmarnock',
    county: 'Lancaster County',
    state: 'VA',
    blurb: 'Kilmarnock is one of the busiest property markets in Lancaster County. We handle waterfront lot clearing, view-line cutting, and driveway work throughout the area.',
  },
  {
    slug: 'montross-va',
    city: 'Montross',
    county: 'Westmoreland County',
    state: 'VA',
    blurb: 'Montross sits in the middle of Westmoreland County, with plenty of rural property, hunting land, and homesites that need clearing and access work.',
  },
  {
    slug: 'heathsville-va',
    city: 'Heathsville',
    county: 'Northumberland County',
    state: 'VA',
    blurb: 'Heathsville and surrounding Northumberland County is full of farms, woodlots, and homesites. Forestry mulching is especially popular here for opening up overgrown tracts.',
  },
  {
    slug: 'white-stone-va',
    city: 'White Stone',
    county: 'Lancaster County',
    state: 'VA',
    blurb: 'White Stone properties often need waterfront-friendly clearing approaches that protect tree roots and minimize soil disturbance. Forestry mulching is a strong fit.',
  },
  {
    slug: 'irvington-va',
    city: 'Irvington',
    county: 'Lancaster County',
    state: 'VA',
    blurb: 'Irvington properties tend to be high-value waterfront and view lots. We handle careful clearing, driveway upgrades, and grading work throughout the area.',
  },
  {
    slug: 'lancaster-va',
    city: 'Lancaster',
    county: 'Lancaster County',
    state: 'VA',
    blurb: 'The town of Lancaster and surrounding county area is a strong service market for forestry mulching, land clearing, and gravel driveway work.',
  },
  {
    slug: 'reedville-va',
    city: 'Reedville',
    county: 'Northumberland County',
    state: 'VA',
    blurb: 'Reedville and the lower Northumberland County area has plenty of rural property where forestry mulching is the cleanest, fastest way to open up land.',
  },
  {
    slug: 'colonial-beach-va',
    city: 'Colonial Beach',
    county: 'Westmoreland County',
    state: 'VA',
    blurb: 'Colonial Beach properties along the Potomac often need lot clearing, view-line work, and access improvements. We serve the whole northern edge of the Northern Neck.',
  },
  {
    slug: 'saluda-va',
    city: 'Saluda',
    county: 'Middlesex County',
    state: 'VA',
    blurb: 'Saluda and the wider Middlesex County area is part of our regular service map. Forestry mulching, gravel driveways, and lot clearing are all available throughout the county.',
  },
  {
    slug: 'urbanna-va',
    city: 'Urbanna',
    county: 'Middlesex County',
    state: 'VA',
    blurb: 'Urbanna sits on Urbanna Creek with plenty of waterfront and rural property. Selective clearing, view-line work, and driveway installation are common projects in the area.',
  },
  {
    slug: 'deltaville-va',
    city: 'Deltaville',
    county: 'Middlesex County',
    state: 'VA',
    blurb: 'Deltaville is a waterfront community at the tip of Middlesex County. We handle clearing, driveways, and site prep across the peninsula.',
  },
  {
    slug: 'gloucester-va',
    city: 'Gloucester',
    county: 'Gloucester County',
    state: 'VA',
    blurb: 'Gloucester County is a strong service market just across the Rappahannock from the Northern Neck. Forestry mulching, land clearing, and gravel driveway work are all available.',
  },
  {
    slug: 'hayes-va',
    city: 'Hayes',
    county: 'Gloucester County',
    state: 'VA',
    blurb: 'Hayes and the lower Gloucester County area has plenty of rural and waterfront property. We serve the full Middle Peninsula and surrounding region.',
  },
  {
    slug: 'king-william-va',
    city: 'King William',
    county: 'King William County',
    state: 'VA',
    blurb: 'King William County is part of our extended service area. Forestry mulching, land clearing, and excavation services are available throughout the county.',
  },
  {
    slug: 'west-point-va',
    city: 'West Point',
    county: 'King William County',
    state: 'VA',
    blurb: 'West Point sits at the head of the York River in King William County. We provide land services to properties across the area.',
  },
];

export const BLOG_POSTS = [
  {
    slug: 'how-much-does-forestry-mulching-cost-in-virginia',
    title: 'How Much Does Forestry Mulching Cost in Virginia?',
    description: 'A straight-shooting breakdown of forestry mulching costs per acre in the Northern Neck and across Virginia.',
    date: '2026-01-15',
  },
  {
    slug: 'forestry-mulching-vs-traditional-land-clearing',
    title: 'Forestry Mulching vs. Traditional Land Clearing: Which Is Right for Your Property?',
    description: 'When forestry mulching makes sense, when bulldozing makes sense, and how to decide for your property.',
    date: '2026-02-01',
  },
  {
    slug: 'gravel-driveway-installation-northern-neck',
    title: 'Gravel Driveway Installation in the Northern Neck: What Property Owners Should Know',
    description: 'How a properly installed gravel driveway holds up to Virginia weather, and what to ask before hiring a contractor.',
    date: '2026-02-20',
  },
  {
    slug: 'clearing-land-for-a-new-home-in-virginia',
    title: 'Clearing Land for a New Home in Virginia: A Step-by-Step Guide',
    description: 'From walking the lot to final grading, here is what to expect when clearing a homesite in the Northern Neck.',
    date: '2026-03-10',
  },
  {
    slug: 'best-time-of-year-for-forestry-mulching',
    title: 'When Is the Best Time of Year for Forestry Mulching in Virginia?',
    description: 'Seasonal pros and cons of forestry mulching in the Northern Neck — winter, spring, summer, and fall.',
    date: '2026-03-25',
  },
];
