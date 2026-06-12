'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function WineBoxes() {
  const specs = [
    { name: 'Box Configurations', val: 'Premium Rigid Presentation Box, Hinged Book-Style Box, Magnetic Flap' },
    { name: 'Standard MOQ', val: '1,000 Pcs' },
    { name: 'Raw Board Specification', val: '1500g - 1800g (Grade A) Extra-Thick Industrial Rigid Grayboard' },
    { name: 'Wrapping Materials', val: 'Specialty Suede Paper, Premium Linen-Textured Card, Soft-Touch Matte Paper' },
    { name: 'Cushioning Cradle', val: 'Molded EPS Foam with Luxurious Satin Drape / High-Density Custom-Cut EVA Velvet insert' },
    { name: 'Decoration Options', val: 'Dignified Gold/Bronze Hot Foil Stamping, Spot Gloss UV, Deep Embossing' },
    { name: 'Lead Time', val: '12 - 14 Working Days (Meticulous Handcraft Included)' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      {/* 顶部 Header */}
      <Header />

      {/* 详情主区域 */}
      <section className="product-detail-hero">
        <div className="container">
          <div className="detail-grid">
            {/* 左：大图占位/Gallery */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Wine Presentation</span>
              <Image src="/images/luxury-wine-gift-packaging-boxes.webp" alt="Luxury Wine Gift Packaging Boxes Custom Bottle Box Supplier" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Artisanal Security & Regal Aesthetics
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Luxury Wine Gift Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our artisanal wine gift presentation boxes are engineered with extra-heavy rigid double-greyboard and protective form-fitting velvet drapes. Specifically designed to secure premium wine, champagne, and spirit bottles through international transit while creating a sense of timeless elegance upon opening.
              </p>

              <table className="specs-table">
                <tbody>
                  {specs.map((s, idx) => (
                    <tr key={idx}>
                      <td>{s.name}</td>
                      <td>{s.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ justifyContent: 'start' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ flexGrow: 1 }}>
                  Inquire and Request Wine Box Samples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Regal Satin Velvet bottle drapes</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Extra-Hefty Impact-Resistant Board</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Classic metallic foil branding accents</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
