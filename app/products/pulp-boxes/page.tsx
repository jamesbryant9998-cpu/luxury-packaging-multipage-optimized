'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function PulpBoxes() {
  const specs = [
    { name: 'Material Origin', val: '100% Biodegradable & Compostable Sugarcane Bagasse and Bamboo Molded Pulp Fibers' },
    { name: 'Standard MOQ', val: '2,000 Pcs' },
    { name: 'Structural Strength', val: 'Double-Pressed Heavy-Duty Impact-Resistant pulp wall, natural lock-fit closure design' },
    { name: 'Haptic Feel', val: 'Organic Smooth Satin Texture, clean natural finish (no chemical bleaching used)' },
    { name: 'Cushioning Cradle', val: 'Zero-Plastic integrated molded fiber cradles precisely contoured to fit high-end products' },
    { name: 'Decoration Options', val: 'High-Pressure Deep Debossing, Water-based Eco Soy Ink printing, Hot Plate branding' },
    { name: 'Lead Time', val: '10 - 12 Working Days (100% Zero-Carbon Manufacturing)' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      <section className="product-detail-hero">
        <div className="container">
          <div className="detail-grid">
            {/* 左：大图 */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Eco Luxury</span>
              <Image src="/images/eco-sustainable-molded-pulp-boxes.webp" alt="Eco-Sustainable Molded Pulp Packaging Boxes Manufacturer" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：规格 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Zero-Plastic & Pure Organic Craft
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Eco-Sustainable Molded Pulp Packaging Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our organic, biodegradable molded pulp presentation packaging is crafted from 100% natural plant-based bamboo and sugarcane fibers. Engineered with advanced precision molding and high-end aesthetic debossing, these eco-luxury containers provide drop-proof safety while expressing a clean, zen-like sustainable brand promise.
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
                <Link href="/products/pulp-boxes/biodegradable-bamboo-pulp-tray" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Explore Eco-Pulp Box Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>100% Biodegradable & Compostable</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Zero-Plastic Fiber Cushioning</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Premium Deep Debossed Branding</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
