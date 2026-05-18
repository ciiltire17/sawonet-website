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
  pendingMember('rise', 'RISE'),
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
