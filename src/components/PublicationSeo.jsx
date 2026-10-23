import { useEffect } from 'react';
import { usePath } from '../router.jsx';
import { publicationSeo } from '../data/publicationSeo.js';
import { cop17Seo } from '../data/cop17.js';

export default function PublicationSeo() {
  const path = usePath();
  useEffect(() => {
    const metadata = cop17Seo(path) || publicationSeo(path) || {
      title: 'SAWONET | Somali Pastoralist Women Network',
      description: "SAWONET advances pastoralist women's leadership, climate justice, land rights, gender equality, peacebuilding, Indigenous knowledge, food security, and rangeland stewardship across Somalia and global platforms including Kathmandu, Nepal.",
      url: `https://www.sawonet.org${path === '/' ? '/' : path}`,
      image: 'https://www.sawonet.org/assets/sawonet-logo-512.png',
      type: 'website',
    };
    function set(selector, attribute, value) {
      let element = document.head.querySelector(selector);
      const created = !element;
      if (created) {
        element = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
        const [, name, content] = selector.match(/\[(.+?)="(.+?)"\]/);
        element.setAttribute(name, content);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    }
    document.title = metadata.title;
    set('meta[name="description"]', 'content', metadata.description);
    set('link[rel="canonical"]', 'href', metadata.url);
    for (const key of ['title', 'description', 'url', 'image', 'type']) set(`meta[property="og:${key}"]`, 'content', metadata[key]);
    // Replace the static build's JSON-LD when navigating between publication routes.
    const existing = document.getElementById('publication-structured-data');
    if (!metadata.structuredData) {
      existing?.remove();
      return;
    }
    const structured = existing || document.createElement('script');
    structured.id = 'publication-structured-data';
    structured.type = 'application/ld+json';
    structured.textContent = JSON.stringify(metadata.structuredData).replace(/</g, '\\u003c');
    if (!existing) document.head.appendChild(structured);
    return () => {
      // The next route's effect owns its metadata; never retain publication JSON-LD elsewhere.
      structured.remove();
    };
  }, [path]);
  return null;
}
