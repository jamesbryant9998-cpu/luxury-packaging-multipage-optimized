'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomCorrugatedMailerBoxesSourcingGuide() {
  const parameters = [
    { name: "Fluting Architecture", val: "E-Flute (1.6mm thickness) for sleek cosmetic and lightweight e-commerce mailers; B-Flute (3.2mm thickness) for heavy retail and subscription boxes." },
    { name: "Crush Resistance (ECT)", val: "ECT-32 (standard B2B shipping grade, carries up to 10kg) and ECT-44 (heavy-duty double-wall grade, carries up to 20kg)." },
    { name: "Double-Panel Support", val: "Built-in double-walled side and front panels upon folding, creating robust structural corners to resist transit drops." },
    { name: "Branding Embellishments", val: "Full-color outside offset lithography with water-based matte protective films, and high-contrast interior flexo print inside the lid." }
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
            Mailer Sourcing Guide
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Custom Corrugated Mailer Boxes Wholesale Sourcing Guide
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            A comprehensive, data-dense guide to procuring corrugated shipping mailers for subscription clubs and e-commerce. Compare B-flute and E-flute thickness, examine ECT crush resistance ratings, and learn how internal dual-sided printing elevates your digital unboxing.
          </p>

          <Image 
            src="/images/custom-corrugated-mailer-boxes.webp" 
            alt="Custom Corrugated Mailer Boxes Sourcing Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>Technical Mailer Engineering Parameters</h2>
          
          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)' }}>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600, width: '30%' }}>Engineering Metric</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>B2B Wholesale Technical Specification</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((p, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>{p.name}</td>
                    <td style={{ padding: '16px', color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.5' }}>{p.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'grid', gap: '30px', marginTop: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Vibrant Dual-Sided Unboxing Print</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6' }}>The unboxing moment is highly visual. While the exterior of the box undergoes standard shipping route transit, printing a high-contrast customized brand message or geometric pattern on the inner lid provides an immediate, premium surprise. LuxePack Pro calibrates dual-sided offset presses to ensure 100% registration alignment across outer and inner panels.</p>
            </div>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Extended Producer Responsibility (EPR) Compliance</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6' }}>Under strict new EU and US environmental laws, laminated composite structures are heavily taxed. LuxePack Pro corrugated boxes utilize non-toxic water-based adhesive films and certified soy-based inks. This ensures that your entire mailer box remains 100% recyclable, shielding your brand from massive EPR eco-surcharges.</p>
            </div>
          </div>

          <div style={{ marginTop: '50px', backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request Free Mailer Die-Line Templates</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              We provide free, customizable 2D Adobe Illustrator (.AI) die-line templates within 24 hours. Speak to our structural engineering team today to design a secure, high-strength shipping mailer.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Connect with Mailer Engineers
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
