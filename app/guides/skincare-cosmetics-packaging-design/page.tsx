'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function SkincareCosmeticsPackagingDesignGuide() {
  const principles = [
    { name: "Glass Fragility Protection", val: "Bespoke glass droppers require absolute structural immobilization. We engineer precise top-neck collars and lower-base cradles to absorb drop forces and eliminate bottle wobble." },
    { name: "Chemical Safety of Adhesives", val: "Skincare ingredients (essential oils, active serums) contain organic compounds that can degrade low-grade adhesives. We use fully compliant, acid-free water-based adhesive films." },
    { name: "Unboxing Opening Sequences", val: "A book-style rigid opening sequence establishes authority. By integrating custom-molded interior panels with foil stampings, you create a majestic, theatrical presentation." },
    { name: "Eco-Laminated Grayboards", val: "100% Recyclable cardboard greyboard laminated with FSC specialty paper and printed with non-toxic soy inks to comply with EPR and plastic-free bans." }
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
            Skincare Design Guide
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Luxury Skincare & Cosmetics Packaging Kit Design Guide
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            A masterclass on packaging design for high-end skincare, active serums, and cosmetic bottles. Learn how to protect fragile glass dropper containers, design elegant opening sequences, and comply with global plastic-free initiatives.
          </p>

          <Image 
            src="/images/luxury-cosmetics-serum-dropper-box.webp" 
            alt="Luxury Skincare Cosmetics Packaging Design Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>Luxury Skincare Packaging Design Principles</h2>
          
          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)' }}>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600, width: '30%' }}>Design Parameter</th>
                  <th style={{ padding: '16px', color: '#d4af37', fontWeight: 600 }}>B2B Wholesale Design Specification</th>
                </tr>
              </thead>
              <tbody>
                {principles.map((p, idx) => (
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
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Custom-Molded Cardstock vs. EVA Foam Inserts</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6' }}>While high-density EVA foam covered in velvet provides excellent cushioning, it is subject to heavy eco-taxes under new plastic waste directives. LuxePack Pro specializes in custom-engineered, multi-layered die-cut cardstock inserts. These rigid card inserts are 100% recyclable, fold securely to cradle your serum dropper bottle, and provide a clean, sustainable interior presentation.</p>
            </div>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Gilded Bronze Hot-Stamping Accents</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6' }}>A high-end skincare line requires delicate, premium branding. We use precision bronze and gold hot-foil stamping on the exterior and interior covers. Stamping key ingredients (such as Hyaluronic Acid or Niacinamide) in gold foil communicates scientific rigor and absolute premium authority at first glance.</p>
            </div>
          </div>

          <div style={{ marginTop: '50px', backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request a Custom Skincare Box mockup</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              We provide free digital 3D mockups and customizable structural templates within 24 hours of receiving your Adobe Illustrator (.AI) design files. Speak to our design experts today.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Connect with Cosmetics Designers
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
