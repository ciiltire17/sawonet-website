export const statement = {
  path: '/news/sawonet-collective-call-to-action-2026',
  title: 'Somali Women Deserve Answers. Somali Women Deserve Protection.',
  category: 'Official Statements & Advocacy',
  date: '25 November 2026',
  campaign: '16 Days of Activism against Gender-Based Violence',
  assets: '/assets/statements/collective-call-2026',
};
export function statementSeo(path) {
  if (path !== statement.path && path !== '/news') return null;
  const title = path === '/news' ? 'News & Events' : statement.title;
  const description = 'SAWONET collective call to action for the rights, dignity and safety of Somali women and girls. Read the complete English and Somali statement.';
  const url = `https://www.sawonet.org${path}`;
  const image = 'https://www.sawonet.org/assets/sawonet-logo-512.png';
  return { title: `${title} | SAWONET`, description, url, image, type: path === '/news' ? 'website' : 'article', structuredData: path === '/news' ? { '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, url } : {
    '@context': 'https://schema.org', '@type': 'NewsArticle', headline: statement.title, description, url, image,
    datePublished: '2026-11-25', inLanguage: ['en', 'so'], articleSection: statement.category,
    author: { '@type': 'Organization', name: 'SAWONET' }, publisher: { '@type': 'Organization', name: 'SAWONET', logo: { '@type': 'ImageObject', url: image } },
  }};
}
