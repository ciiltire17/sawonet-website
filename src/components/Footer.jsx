import BrandLogo from './BrandLogo.jsx';
import Container from './Container.jsx';
import { organization } from '../data/sawonet.js';
import { Link } from '../router.jsx';

export default function Footer() {
  return (
    <footer className="bg-sawonet-navy text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandLogo
              className="[&_*]:text-white [&_img]:bg-white [&_img]:p-1"
              size="md"
            />
            <p className="mt-4 max-w-md leading-7 text-slate-300">{organization.summary}</p>
          </div>
          <div>
            <h3 className="font-semibold">Explore</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li><Link className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" to="/about">About</Link></li>
              <li><Link className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" to="/what-we-do">What We Do</Link></li>
              <li><Link className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" to="/membership">Membership</Link></li>
              <li><Link className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" to="/projects">Projects / Campaigns</Link></li>
              <li><Link className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" to="/partners">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>
                Email:{' '}
                <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href={`mailto:${organization.contact.email}`}>
                  {organization.contact.email}
                </a>
              </li>
              <li>
                Phone:{' '}
                <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href={`tel:${organization.contact.phone}`}>
                  {organization.contact.phone}
                </a>
              </li>
              <li>
                Website:{' '}
                <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href={`https://${organization.contact.website}`}>
                  {organization.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright {new Date().getFullYear()} SAWONET. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
