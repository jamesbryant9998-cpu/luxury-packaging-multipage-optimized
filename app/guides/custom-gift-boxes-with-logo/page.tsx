'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomGiftBoxesWithLogoGuide() {
  const finishes = [
    { title: "Metallic Hot-Foil Stamping", desc: "Available in bright gold, rose-gold, silver, copper, and custom metallic tints. Ideal for high-contrast branding on dark matte wrappers." },
    { title: "Raised Spot UV Coating", desc: "Applies a glossy dimensional varnish over specific debossed or printed sections, creating an exquisite tactile contrast." },
    { title: "Deep Debossing / Embossing", desc: "Slices three-dimensional channels or raises text into the cardstock core to establish a luxury, tactile brand signature." },
    { title: "Pantone Color Matching (PMS)", desc: "Guarantees absolute consistency for your official corporate color identity using advanced factory ink matching technology." }
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
            Branding Guide
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Custom Gift Boxes with Logo: Printing & Finishing Guide
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            Branding is much more than simple print placement. Learn the technical nuances of hot-foil stamping, raised spot UV, blind debossing, and Pantone matching to elevate your custom logo boxes to elite standards.
          </p>

          <Image 
            src="/images/custom-magnetic-rigid-gift-box-manufacturer.webp" 
            alt="Custom Gift Boxes with Logo Branding Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>Elite Logo Printing Finishing Options</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px', marginBottom: '40px' }}>
            {finishes.map((f, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', padding: '25px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.1rem', marginBottom: '10px', fontWeight: 600 }}>{f.title}</h4>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request Free 3D Brand mockup</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Upload your Adobe Illustrator (.AI) or PDF vector branding files inside our RFQ table. Our design experts will deliver high-end 3D digital renderings of your branded packaging within 24 hours.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Connect with Branding Designers
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
