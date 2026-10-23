import photoAssets from './cop17Photos.json' with { type: 'json' };

export const cop17 = {
  path: '/projects/unccd-cop17-ulaanbaatar-mongolia',
  title: 'SAWONET at UNCCD COP17, Ulaanbaatar, Mongolia',
  location: 'Ulaanbaatar, Mongolia',
  dates: '17–28 August 2026',
  summary: "A photographic record of SAWONET's engagement at UNCCD COP17: conference activities, community dialogue, rangeland discussions and exchanges with fellow participants in Mongolia.",
  theme: 'Restoring Land. Restoring Hope.',
  assetPath: '/assets/unccd-cop17-mongolia-2026',
};

const descriptions = [
  ['conference-venue', 'Conference & sessions', 'At the COP17 installation outside the conference venue in Ulaanbaatar.'],
  ['plenary-hall', 'Conference & sessions', 'A view across the plenary hall, with delegates seated beneath the conference screens.'],
  ['conference-panel', 'Conference & sessions', 'A panel session on the COP17 stage in Ulaanbaatar.'],
  ['rangelands-programme', 'Rangelands & exchange', 'Programme display for “Stewarding rangelands for a land degradation-neutral world: lessons from Africa”, dated 26 August 2026.'],
  ['community-roundtable', 'Community meetings', 'Participants gathered around the conference tables for a roundtable meeting.'],
  ['roundtable-exchanges', 'Community meetings', 'Participants following a meeting with microphones, interpretation headsets and laptops at the table.'],
  ['meeting-discussion', 'Community meetings', 'An exchange among participants during a conference meeting.'],
  ['participants-at-the-table', 'Community meetings', 'Participants seated together during a roundtable session.'],
  ['conference-group', 'Community meetings', 'A group photograph beneath the UNCCD and COP17 meeting-room signage.'],
  ['delegation-photograph', 'Delegation & networking', 'A delegation group photograph in front of the UNCCD COP17 backdrop.'],
  ['delegates-at-cop17', 'Delegation & networking', 'Conference participants together at the Ulaanbaatar 2026 backdrop.'],
  ['participants-together', 'Delegation & networking', 'A group of participants photographed together inside the conference venue.'],
  ['informal-exchange', 'Delegation & networking', 'An informal moment with fellow participants between conference activities.'],
  ['networking-at-the-venue', 'Delegation & networking', 'Participants gathered in the pavilion area for conversation and networking.'],
  ['rangeland-stewardship-discussion', 'Rangelands & exchange', 'A discussion in front of the display on rangeland stewardship and lessons from Africa.'],
  ['rangelands-session', 'Rangelands & exchange', 'Participants seated for the rangelands discussion in the pavilion area.'],
  ['youth-and-drought-programme', 'Rangelands & exchange', 'A programme display on youth-centred policies, data, drought and desertification in Africa.'],
  ['plenary-group-photograph', 'Conference & sessions', 'Participants gathered for a group photograph in the plenary setting.'],
];

export const cop17Photos = descriptions.map(([slug, group, caption]) => {
  const asset = photoAssets.find((item) => item.slug === slug);
  const largest = asset.variants.at(-1);
  return {
    ...asset,
    group,
    caption,
    src: `${cop17.assetPath}/${asset.variants[0].file}`,
    full: `${cop17.assetPath}/${largest.file}`,
    srcSet: asset.variants.map((variant) => `${cop17.assetPath}/${variant.file} ${variant.width}w`).join(', '),
    width: largest.width,
    height: largest.height,
  };
});

export const cop17Hero = cop17Photos[0];

export function cop17Seo(path) {
  if (path !== cop17.path) return null;
  return {
    title: `${cop17.title} | SAWONET`,
    description: cop17.summary,
    url: `https://www.sawonet.org${cop17.path}`,
    image: `https://www.sawonet.org${cop17Hero.full}`,
    type: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: cop17.title,
      description: cop17.summary,
      url: `https://www.sawonet.org${cop17.path}`,
      image: `https://www.sawonet.org${cop17Hero.full}`,
      author: { '@type': 'Organization', name: 'Somali Pastoralist Women Network (SAWONET)' },
      about: {
        '@type': 'Event',
        name: 'UNCCD COP17',
        startDate: '2026-08-17',
        endDate: '2026-08-28',
        location: { '@type': 'Place', name: 'Ulaanbaatar, Mongolia' },
      },
    },
  };
}
