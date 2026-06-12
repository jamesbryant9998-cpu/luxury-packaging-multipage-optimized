'use client';

import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, CheckCircle, Mail, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../../components/FloatingContact';
import Header from '../../../../components/Header';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const technicalSpecs = [
    { label: 'Model reference', value: 'LXP-PLP-340' },
    { label: 'Material ratio', value: '70% renewable sugarcane bagasse fiber and 30% sustainable organic bamboo pulp' },
    { label: 'Decomposition span', value: '100% compostable within 90 days in standard soil, leaving zero microplastics' },
    { label: 'Color choice', value: 'Organic warm beige (unbleached) or classic slate black (plant-dyed)' },
    { label: 'Wall thickness', value: 'Precision-pressed 2.2mm - 2.8mm rigid heavy-gauge fiber wall structure' },
    { label: 'Water & Oil resistance', value: 'Fluorine-free natural starch barrier (FDA food-grade compliance)' },
    { label: 'Drop safety certification', value: 'SGS drop tested from 1.5m with zero cosmetic bottle fracture' },
    { label: 'Bespoke finishing', value: '3D deep debossed typography and logo using water-based soy ink branding' }
  ];

  const customizationOptions = [
    { title: 'Anatomical Contouring', desc: 'Precision 3D tooling molds fiber pulp to mimic every unique contour of your cosmetic or perfume bottle.' },
    { title: 'Natural Color Dyeing', desc: 'Custom shades available using natural mineral pigments, including organic grey, rust, and forest green.' },
    { title: 'Modular Sleeve wraps', desc: 'Pair custom pulp trays with heavy FSC-certified recycled paper sleeves for an elegant slip-open case.' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', position: 'relative' }}>
      <Header />

      {/* 导航面包屑 */}
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '20px' }}>
        <Link href="/products/pulp-boxes" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem' }} className="hover-gold">
          <ArrowLeft size={16} /> Back to Eco-Pulp Category
        </Link>
      </div>

      {/* 主体详情 */}
      <section style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="detail-grid">
            {/* 左: 大图与多角度展示 */}
            <div>
              <div className="detail-gallery" style={{ marginBottom: '20px' }}>
                <span className="detail-gallery-badge">Model LXP-PLP-340</span>
                <Image src="/images/eco-sustainable-molded-pulp-boxes.webp" alt="Biodegradable Bamboo and Sugarcane Pulp Tray Details" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{ border: '1px solid #333', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}>
                  <Image src="/images/eco-sustainable-molded-pulp-boxes.webp" alt="Angle 1" width={150} height={112} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div style={{ border: '1px solid #d4af37', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                  <Image src="/images/eco-sustainable-molded-pulp-boxes.webp" alt="Angle 2" width={150} height={112} style={{ width: '100%', height: 'auto', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>Pulp Fibers</div>
                </div>
                <div style={{ border: '1px solid #333', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                  <Image src="/images/eco-sustainable-molded-pulp-boxes.webp" alt="Angle 3" width={150} height={112} style={{ width: '100%', height: 'auto', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '0.8rem', color: '#fff', fontWeight: 600, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>Debossed Logo</div>
                </div>
              </div>
            </div>

            {/* 右: 产品参数 & 订购通道 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Zero-Plastic Luxury & Zen Aesthetic
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px', lineHeight: '1.2' }}>
                Biodegradable Bamboo & Sugarcane Pulp Tray
              </h1>
              
              <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{ color: '#d4af37', fontWeight: 600, fontSize: '1.2rem' }}>MOQ: 2,000 Pcs</div>
                <div style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>|</div>
                <div style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>Lead Time: 10-12 Days</div>
              </div>

              <p style={{ color: '#cccccc', marginBottom: '28px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Reject plastic polymers and high-carbon manufacturing without sacrificing premium luxury protection or prestige look. This 100% biodegradable and compostable pulp presentation case is pressed from sugarcane bagasse and bamboo, offering a tactile, warm satin texture that feels beautifully natural. Excellent for organic cosmetics, plant-based perfume collections, luxury skincare gift sets, and minimal zen branding.
              </p>

              <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '12px', borderBottom: '1px solid #222', paddingBottom: '8px' }}>Technical Specifications</h2>
              <table className="specs-table" style={{ marginBottom: '30px' }}>
                <tbody>
                  {technicalSpecs.map((spec, i) => (
                    <tr key={i}>
                      <td style={{ color: '#888', fontWeight: 500, width: '40%' }}>{spec.label}</td>
                      <td style={{ color: '#fff' }}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px' }}>
                  <Mail size={18} /> Request Custom Quote & Sample Pack
                </Link>
                <a href="https://wa.me/8613800000000" className="btn" style={{ border: '1px solid #25d366', color: '#25d366', backgroundColor: 'transparent', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px' }} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={18} /> Chat via WhatsApp for Green Box Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部深度定制选项 */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Customization Capabilities</h2>
            <p className="section-desc">Tailor every physical dimension, screen control, and video memory of your smart sensory packaging.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {customizationOptions.map((opt, idx) => (
              <div key={idx} style={{ padding: '24px', backgroundColor: '#111', border: '1px solid #222', borderRadius: '4px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#d4af37', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={18} /> {opt.title}
                </h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.5' }}>{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
