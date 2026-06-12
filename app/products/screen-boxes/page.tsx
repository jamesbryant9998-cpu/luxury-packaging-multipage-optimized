'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function ScreenBoxes() {
  const specs = [
    { name: 'Screen Specification', val: '7-inch HD High-Brightness IPS LCD Screen (1024x600 resolution), 1GB memory capacity' },
    { name: 'Standard MOQ', val: '500 Pcs' },
    { name: 'Battery & Charging', val: '1500mAh Lithium Rechargeable Battery, Type-C USB Port for high-speed charging & video transfers' },
    { name: 'Video Automation', val: 'Concealed Magnetic Induction Switch (plays video automatically upon opening, pauses when closed)' },
    { name: 'Outer Structure', val: '1500g Extra-Thick Premium Matte Grayboard, Anti-Scratch Soft-Touch Film wrapping' },
    { name: 'Cushioning Cradle', val: 'Custom-Cut High-Density EVA Foam lined with luxurious velvet or soft-touch paper' },
    { name: 'Lead Time', val: '14 - 16 Working Days (100% Electronic & Quality QC testing included)' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      <section className="product-detail-hero">
        <div className="container">
          <div className="detail-grid">
            {/* 左：大图 */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Smart Video</span>
              <Image src="/images/smart-led-screen-video-boxes.webp" alt="Smart LED Screen Video Presentation Boxes Manufacturer" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：规格 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Digital-Physical Fusion & Sensory Theater
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Smart LED Screen Video Presentation Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our cutting-edge smart video gift boxes integrate high-definition LED display screens and auto-play magnetic switches inside custom-cut rigid structures. Crafted to deliver an immersive, interactive digital-physical unboxing experience that immediately captures attention and leaves an unforgettable brand impression.
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
                <Link href="/products/screen-boxes/7-inch-hd-video-presentation-box" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Explore Smart Video Box Details
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>HD IPS Multi-Angle Screen</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Magnetic Open-and-Play Switch</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Type-C Charging & Fast Video Upload</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
