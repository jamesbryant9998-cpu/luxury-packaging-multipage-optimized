'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CosmeticBoxes() {
  const specs = [
    { name: 'Target Products', val: 'Skincare Jars, Makeup Palettes, Lipstick Sets, Luxury Perfume' },
    { name: 'Standard MOQ', val: '2,000 Pcs' },
    { name: 'Paper Materials', val: '350g C1S Ivory Card / Eco Kraft Paper / Textured Specialty Paper' },
    { name: 'Finishing Options', val: 'Spot UV, Matte Soft-Touch Lamination, Gold Foil, Debossing' },
    { name: 'Lining Options', val: 'Biodegradable Sugarcane Pulp / High-Density EVA / Velvet Foam' },
    { name: 'Certification', val: 'FSC, ISO9001:2015, BSCI' },
    { name: 'Sampling Time', val: '3 - 5 Working Days' }
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
              <span className="detail-gallery-badge">Cosmetics Series</span>
              <Image src="/images/luxury-cosmetics-packaging-boxes.webp" alt="Luxury Cosmetics Packaging Boxes Custom Beauty Packaging Manufacturer" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Eco-Friendly & Safe Formulation Packaging
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Cosmetic Packaging Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our custom skincare and cosmetics boxes are fully engineered with anti-crush rigid borders and food-grade non-toxic printing inks. Ideal for high-end boutique serum jars, palette bundles, and premium fragrance collections.
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
                  Request Free 3D Design Layout
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Soy-Ink Soy Environmental Printing</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Anti-Scrush Drop Tested</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Custom Insert Engineering Available</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
