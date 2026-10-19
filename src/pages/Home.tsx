import { Navbar } from '../components/layout/Navbar.tsx';
import { Hero } from '../sections/Hero.tsx';
import { CoreArchitecture } from '../sections/CoreArchitecture.tsx';
import { FlagshipEntriva } from '../sections/FlagshipEntriva.tsx';
import { TechnicalTaxonomy } from '../sections/TechnicalTaxonomy.tsx';
import { ExecutionPipeline } from '../sections/ExecutionPipeline.tsx';
import { ConvictionMetrics } from '../sections/ConvictionMetrics.tsx';
import { CollaborationCta } from '../sections/CollaborationCta.tsx';

/**
 * Home page composition layer.
 * For Phase 8, faithfully composes Navbar, Hero, CoreArchitecture, FlagshipEntriva, TechnicalTaxonomy, ExecutionPipeline, ConvictionMetrics, and CollaborationCta.
 */
export function Home() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md antialiased selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main className="w-full pt-20 bg-background flex-1 relative">
        <Hero />
        <CoreArchitecture />
        <FlagshipEntriva />
        <TechnicalTaxonomy />
        <ExecutionPipeline />
        <ConvictionMetrics />
        <CollaborationCta />
      </main>
    </div>
  );
}

export default Home;
