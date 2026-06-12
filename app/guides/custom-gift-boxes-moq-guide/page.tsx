'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomGiftBoxesMoqGuide() {
  const moqTable = [
    { tier: "Boutique Sourcing (MOQ 100 - 500 Pcs)", print: "Digital Printing / Silk Screen", setup: "Minimal (\$50 - \$100)", sampling: "2 - 3 Days", fit: "Limited-edition launches, e-commerce startups, high-end corporate events." },
    { tier: "Standard Sourcing (MOQ 1,000 Pcs)", print: "Offset Lithography (High-Fidelity)", setup: "Waived on contract (\$150 value)", sampling: "3 - 5 Days", fit: "Established e-commerce brands, cosmetics lines, premium liquor retail." },
    { tier: "Enterprise Sourcing (MOQ 5,000+ Pcs)", print: "High-Volume Rotogravure / Flexo", setup: "100% Free Tooling & Mold plates", sampling: "5 - 7 Days", fit: "Global luxury brands, retail chains, high-volume subscription boxes." }
  ];

  const checklists = [
    { title: "1. Match Your Printing Tech to Sourcing Volumes", desc: "For volumes under 500 pcs, digital printing is highly cost-effective because it avoids the physical plates setup of offset. Once your volumes surpass 1,000 pcs, offset lithography becomes dramatically cheaper per unit and delivers superior color registration." },
    { title: "2. Standardize Dimensions to Minimize Die-Plate Molds", desc: "Custom structural sizes require unique metal stamping molds. Choosing standard factory sizes (like our classic 8x8x3\" cosmetic box die-lines) completely eliminates setup mold fees, lowering your effective MOQ threshold." },
    { title: "3. Choose Collapsible Folding Designs to Save Logistics Costs", desc: "High shipping volumes increase baseline landing costs. By selecting collapsible flat-pack structures, you reduce shipping volume by 75%—allowing you to comfortably purchase higher volumes (1,000+ pcs) and access much lower tiered unit pricing." }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <Link href="/#resources" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', marginBottom: '32px', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}>
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '16px', fontWeight: 600 }}>
            <BookOpen size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
            Sourcing MOQ Matrix
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Custom Gift Boxes MOQ Guide: 100 vs. 500 vs. 1,000+ Pcs
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            A fully transparent guide to Minimum Order Quantities (MOQ) in high-end rigid box manufacturing. Learn why different customization processes have different volume thresholds, and how to scale your packaging budget responsibly.
          </p>

          <Image 
            src="/images/custom-magnetic-rigid-gift-box-manufacturer.webp" 
            alt="Custom Gift Boxes MOQ Sourcing Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>B2B Sourcing MOQ Comparison Matrix</h2>
          
          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)' }}>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Sourcing Volume Tier</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Compatible Printing Tech</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Tooling Setup Costs</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Sampling Lead Time</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Ideal Business Fit</th>
                </tr>
              </thead>
              <tbody>
                {moqTable.map((t, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>{t.tier}</td>
                    <td style={{ padding: '16px', color: '#fff' }}>{t.print}</td>
                    <td style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>{t.setup}</td>
                    <td style={{ padding: '16px', color: '#fff' }}>{t.sampling}</td>
                    <td style={{ padding: '16px', color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.4' }}>{t.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>B2B MOQ Cost Optimization Checklist</h2>
          <div style={{ display: 'grid', gap: '25px', marginBottom: '40px' }}>
            {checklists.map((c, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600 }}>{c.title}</h4>
                <p style={{ color: '#c0c0c0', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request a Custom MOQ Sourcing Audit</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              We support flexible ordering paths. Speak to our packaging economists to receive an absolute transparent pricing spreadsheet matching your startup or retail scale.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Connect with B2B Sales Specialists
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
