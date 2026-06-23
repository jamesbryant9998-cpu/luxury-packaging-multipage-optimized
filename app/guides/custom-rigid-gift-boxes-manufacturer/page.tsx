'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomRigidGiftBoxesManufacturerGuide() {
  const specs = [
    { name: "Rigid Box Styles", val: "Lid-and-Base (Classic two-piece), Shoulder boxes (with neck collars), Tray sleeves (sliding), Book-style folding" },
    { name: "Core Board Thickness", val: "1000g, 1200g, 1500g, 1800g (Grade AA Double Grayboard Core)" },
    { name: "Custom Lining Trays", val: "High-density EVA foam, velvet-covered PS vacuums, sustainable molded bamboo pulp, satin fabric wraps" },
    { name: "Printing Capabilities", val: "High-fidelity offset lithography, UV silk screening, Pantone matching, soy-based inks" }
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
            Rigid Sourcing Guide
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Custom Rigid Gift Boxes Manufacturer: Classic Core Craft
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            A masterclass on procuring rigid lid-and-base (two-piece) and shoulder-neck rigid gift boxes directly from the factory floor. Compare box layouts, learn interior tray engineering, and optimize grayboard thickness to achieve unparalleled retail stability.
          </p>

          <Image 
            src="/images/apparel-gift-box-main.webp" 
            alt="Custom Rigid Gift Boxes Sourcing Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <table className="specs-table" style={{ marginBottom: '40px' }}>
            <tbody>
              {specs.map((s, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 600, color: '#d4af37', width: '30%' }}>{s.name}</td>
                  <td style={{ color: '#fff' }}>{s.val}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'grid', gap: '30px', marginTop: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Understanding Lid-and-Base Tolerances</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6' }}>The classic two-piece rigid box requires precise air resistance calibration during opening. If the lid has tight suction, opening the box becomes a clumsy struggle; if too loose, the lid slides off instantly. LuxePack Pro calibrates air tolerances to the millimeter, ensuring a smooth, weighted release feel that conveys premium value.</p>
            </div>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Shoulder Box collar Engineering</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6' }}>Shoulder boxes introduce a physical interior neck collar that extends above the base. This creates a gorgeous double-layered visual accent. We can hot-foil stamp the outer neck collar with contrasting gold foils, presenting a stunning dual-tone reveal during the opening ritual.</p>
            </div>
          </div>

          <div style={{ marginTop: '50px', backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request rigid Box Die-Lines</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Connect with our structural engineers today to receive free, customizable 2D die-line templates and digital 3D renderings of your custom lid-and-base layout.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Contact Direct Factory
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
