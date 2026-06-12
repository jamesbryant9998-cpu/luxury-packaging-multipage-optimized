'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function MagneticVsRigidGiftBoxGuide() {
  const comparison = [
    { type: "Magnetic Closure Boxes", pro: "Collapsible flat-pack folding designs, hidden dual Neodymium closure, reduces shipping/warehouse volume by 75%, highly reusable for consumers.", con: "Slightly longer assembly setup time at fulfillment centers (under 5 seconds per box)." },
    { type: "Classic Rigid Lid-and-Base Boxes", pro: "Ships fully pre-assembled, instantly display-ready at retail, highly rigid core structure, uniform classic unboxing sequence.", con: "High volumetric weight during shipping, occupies massive warehouse storage, higher ocean freight costs." }
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
            Comparison Guide
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Magnetic vs. Rigid Gift Box: Structural & Cost Comparison
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            Unraveling the main structural differences. Compare folding magnetic box mechanics with permanent, non-collapsible rigid boxes across freight cost, warehouse efficiency, assembly times, and visual appeal.
          </p>

          <Image 
            src="/images/custom-magnetic-gift-boxes-wholesale.webp" 
            alt="Magnetic vs Rigid Gift Box Sourcing Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>Direct Structural Comparison</h2>

          <div style={{ display: 'grid', gap: '25px', marginBottom: '40px' }}>
            {comparison.map((c, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', padding: '35px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 600 }}>{c.type}</h4>
                <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '10px' }}><strong>Pros:</strong> {c.pro}</p>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}><strong>Cons:</strong> {c.con}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request a Custom Direct-Factory Consultation</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Unsure which structure fits your product specs and fulfillment logistics? Connect with our structural engineers today to map out the perfect packaging strategy.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Speak to a Structural Engineer
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
