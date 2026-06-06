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
        ? 'RISE staff and community members planting tree seedlings in agricultural land in Berjiroon Village, Baidoa'
        : index < 9
          ? 'RISE team members photographed during the tree distribution activity in Baidoa'
          : 'RISE team members supporting agroforestry and field activities with vulnerable agricultural households in Baidoa',
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
      title: 'Tree Distribution to Vulnerable Agricultural Communities',
      location: 'Berjiroon Village, Baidoa, South West State, Somalia',
      date: 'May 2026',
      beneficiaries: '100 vulnerable agricultural households',
      summary:
        'In May 2026, RISE conducted a tree distribution activity in Berjiroon Village, Baidoa, targeting vulnerable agricultural households. The initiative aimed to strengthen environmental conservation, improve climate resilience, and support sustainable livelihoods through agroforestry practices.',
      details:
        'The distributed tree seedlings included fruit and shade trees suitable for the local environment. Community members received guidance on proper planting and care to maximize tree survival and long-term benefits. The activity encouraged farmers to integrate trees into their agricultural land to improve soil quality, reduce land degradation, and enhance household food security.',
      impactHighlights: [
        'Increased access to tree seedlings for vulnerable farming households',
        'Enhanced awareness of environmental conservation and tree planting',
        'Improved soil fertility, reduced erosion, and better land management',
        'Strengthened climate resilience through vegetation cover',
        'Supported future household livelihoods through fruit, shade, and tree-based resources',
        'Encouraged community ownership and environmental protection',
      ],
      images: riseTreeDistributionImages,
    },
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
