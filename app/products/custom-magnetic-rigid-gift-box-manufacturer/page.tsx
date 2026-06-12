'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomMagneticRigidGiftBoxManufacturer() {
  const specs = [
    { name: 'Box Architecture', val: 'Premium Rigid Book-Style Folding Box with hidden dual N52 Neodymium Magnetic Closure' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct Factory Bulk Orders)' },
    { name: 'Magnetic Force', val: 'Concealed high-strength N52 Neodymium Magnets (1500 - 1800 Gauss) for perfect click feedback' },
    { name: 'Core Grayboard', val: '1200g - 1800g (Grade AA) Heavy-Duty Industrial Rigid Grayboard' },
    { name: 'External Wrapping', val: 'Embossed Matte Specialty Paper / Soft Touch Matte Film / Premium Art Paper' },
    { name: 'Branding Finishes', val: 'Metallic Hot Foil Stamping, Deep Embossing, Raised Spot UV, 3D Silk Screen Printing' },
    { name: 'Eco Certification', val: '100% Recyclable, FSC Certified paper cores, ISO9001:2015, SGS food-grade non-toxic soy inks' },
    { name: 'Design Solutions', val: 'Free 3D digital renderings, structural V-groove flat-pack mechanics' }
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
              <span className="detail-gallery-badge">Direct Manufacturer</span>
              <Image 
                src="/images/custom-magnetic-rigid-gift-box-manufacturer.webp" 
                alt="Custom Magnetic Rigid Gift Box Manufacturer - High-end folding closure box supplier" 
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
                Premium Direct Factory Sourcing
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Custom Magnetic Rigid Gift Box Manufacturer
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                As an industry-leading OEM/ODM rigid box manufacturer, we specialize in high-end collapsible and pre-assembled magnetic rigid gift boxes. Our V-groove automated mechanics guarantee perfect 90° corners, and hidden high-performance neodymium magnets deliver an elegant, secure click. Designed to optimize shipping efficiency and elevate brand premiumness.
              </p>

              <table className="specs-table">
                <tbody>
                  {specs.map((s, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, color: '#d4af37' }}>{s.name}</td>
                      <td style={{ color: '#fff' }}>{s.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ justifyContent: 'start', marginTop: '24px' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Get Custom Direct-Factory Quote
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
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Direct Manufacturer Structural Advantages</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Why global brands source custom magnetic rigid gift boxes from LuxePack Pro.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Precision V-Groove Cutting</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We utilize high-speed automated V-grooving machines to slice clean channels into the grayboard core. This ensures that when folded, the corners form crisp, sharp, professional 90-degree edges, maintaining structural beauty.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Concealed Magnetic Closure</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Instead of weak, misaligned single magnets, we embed dual industrial-strength N52 Neodymium magnets within the rigid front flap. The closure is seamless, durable, and closes with a satisfying, premium acoustic "snap".</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Flat-Pack Folding Mechanics</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Our collapsible magnetic boxes ship completely flat, reducing storage space and ocean shipping volume by up to 75%. Pre-applied high-strength adhesive corner tapes allow for effortless, secure assembly at fulfillment sites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Recyclable Grayboard</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>100% Direct Factory Price Advantage</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Satisfying N52 Magnetic Snap Guarantee</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
