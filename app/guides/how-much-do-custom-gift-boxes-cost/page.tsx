'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function HowMuchDoCustomGiftBoxesCostGuide() {
  const priceTiers = [
    { type: "Custom Folding Magnetic Boxes (Collapsible)", range: "\$1.20 - \$3.50", setup: "\$150 - \$250", notes: "Flat-pack shipping cuts ocean freight costs by up to 75%. Most popular for high-growth e-commerce." },
    { type: "Classic Rigid Two-Piece Boxes (Lid & Base)", range: "\$0.80 - \$2.50", setup: "\$100 - \$200", notes: "Requires zero assembly, but high volumetric shipping weight increases logistics baseline." },
    { type: "Premium Sliding Drawer Boxes (with Ribbon)", range: "\$0.95 - \$2.80", setup: "\$120 - \$220", notes: "Excellent for jewelry and small luxury gifts. Slide friction perfectly calibrated." },
    { type: "Double-Gate Open Perfume Display Boxes", range: "\$2.50 - \$6.00", setup: "\$300 - \$500", notes: "Bespoke architectural structure with embedded magnet hinges and elevated velvet pedestal." }
  ];

  const faqs = [
    {
      q: "Q1: What are the primary cost drivers in custom box manufacturing?",
      a: "Baseline pricing is governed by three factors: (1) Box Structure complexity (V-grooving, magnetic flaps), (2) Order Volume (unit costs drop drastically as volume crosses the 1,000 and 5,000 pc thresholds), and (3) Material Choices (FSC-certified uncoated kraft board vs. premium hand-glued velvet/linen wrappers)."
    },
    {
      q: "Q2: Are there one-time setup or tooling fees involved?",
      a: "Yes. Custom plates, Switzerland foil-stamping steel dies, and high-density EVA laser cutting molds involve a one-time mold setup fee ranging from \$100 to \$300. However, at LuxePack Pro, we waive these tooling charges for repeat bulk orders exceeding 2,000 units."
    },
    {
      q: "Q3: How much can flat-pack collapsible structures save on logistics?",
      a: "Traditional rigid boxes ship pre-assembled, meaning you pay international ocean freight to transport 'empty air'. Collapsible folding magnetic boxes ship completely flat, reducing ocean shipping volume and warehouse storage space by up to 75%—saving thousands in freight volumetric weight surcharges."
    }
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
            B2B Pricing Matrix
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            How Much Do Custom Gift Boxes Cost? Direct Factory Price Matrix
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            A fully transparent, direct-factory packaging cost breakdown. Compare box architectures, setup charges, material finishes, and see the exact pricing formulas to optimize your procurement budget.
          </p>

          <Image 
            src="/images/custom-magnetic-gift-boxes-wholesale.webp" 
            alt="How Much Do Custom Gift Boxes Cost Sourcing Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>Direct-Factory Packaging Price Guide</h2>
          
          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)' }}>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Box Structure Style</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Estimated Unit Price (MOQ 1,000)</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>One-Time Tooling Setup Fee</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>Logistics & Sourcing Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceTiers.map((t, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>{t.type}</td>
                    <td style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>{t.range}</td>
                    <td style={{ padding: '16px', color: '#fff' }}>{t.setup}</td>
                    <td style={{ padding: '16px', color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.4' }}>{t.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>Frequently Asked Sourcing Questions (AEO Q&A)</h2>
          <div style={{ display: 'grid', gap: '25px', marginBottom: '40px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.15rem', marginBottom: '12px', fontWeight: 600 }}>{faq.q}</h4>
                <p style={{ color: '#c0c0c0', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request a Custom Direct-Factory Quote</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Submit your box dimensions, print layout, and estimated target order volume inside our RFQ table. Our pricing analysts will provide a detailed direct-factory tiered quote within 12 hours.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Request Direct-Factory Quotation
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
