'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function BespokePersonalizedFloralRibbonGiftBag() {
  const specs = [
    { name: 'Bag Architecture', val: 'Bespoke custom-printed paper carrier with navy gusset panels and reinforced handles' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct-from-Factory Personalized Bulk Orders)' },
    { name: 'Base Cardstock', val: '250g - 300g (Grade AA) Extra-Thick Ivory Cardboard with satin matte finish' },
    { name: 'Custom Stamping', val: 'Rose gold hot foil-stamped custom script name ("Ananya") and matching borders' },
    { name: 'Carrying Handle', val: 'Custom 25mm wide dark navy blue silk satin ribbon handles, glued and double-riveted' },
    { name: 'Design Accents', val: 'Elegant botanical floral designs in indigo blue and rose gold foil filigrees' },
    { name: 'Tissue Wrapping', val: 'Luxurious white lining tissue paper adorned with shimmering gold-glitter metallic dots' },
    { name: 'Direct Personalization', val: 'Fully customizable center lettering, names, greetings, and event details' }
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
              <span className="detail-gallery-badge">Personalized Gifting</span>
              <Image 
                src="/images/bespoke-personalized-floral-ribbon-gift-bag.webp" 
                alt="Bespoke Personalized Floral Ribbon Gift Bag - Luxury personalized paper bag" 
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
                Prestige Custom Sourcing
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Personalized Floral Ribbon Gift Bag
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Commemorate your brand’s milestones or host unforgettable corporate events with this bespoke personalized floral ribbon gift bag. Expertly crafted from extra-thick ivory cardstock, it features a warm cream face panel bordered by indigo and rose-gold botanical prints, contrasted with starry navy-blue gussets. Outfitted with wide navy-blue satin ribbon handles, personalized rose-gold foil-stamped script, and gold-glittered tissue wraps.
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
                  Get Personalized Custom Quote
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
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Artisanal Craftsmanship & Personalization</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Combining premium botanical prints, rose-gold foils, and luxurious satin handles.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Double-Reinforced Cardstock</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We utilize robust 280g ivory board wrapped with matte scratch-resistant lamination, supported by heavy cardboard under the top handle rim and bottom base. Holds up to 6kg of luxury cosmetics, jewelry sets, or high-end retail gifts.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Personalized Rose Gold Script</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Every name, letter, or brand mark is hot-foil stamped in metallic rose-gold. We calibrate stamping temperature and pressure to ensure zero flake-off, leaving a glossy, mirror-sharp metallic texture on the board.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Riveted Navy Satin Handle</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Instead of standard cords, we integrate wide 25mm dark navy blue satin ribbons. The ribbons are double-anchored and securely glued inside the top rim fold, providing a silky, comfortable grip and an elite presentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Premium Cardboard Core</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Scratch-Repellant Matte protective Film</span>
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
