'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function MinimalistLuxuryHotFoilPaperCarrierBags() {
  const specs = [
    { name: 'Bag Architecture', val: 'Premium heavy-duty paper carrier bag with reinforced handles and flat square base' },
    { name: 'Standard MOQ', val: '2,000 Pcs (Direct Factory Bulk Pricing Tiers)' },
    { name: 'Base Paperboard', val: '250g - 300g premium white cardboard or thick natural uncoated kraft papers' },
    { name: 'Custom Branding', val: 'Gold or silver metallic hot-foil stamped brand logo ("CUSTOM MADE")' },
    { name: 'Carrying Handle', val: 'Wide flat-cotton ribbons or thick woven grosgrain loops securely riveted inside the rim' },
    { name: 'Paper Colors', val: 'Available in deep forest green, charcoal dark brown, rich burgundy, or warm mustard orange' },
    { name: 'Eco Certification', val: 'FSC-certified paper cores, fully recyclable, water-based non-toxic soy inks' },
    { name: 'Reinforcements', val: '450g high-density cardboard inserts under the top fold-over rim and bottom base' }
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
              <span className="detail-gallery-badge">Luxury Carrier Bag</span>
              <Image 
                src="/images/minimalist-luxury-hot-foil-paper-carrier-bags.webp" 
                alt="Minimalist Luxury Hot-Foil Paper Carrier Bags Wholesale - Eco-friendly bags" 
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
                Minimalist Sourcing Elegance
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Minimalist Luxury Hot-Foil Paper Carrier Bags
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Exude refined, minimalist prestige with our custom minimalist luxury hot-foil paper carrier bags. Specifically designed for high-end boutique retail and luxury events, these bags are constructed from heavy-weight white cardboard or natural uncoated kraft paper. Available in deep earth tones (forest green, dark brown, burgundy, and mustard orange), each bag features custom gold foil-stamped branding, comfortable flat cotton ribbons, and full-cover double cardboard reinforcements.
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
                  Get Sourcing Bag Quote
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
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Reinforced Carrying Strength & Precision Gold hot stamping</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Combining premium aesthetics with flawless structural engineering.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Double-Reinforced Cardboard</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We insert a 450g high-density cardboard base plate into the bottom of each gift bag, alongside folded cardboard top rims. This double-reinforcement guarantees that the bag will maintain its flat shape and carry up to 5kg without tearing.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Vibrant Gilded Embellishments</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>The center script is finished using Swiss-engineered hot-foil stamping machinery, ensuring high-gloss reflectivity that catches ambient retail lighting and elevates perceived brand value.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Flat-Cotton Ribbon Handle</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Each bag is equipped with matching wide flat-cotton ribbons or grosgrain loops. The handles are pre-riveted and glued inside the top fold-over rim to ensure comfortable carrying and an elite presentation.</p>
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
