import { publications, publicationAuthors, publicationSeries, researchCountries } from './publications.js';

const origin = 'https://www.sawonet.org';

export function publicationSeo(path) {
  const publication = publications.find((item) => item.path === path);
  if (publication) {
    return {
      title: `${publication.title} | SAWONET`,
      description: publication.summary,
      url: `${origin}${publication.path}`,
      image: `${origin}${publication.cover}`,
      type: 'article',
      structuredData: publication.kind === 'report' ? {
        '@context': 'https://schema.org',
        '@type': 'Report',
        '@id': `${origin}${publication.path}#publication`,
        name: publication.title,
        headline: publication.title,
        description: publication.summary,
        url: `${origin}${publication.path}`,
        image: `${origin}${publication.cover}`,
        inLanguage: 'en',
        numberOfPages: publication.pages,
        author: { '@type': 'Organization', name: publication.organization },
        publisher: { '@type': 'Organization', name: publication.organization },
        about: {
          '@type': 'Event',
          name: 'UNCCD COP17',
          startDate: '2026-08-17',
          endDate: '2026-08-28',
          location: { '@type': 'Place', name: 'Ulaanbaatar, Mongolia' },
        },
        encoding: {
          '@type': 'MediaObject',
          contentUrl: `${origin}${publication.pdf}`,
          encodingFormat: 'application/pdf',
          contentSize: `${publication.bytes} bytes`,
        },
      } : {
        '@context': 'https://schema.org',
        '@type': 'Report',
        '@id': `${origin}${publication.path}#publication`,
        name: publication.title,
        headline: publication.title,
        alternativeHeadline: publication.subtitle,
        description: publication.summary,
        datePublished: '2026-08',
        reportNumber: `Brief ${publication.number}`,
        url: `${origin}${publication.path}`,
        image: `${origin}${publication.cover}`,
        inLanguage: 'en',
        author: publicationAuthors.map((author) => ({
          '@type': 'Person',
          name: author.name,
          affiliation: { '@type': 'Organization', name: author.affiliation },
        })),
        publisher: [
          { '@type': 'Organization', name: 'CGIAR Climate Security' },
          { '@type': 'Organization', name: 'Organization for Pastoral Peace Development (OPPD)' },
        ],
        isPartOf: { '@type': 'CreativeWorkSeries', name: publicationSeries },
        spatialCoverage: researchCountries.map((name) => ({ '@type': 'Place', name })),
        copyrightYear: 2026,
        copyrightHolder: { '@type': 'Organization', name: 'CGIAR Climate Security' },
        encoding: {
          '@type': 'MediaObject',
          contentUrl: `${origin}${publication.pdf}`,
          encodingFormat: 'application/pdf',
          contentSize: `${publication.bytes} bytes`,
        },
      },
    };
  }
  if (path === '/publications') {
    return {
      title: 'Research & Publications | SAWONET',
      description: 'Explore five August 2026 CGIAR, OPPD & SAWONET policy briefs and OPPD’s post-session report on participation in UNCCD COP17 in Ulaanbaatar, Mongolia.',
      url: `${origin}/publications`,
      image: `${origin}/assets/sawonet-logo-512.png`,
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Research & Publications',
        url: `${origin}/publications`,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: publications.length,
          itemListElement: publications.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: `${origin}${item.path}` })),
        },
      },
    };
  }
  return null;
}
