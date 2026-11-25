import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import Cop17Feature from '../components/Cop17Feature.jsx';
import { StatementFeature } from './Statement.jsx';
import { Link } from '../router.jsx';
export default function News() {
  return <><PageHero eyebrow="SAWONET" title="News & Events" description="Official statements, advocacy and updates from the network." /><Container className="space-y-10 py-12"><StatementFeature /><Cop17Feature /><section className="rounded-lg border border-slate-200 p-6"><h2 className="text-2xl font-bold text-sawonet-navy">Global Gathering of Pastoralist Women · Kathmandu</h2><Link to="/projects" className="mt-4 inline-block font-semibold text-sawonet-green underline">Explore our campaigns and global engagements</Link></section></Container></>;
}
