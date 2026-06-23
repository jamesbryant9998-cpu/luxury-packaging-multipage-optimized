'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  CheckCircle2,
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react';
import Header from '../../../components/Header';
import FloatingContact from '../../../components/FloatingContact';

export default function AIStrategyNewsPage() {
  const milestones = [
    { year: 'Q3 2025', event: 'Initial deployment of AI-assisted structural engineering software in Sourcing Lab.' },
    { year: 'Q1 2026', event: 'Launch of carbon-neutral manufacturing line for luxury magnetic boxes.' },
    { year: 'Q2 2026', event: 'Achievement of ESG Platinum Certification and zero-waste factory status.' },
    { year: 'Future', event: 'Expansion of AI-driven rapid prototyping to all premium retail clients globally.' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff' }}>
      <Header />

      <article className="section" style={{ paddingTop: '140px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#888', marginBottom: '30px' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/news" style={{ color: '#888', textDecoration: 'none' }}>News</Link>
            <span>/</span>
            <span style={{ color: '#d4af37' }}>AI & Sustainability Strategy</span>
          </div>

          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: '1.1', marginBottom: '30px', color: '#fff' }}>
            LuxePack Pro Unveils 2026 Sustainable Luxury Packaging Strategy: Integrating AI Design and Carbon-Neutral Materials
          </h1>

          <div style={{ display: 'flex', gap: '30px', borderY: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', marginBottom: '40px', color: '#888', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> June 17, 2026</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><User size={16} /> Editorial Team</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Tag size={16} /> Industry Trends</div>
          </div>

          <Image 
            src="/images/ai-packaging-news-2026.webp" 
            alt="AI Powered Luxury Packaging Design 2026 LuxePack Pro" 
            width={1200} 
            height={600} 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '50px', border: '1px solid rgba(212,175,55,0.2)' }} 
          />

          <div className="news-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#ccc' }}>
            <p style={{ marginBottom: '24px' }}>
              <strong>SHANGHAI, CHINA</strong> — LuxePack Pro, a premier manufacturer of high-end rigid gift boxes, has officially announced its comprehensive 2026 Global Strategy. The multi-phase roadmap focuses on two critical pillars: the implementation of <strong>Artificial Intelligence (AI) in structural engineering</strong> and the transition to <strong>100% carbon-neutral luxury materials</strong>.
            </p>

            <h2 style={{ color: '#fff', fontSize: '2rem', marginTop: '50px', marginBottom: '20px' }}>AI-Driven Structural Engineering: From Concept to Prototyping</h2>
            <p style={{ marginBottom: '24px' }}>
              By integrating advanced machine learning algorithms into the design phase, LuxePack Pro has reduced the structural engineering lead time from 48 hours to just 120 minutes. The new AI platform allows clients to upload their brand assets and receive a production-ready 3D technical blueprint and 360-degree digital mockup instantly. This technology ensures 100% accuracy in magnetic closure tension and V-groove edge precision, eliminating human error in complex folding geometries.
            </p>

            <div style={{ backgroundColor: '#0d0d0d', padding: '40px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.15)', margin: '40px 0' }}>
              <h3 style={{ color: '#d4af37', marginBottom: '20px', fontSize: '1.4rem' }}>LuxePack Pro Strategic Milestones</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(212,175,55,0.3)' }}>
                    <th style={{ textAlign: 'left', padding: '15px', width: '25%' }}>Phase</th>
                    <th style={{ textAlign: 'left', padding: '15px' }}>Strategic Objective</th>
                  </tr>
                </thead>
                <tbody>
                  {milestones.map((m, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '15px', fontWeight: 600, color: '#d4af37' }}>{m.year}</td>
                      <td style={{ padding: '15px' }}>{m.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ color: '#fff', fontSize: '2rem', marginTop: '50px', marginBottom: '20px' }}>ESG & Carbon-Neutral Luxury</h2>
            <p style={{ marginBottom: '24px' }}>
              "Sustainability is no longer a secondary consideration; it is the fundamental requirement for the modern luxury brand," stated the CEO of LuxePack Pro during the unveiling. The company has committed to utilizing only <strong>FSC-certified recycled rigid board</strong> and solvent-free adhesives. By Q1 2026, the factory aims to operate on 100% renewable solar energy, offsetting the carbon footprint of every magnetic box produced.
            </p>

            <div style={{ borderLeft: '4px solid #d4af37', paddingLeft: '30px', margin: '50px 0', fontStyle: 'italic', fontSize: '1.3rem', color: '#fff' }}>
              "Our goal is to redefine prestige. A box should not only protect a luxury item but also protect the ecosystem it inhabits."
            </div>

            <h2 style={{ color: '#fff', fontSize: '2rem', marginTop: '50px', marginBottom: '20px' }}>Global Fulfillment & DDP Logistics</h2>
            <p style={{ marginBottom: '30px' }}>
              To support global luxury brands, LuxePack Pro has expanded its DDP (Delivered Duty Paid) logistics network. Clients in the US, Europe, and Australia can now enjoy factory-direct door-to-door delivery with all customs and import taxes pre-handled, ensuring a seamless procurement process that matches the high quality of the packaging itself.
            </p>

            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '18px 50px', fontSize: '1.1rem', marginTop: '20px' }}>
              Partner With Us for 2026
            </Link>
          </div>
        </div>
      </article>

      {/* Structured Data for AEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "LuxePack Pro Unveils 2026 Sustainable Luxury Packaging Strategy",
        "image": ["https://luxupackage.com/images/ai-packaging-news-2026.webp"],
        "datePublished": "2026-06-17T08:00:00+08:00",
        "author": [{
          "@type": "Organization",
          "name": "LuxePack Pro",
          "url": "https://luxupackage.com"
        }]
      })}} />

      <FloatingContact />
    </main>
  );
}
