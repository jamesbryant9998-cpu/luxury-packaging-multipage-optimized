'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function LuxuryVelvetLinedJewelryShowcaseRigidBox() {
  const specs = [
    { name: 'Box Architecture', val: 'Two-piece rigid lid-and-base luxury jewelry presentation and showcase box' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct Factory Wholesale Pricing Tiers)' },
    { name: 'Core Board Core', val: '1400g - 1800g (Grade AA) Recycled High-Density Industrial Cardboard' },
    { name: 'Exterior Finishing', val: 'Anti-fingerprint deep matte black specialty paper wrap with fine linen texture' },
    { name: 'Interior Liner', val: 'Ultra-soft, hand-glued anti-tarnish black velvet insert securely holding necklace and earrings' },
    { name: 'Custom Branding', val: 'Gold metallic hot-foil stamped brand logo ("LUXOPACK LUXURY PACKAGING") inside and outside' },
    { name: 'Eco Certification', val: 'FSC-certified paper cores, fully recyclable, non-toxic soy inks and water adhesives' },
    { name: 'Target Contents', val: 'High-end diamond necklaces, gold earrings sets, luxury heirlooms, fine watch slots' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      {/* 顶部 Header */}
      <Header />

      {/* 详情主区域 */}
      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container">
          {/* Back button */}
          <Link href="/#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', marginBottom: '32px', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}>
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="detail-grid">
            {/* 左：产品大图 */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Bespoke Jewelry Case</span>
              <Image 
                src="/images/luxury-velvet-lined-jewelry-showcase-rigid-box.webp" 
                alt="Luxury Velvet-Lined Jewelry Showcase Rigid Box Wholesale - Manufacturer" 
                width={600} 
                height={450} 
                className="detail-gallery-image" 
                priority 
                style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Prestige Jewelry Presentation
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Luxury Velvet-Lined Jewelry Showcase Rigid Box
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Present your fine jewelry like a work of art with our custom luxury velvet-lined jewelry showcase rigid box. Expertly crafted from heavy-weight industrial cardboard, this classic two-piece lid-and-base box is wrapped in fine-textured, anti-fingerprint matte black face paper. The interior is pre-fitted with a plush, hand-glued anti-tarnish black velvet insert designed to hold a precious necklace and matching earrings set securely, complete with brilliant gold hot-foil branded detailing.
              </p>

              <table className="specs-table">
                <tbody>
                  {specs.map((s, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, color: '#d4af37', width: '30%' }}>{s.name}</td>
                      <td style={{ color: '#fff' }}>{s.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ justifyContent: 'start', marginTop: '24px' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Get Custom Jewelry Box Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势/技术亮点 */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Bespoke Velvet Lining & Precision Gold Foil</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Combining premium aesthetics with flawless structural engineering.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Anti-Tarnish Velvet Lining</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Standard paperboards release acidic chemical vapors that can tarnish fine gold, silver, or platinum. LuxePack Pro uses specialized acid-free microfibers and anti-static premium velvet linings to block oxidation and prevent scratches.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Double-Panel Hot Stamping</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We apply advanced gold hot-foil stamping on both the outer lid and the interior cover. The glossy gold brand marks contrast beautifully with the deep matte black texture, communicating absolute brand heritage and trust.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Solid Grayboard Core</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Constructed from 1500g high-density industrial greyboard, our boxes provide a substantial, weighted feel in hand. Precision V-grooving cuts guarantee sharp 90-degree corner alignment to prevent structural warping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Recyclable Heavy Board</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Water-Based Matte Protective Coatings</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>SGS Audited Non-Toxic Eco Soy Inks</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
