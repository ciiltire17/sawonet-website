const pendingProfileDescription =
  'SAWONET member organization contributing to coordinated advocacy, community engagement, and support for pastoralist women and girls. A full profile will be added once the official organization resource is available.';

const pendingFocusAreas = ['Women-led action', 'Community coordination', 'Pastoralist resilience'];

function pendingMember(id, shortName, role = 'Member Organization') {
  return {
    id,
    shortName,
    name: shortName,
    role,
    region: 'Somalia',
    description: pendingProfileDescription,
    focusAreas: pendingFocusAreas,
    profileStatus: 'Profile resource pending',
  };
}

const riseTreeDistributionImages = Array.from({ length: 19 }, (_, index) => {
  const imageNumber = String(index + 1).padStart(2, '0');
  return {
    src: `/assets/members/rise-tree-distribution/rise-tree-distribution-${imageNumber}.jpg`,
    alt:
      index < 4
        ? 'RISE staff and community members planting tree seedlings on agro-pastoral land in Berjiroon Village, Baidoa'
        : index < 9
          ? 'RISE team members photographed during the tree distribution activity in Baidoa'
          : 'RISE team members supporting agroforestry and field activities with vulnerable agro-pastoral households in Baidoa',
  };
});

export const memberNgos = [
  {
    id: 'oppd',
    shortName: 'OPPD',
    name: 'Organization for Pastoral Peace and Development',
    role: 'Chair Organization',
    region: 'Kenya, Somalia, and the Horn of Africa',
    logo: '/assets/members/oppd-logo.png',
    logoAlt: 'Organization for Pastoral Peace and Development logo',
    description:
      'Regional humanitarian and development organization strengthening livelihoods, peace, rangeland governance, and climate resilience among pastoralist and agro-pastoralist communities.',
    focusAreas: [
      'Rangeland governance',
      'Climate-resilient livelihoods',
      'Peacebuilding',
      "Women and youth empowerment",
    ],
    profileUrl: 'https://www.oppdkenya.org',
    profileSource: 'OPPD Profile_FAO.pdf',
    credentials: ['UNCCD-accredited organization', 'Founding convener of SAWONET'],
  },
  pendingMember('urdun', 'URDUN', 'Vice Chair'),
  pendingMember('acred', 'ACRED'),
  pendingMember('baywan', 'BAYWAN'),
  pendingMember('seedo', 'SEEDO'),
  pendingMember('dwro', 'DWRO'),
  pendingMember('vosomwo', 'VOSOMWO'),
  pendingMember('eedo', 'EEDO'),
  pendingMember('ddfo', 'DDFO'),
  {
    id: 'rise',
    shortName: 'RISE',
    name: 'Resilience Integration and Sustainable Empowerment',
    role: 'Member Organization',
    region: 'South West State, Somalia',
    description:
      'SAWONET member organization contributing to resilience, environmental conservation, sustainable livelihoods, and community empowerment for vulnerable communities.',
    focusAreas: [
      'Climate resilience',
      'Environmental conservation',
      'Sustainable livelihoods',
      'Community empowerment',
    ],
    profileStatus: 'Profile resource pending',
    latestActivity: {
      title: 'Tree Distribution Initiative for Agro-Pastoral Communities',
      location: 'Berjiroon Village, Baidoa, South West State, Somalia',
      date: 'May 2026',
      beneficiaries: '100 agro-pastoral households',
      summary:
        'In May 2026, RISE conducted a tree distribution initiative in Berjiroon Village, Baidoa, targeting vulnerable agro-pastoral households. The initiative aimed to strengthen environmental conservation, improve climate resilience, and support sustainable livelihoods through agroforestry practices.',
      details:
        'The distributed tree seedlings included fruit and shade trees suitable for the local environment. Community members received guidance on proper planting and care to maximize tree survival and long-term benefits. The activity encouraged agro-pastoral households to integrate trees into their land use practices to improve soil quality, reduce land degradation, and enhance household food security.',
      impactHighlights: [
        'Increased access to tree seedlings for vulnerable agro-pastoral households',
        'Enhanced awareness of environmental conservation and tree planting',
        'Improved soil fertility, reduced erosion, and better land management',
        'Strengthened climate resilience through vegetation cover',
        'Supported future household livelihoods through fruit, shade, and tree-based resources',
        'Encouraged community ownership and environmental protection',
      ],
      images: riseTreeDistributionImages,
    },
  },
  {
    id: 'apedo',
    shortName: 'APEDO',
    name: 'Action for Peace Education and Development Organization',
    role: 'Member Organization',
    region: 'South Central Somalia',
    logo: '/assets/members/apedo-logo.svg',
    logoAlt: 'Action for Peace Education and Development Organization placeholder logo',
    tagline: 'Resilience Through Peace, Knowledge, and Development.',
    founded: '2020',
    headquarters: 'Mogadishu, Somalia',
    coverage:
      'South Central Somalia, including Mogadishu, Bardhere, Jowhar, and surrounding districts.',
    description:
      'Action for Peace Education and Development Organization (APEDO) is a Somali-led non-profit organization dedicated to advancing peace, inclusive education, and sustainable community development across Somalia. Established in 2020, APEDO addresses the root causes of conflict and vulnerability through education, peacebuilding, WASH, livelihoods support, humanitarian response, and human rights advocacy.',
    mission:
      'To promote peace and social cohesion, expand access to quality and inclusive education, and implement community-driven development initiatives that strengthen resilience, improve livelihoods, and address the underlying drivers of conflict and vulnerability.',
    vision:
      'A peaceful, resilient, and inclusive Somalia where communities thrive through education, equity, and sustainable development.',
    focusAreas: [
      'Education & Skills Development',
      'WASH',
      'Health & Nutrition',
      'Livelihoods & Food Security',
      'Peacebuilding & Conflict Resolution',
      'Human Rights & Advocacy',
      'Emergency Response & Rehabilitation',
    ],
    registration: ['MoIFAR/NGOD/1118', 'C/R No. 26567094'],
    contact: {
      phone: '+252 61 4666767',
      email: 'apedo.org20@gmail.com',
      location: 'Mogadishu, Somalia',
    },
    profilePath: '/member-ngos/apedo',
    profileSource:
      'APEDO_Organizational_Profile.pdf; Organization_Mapping_last Updated.docx; SAWONET-Guide_Questionnaire APEDO.docx',
  },
  pendingMember('rasmi-wash', 'RASMI WASH'),
  pendingMember('somali-central-aid-women', 'Somali Central Aid Women'),
  pendingMember('slac', 'SLAC'),
  pendingMember('pulpa', 'PULPA'),
  pendingMember('rio', 'RIO'),
  pendingMember('saye', 'SAYE'),
  pendingMember('yoda', 'YODA'),
  pendingMember('smwc', 'SMWC'),
  pendingMember('waro', 'WARO'),
];
