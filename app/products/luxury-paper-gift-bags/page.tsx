'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  ShoppingBag,
  Paintbrush,
  Factory,
  Globe,
  Award,
  BadgeCheck,
  Zap,
  MousePointerClick,
  Truck
} from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function LuxuryPaperGiftBagsPillarPage() {
  const styles = [
    { name: 'Satin Ribbon Handle Bags', desc: 'Elegant bags featuring wide, silky satin ribbons for a truly high-end tactile experience.', image: '/images/bespoke-personalized-floral-ribbon-gift-bag.webp' },
    { name: 'Cotton Rope Handle Bags', desc: 'Classic luxury with thick, soft cotton or twisted rope handles anchored with metal aglets.', image: '/images/polka-dot-especially-for-you-gift-bag.webp' },
    { name: 'Minimalist Die-Cut Handle Bags', desc: 'Sleek, modern aesthetic with reinforced die-cut handles for a clean, architectural look.', image: '/images/minimalist-luxury-hot-foil-paper-carrier-bags.webp' },
    { name: 'Gusset-Printed Boutique Bags', desc: 'Maximize branding impact with custom prints or metallic foils on the side gussets and interior.', image: '/images/luxury-paper-bags-collection.webp' }
  ];

  const specs = [
    { name: 'Primary Material', val: '210g - 350g Premium Ivory Board / Art Card / Kraft Paper' },
    { name: 'Reinforcements', val: '450g high-density cardboard inserts at top rim and bottom base' },
    { name: 'Carrying Capacity', val: 'ECT-32 rated, holds up to 6kg of luxury retail merchandise' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct Factory Wholesale Tiers available)' },
    { name: 'Eco Status', val: '100% Recyclable, FSC Certified fibers, Non-toxic Soy Inks' },
    { name: 'Production Lead Time', val: '7-10 Days for standard bulk orders' }
  ];

  const finishes = [
    { title: 'Gold & Silver Hot Foil', desc: 'Precision metallic stamping that catches retail light and communicates prestige.' },
    { title: 'Raised Spot UV Varnish', desc: 'Adds a glossy, three-dimensional tactile depth to your logo or patterns.' },
    { title: 'Deep Blind Embossing', desc: 'Creates architectural texture in the paper core for a sophisticated, understated mark.' },
    { title: 'Anti-Scratch Matte Film', desc: 'Protective lamination that prevents scuffing and preserves a pristine, velvet-like touch.' }
  ];

  const industries = [
    { title: 'Luxury Fashion & Jewelry', desc: 'Communicate artisanal heritage and prestige for克拉-grade jewelry and couture garments.' },
    { title: 'Cosmetics & Wellness', desc: 'Clean, pharmaceutical-grade aesthetic for high-end skincare serums and spa collections.' },
    { title: 'Corporate Events & Gifting', desc: 'Elevate VIP guest experiences with personalized, heavy-duty commemorative carriers.' }
  ];

  const benefits = [
    { title: 'Factory-Direct Pricing', desc: 'We are the manufacturer, not a trading company. No middleman markup. You deal directly with the production team, which means lower prices and full control over quality.' },
    { title: 'Physical Sample Always Included', desc: 'We never go straight to bulk production. A physical pre-production sample is made in 3-5 days for your hands-on approval. Sample cost is refunded on orders over 500 pcs.' },
    { title: 'Low MOQ, No Compromise', desc: '100 pcs MOQ covers most styles. This means small brands and emerging labels get the same quality and customisation options as large-volume buyers.' },
    { title: 'Global Shipping Experience', desc: 'We ship to 50+ countries via sea, air and express. Full export documentation including commercial invoice, packing list, Bill of Lading, and certificates as required.' },
    { title: 'Free 3D Mockup Before Production', desc: 'Before any sample is made, you receive a 3D rendered mockup of your bag with your artwork applied. This allows structural and visual approval without spending upfront.' },
    { title: 'Strict Quality Control', desc: 'Every batch goes through a 3-stage QC process: raw material inspection, in-line production check, and final pre-shipment inspection. Defect rate consistently below 0.5%.' }
  ];

  const faqs = [
    {
      q: "What makes a paper bag 'luxury' compared to standard retail bags?",
      a: "Luxury bags use significantly heavier cardstock (250g+ vs 120g), include hidden cardboard reinforcements at the base and handles, and feature premium finishes like hot-foil stamping and satin ribbon handles that standard bags lack."
    },
    {
      q: "Can I customize the handles of my gift bags?",
      a: "Yes. We offer silk satin ribbons, grosgrain tapes, twisted cotton ropes, and even flat cotton handles in any Pantone color to match your brand identity."
    },
    {
      q: "Are your luxury paper bags eco-friendly?",
      a: "Absolutely. All our bags are made from FSC-certified sustainable forests, use water-based protective coatings instead of plastic laminates, and are 100% recyclable."
    },
    {
      q: "What is the typical turnaround time for a custom order?",
      a: "Digital mockups take 24 hours, physical samples take 3-5 days, and mass production is usually completed in 10-12 days depending on complexity."
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative', color: '#fff' }}>
      <Header />

      {/* Hero Section */}
      <section className="product-detail-hero" style={{ paddingTop: '160px', paddingBottom: '80px', background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
        <div className="container">
          <div className="detail-grid" style={{ alignItems: 'center' }}>
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Wholesale Pillar Page</span>
              <Image 
                src="/images/luxury-paper-gift-bag-main.webp" 
                alt="Luxury Paper Gift Bag Manufacturer in China" 
                width={800} 
                height={800} 
                priority 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}>
                <Factory size={14} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
                Direct China Manufacturer
              </div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1.1', fontWeight: 700 }}>
                Custom Luxury Paper Gift Bags Manufacturer
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '32px' }}>
                Elevate your brand's physical presence with premium paper carrier bags. From boutique shopping bags to commemorative event carriers, LuxePack Pro delivers precision-crafted, heavy-duty luxury bags with gold foil, embossing, and artisanal ribbon handles. Factory-direct wholesale, MOQ from 100 pcs, free 3D mockup before production.
              </p>
              
              <div style={{ display: 'flex', gap: '30px', margin: '40px 0' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>100</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>MOQ PCS</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>3-5</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>DAYS SAMPLE</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>12-15</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>DAYS BULK</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>50+</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>COUNTRIES SHIPPED</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  GET FREE QUOTE ON WHATSAPP
                </Link>
                <Link href="/#products" className="btn" style={{ border: '1px solid #d4af37', color: '#d4af37', padding: '16px 40px' }}>
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are custom luxury paper gift bags */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>What are Custom Luxury Paper Gift Bags?</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center' }}>
            Unlike standard retail bags, a luxury paper gift bag is a high-performance branding tool engineered for durability and aesthetic prestige. These bags are characterized by the use of **heavyweight art cardboard (210g - 350g)**, reinforced top rims and bottom bases, and sophisticated finishing techniques. At LuxePack Pro, we treat the gift bag as an extension of your product, ensuring it provides a seamless, high-end sensory experience from the moment it is carried.
          </p>
        </div>
      </section>

      {/* Gift Bag Styles */}
      <section className="section" style={{ backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Signature Gift Bag Styles</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '700px', margin: '0 auto' }}>Bespoke carrier solutions tailored for boutique retail, luxury gifting, and high-end events.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {styles.map((style, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-10px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
                <Image src={style.image} alt={style.name} width={400} height={300} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '25px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#d4af37' }}>{style.name}</h3>
                  <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Technical Specifications</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#0d0d0d', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.1)' }}>
            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {specs.map((s, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '20px 30px', fontWeight: 600, color: '#d4af37', width: '35%' }}>{s.name}</td>
                    <td style={{ padding: '20px 30px', color: '#ccc' }}>{s.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Finishing Options */}
      <section className="section" style={{ backgroundColor: '#070707' }}>
        <div className="container">
          <div className="detail-grid" style={{ gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Premium Finishing & Branding</h2>
              <div style={{ display: 'grid', gap: '30px' }}>
                {finishes.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#d4af37', flexShrink: 0 }}><Paintbrush size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{f.title}</h4>
                      <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/luxury-paper-bag-finishes.webp" 
                alt="Luxury Paper Bag Finishing Details" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: '#d4af37', color: '#000', padding: '20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                Precision Hot Foil Stamping
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="detail-grid" style={{ gap: '80px', alignItems: 'center', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Industry Applications</h2>
              <div style={{ display: 'grid', gap: '30px' }}>
                {industries.map((ind, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#d4af37', flexShrink: 0 }}><Globe size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{ind.title}</h4>
                      <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{ind.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ direction: 'ltr' }}>
              <Image 
                src="/images/luxury-paper-bag-industry-application.webp" 
                alt="Luxury Paper Bag Industry Application" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why LuxePack Pro */}
      <section className="section" style={{ backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600, display: 'block', marginBottom: '10px' }}>WHY LUXUPACKAGE</span>
            <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Why Source Luxury Paper Bags from Us?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.2rem', fontWeight: 600 }}>{b.title}</h4>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <HelpCircle size={40} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h2 style={{ fontSize: '2.5rem' }}>Luxury Gift Bag Sourcing FAQ</h2>
          </div>
          <div style={{ display: 'grid', gap: '25px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', padding: '35px', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.2rem', marginBottom: '15px', fontWeight: 600 }}>{faq.q}</h4>
                <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC & ISO9001 Certified Factory</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BadgeCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Zero-Defect QA Guarantee</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Truck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>DDP Shipping to 50+ Countries</span>
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Ready to Elevate Your Brand Carrying Experience?</h2>
          <Link href="/#rfq" className="btn btn-primary" style={{ padding: '18px 50px', fontSize: '1.1rem' }}>
            Request Your Custom Design Today
          </Link>
        </div>
      </div>

      <FloatingContact />
    </main>
  );
}
