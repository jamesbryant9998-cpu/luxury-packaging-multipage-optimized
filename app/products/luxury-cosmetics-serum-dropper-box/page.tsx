'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function LuxuryCosmeticsSerumDropperBox() {
  const specs = [
    { name: 'Box Architecture', val: 'Rigid book-style or magnetic skincare gift box with integrated die-cut holding insert' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct Factory Wholesale Price Tiers)' },
    { name: 'Material Core', val: '1400g - 1600g (Grade AA) Recycled High-Density Industrial Rigid Grayboard' },
    { name: 'Paper Finish', val: 'Anti-fingerprint matte cream-colored specialty wrap paper with smooth satin varnish' },
    { name: 'Insert System', val: 'Custom die-cut matching cardstock or high-density velvet-wrapped EVA foam cradling insert' },
    { name: 'Logo Customization', val: 'Bronze-gold hot-foil stamped brand name ("LUMIÈRE SKIN SCIENCE") and botanical borders' },
    { name: 'Eco Certification', val: '100% Recyclable cardboard core, FSC-certified fibers, non-toxic soy-based inks' },
    { name: 'Packaging Target', val: 'Premium skincare serum droppers, essential oil dropper bottles, high-end face lotions' }
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
              <span className="detail-gallery-badge">Luxury Cosmetics</span>
              <Image 
                src="/images/luxury-cosmetics-serum-dropper-box.webp" 
                alt="Luxury Cosmetics Serum Dropper Box - Skincare bottle packaging" 
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
                Prestige Skincare Presentation
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Luxury Cosmetics Serum Dropper Box
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Exude scientific authority and organic elegance with our custom luxury cosmetics serum dropper packaging box. Engineered specifically for high-end skincare, this rigid gift box features a premium cream-colored face wrapper highlighted by beautiful rose-gold or bronze botanical hot-foil stamping. The interior is pre-assembled with a precision die-cut rigid cardstock insert, cradle-holding your dropper bottle securely in an elite, showcase-ready position.
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
                  Get Skincare Box Quote
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
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Elegant Insert Cradle & Precision hot Foil Branding</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Combining premium aesthetics with flawless structural engineering.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Precision Die-Cut Insert</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>The interior is equipped with a custom-molded cardstock or high-density EVA insert covered in premium velvet. Precision laser cutting guarantees that the dropper bottle is cradled securely, preventing any movement during transport.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Bronze Botanical Hot Stamping</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We apply advanced metallic hot-foil stamping in luxurious bronze or gold. The elegant sunburst and botanical patterns on the outer lid and inner cover interact beautifully with retail lighting, raising brand loyalty.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>FSC Certified Greyboard</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Our skincare gift boxes are constructed from FSC-certified paper core greyboard and printed with non-toxic soy inks and water-based varnishes, showcasing that brand luxury and environmental care can coexist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Recycled Industrial Grayboard</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Water-Based Eco Soy Printing Inks</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: fontColor => '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>ISO14001 Environmentally Compliant Plant</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
