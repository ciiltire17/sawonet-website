import { useState } from 'react';
import BrandLogo from './BrandLogo.jsx';
import Container from './Container.jsx';
import Icon from './Icon.jsx';
import { Link, NavLink } from '../router.jsx';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'What We Do', to: '/what-we-do' },
  { label: 'Membership', to: '/membership' },
  { label: 'Member NGOs', to: '/member-ngos' },
  { label: 'Projects / Campaigns', to: '/projects' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
];

const navClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-sawonet-mint text-sawonet-green'
      : 'text-slate-700 hover:bg-slate-100 hover:text-sawonet-navy'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex min-h-20 items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
            <BrandLogo size="sm" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((current) => !current)}
          >
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        </nav>

        {open && (
          <div id="mobile-menu" className="border-t border-slate-200 py-4 lg:hidden">
            <div className="grid gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
