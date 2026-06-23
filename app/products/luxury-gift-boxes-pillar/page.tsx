'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Box, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  Settings, 
  Truck, 
  Layout, 
  Paintbrush,
  HelpCircle,
  Globe,
  BadgeCheck,
  Zap,
  Star
} from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function LuxuryGiftBoxesPillarPage() {
  const styles = [
    { name: 'Classic Magnetic Ribbon Box', desc: 'Elegant magnetic closure combined with hand-tied satin ribbons for a secure decorative finish.', image: '/images/luxury-gift-boxes-pillar-hero.webp' },
    { name: 'Hinged Rigid Gift Box', desc: 'Sturdy book-style opening with reinforced edges, perfect for premium electronics and wine.', image: '/images/luxury-gift-box-styles-showcase.webp' },
    { name: 'Drawer Style Luxury Box', desc: 'Smooth sliding mechanism with a ribbon pull or notch, ideal for jewelry and small accessories.', image: '/images/bespoke-jewelry-drawer-packaging-boxes.webp' },
    { name: 'Two-Piece Shoulder Box', desc: 'Luxurious reveal with a visible or hidden neck/shoulder for a sophisticated layered look.', image: '/images/men-grooming-kit-rigid-shoulder-box.webp' }
  ];

  const specs = [
    { name: 'Core Material', val: '1200g - 1800g Industrial Rigid Grayboard (Grade AA)' },
    { name: 'Wrap Paper', val: 'Premium Specialty Paper, Art Paper (157g), or Textured Kraft' },
    { name: 'Dimensions', val: 'Fully Customizable (Small jewelry to large garment sizes)' },
    { name: 'Printing', val: 'CMYK Offset, Pantone Spot Colors, Soy-based Eco Inks' },
    { name: 'Closure System', val: 'Hidden N52 Neodymium Magnets or Precision Friction Fit' },
    { name: 'Standard MOQ', val: '500 - 1,000 Pcs (Wholesale factory direct)' }
  ];

  const finishes = [
    { title: 'Hot Foil Stamping', desc: 'Precision application of gold, silver, or rose gold metallic foils for high-contrast branding.' },
    { title: 'Spot UV & Embossing', desc: 'Tactile 3D effects that highlight specific design elements with glossy or raised textures.' },
    { title: 'Anti-Scratch Lamination', desc: 'Durable soft-touch matte film that prevents fingerprints and preserves the box\'s prestige.' },
    { title: 'Custom Die-Cut Inserts', desc: 'Tailored EVA foam, velvet cradles, or eco-molded pulp to secure your luxury products.' }
  ];

  const industries = [
    { title: 'Jewelry & Watches', desc: 'Weighted, velvet-lined boxes that secure high-value timepieces and fine jewelry.' },
    { title: 'Cosmetics & Fragrance', desc: 'Bespoke designs that create a theatrical reveal for high-end skincare and perfumes.' },
    { title: 'Apparel & Accessories', desc: 'Large-format rigid boxes for designer clothing, handbags, and premium footwear.' },
    { title: 'Gourmet & Gifting', desc: 'Sophisticated food-safe packaging for artisanal chocolates, wine, and corporate hampers.' }
  ];

  const benefits = [
    { title: 'Direct Source Pricing', desc: 'Eliminate middlemen. Buy directly from our ISO-certified factory in China for maximum ROI.' },
    { title: 'Free Prototyping', desc: 'Digital 3D mockups and physical pre-production samples to ensure 100% design accuracy.' },
    { title: 'Global Compliance', desc: 'FSC-certified materials and eco-friendly inks that meet European and North American standards.' },
    { title: 'Rapid Production', desc: 'Automated V-groove production lines delivering mass orders in just 10-14 days.' }
  ];

  const faqs = [
    {
      q: "What is the typical MOQ for custom luxury gift boxes?",
      a: "Our standard wholesale MOQ starts at 500 pcs, but we offer smaller batches for specific high-end designs starting from 100-200 pcs."
    },
    {
      q: "Can I customize the interior of the luxury boxes?",
      a: "Yes. We offer a full range of custom inserts including precision-cut EVA foam, satin lining, velvet cradles, and eco-friendly paperboard dividers."
    },
    {
      q: "Are your luxury packaging materials eco-friendly?",
      a: "Absolutely. We use recycled rigid board and FSC-certified wrap papers. Our printing processes utilize soy-based inks and non-toxic adhesives."
    },
    {
      q: "Do you ship internationally to the US and Europe?",
      a: "Yes, we offer DDP (Delivered Duty Paid) shipping to the USA, UK, EU, and Australia, handling all customs and duties for you."
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative', color: '#fff' }}>
      <Header />

      {/* Hero Section */}
      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
        <div className="container">
          <div className="detail-grid" style={{ alignItems: 'center' }}>
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Wholesale Pillar Page</span>
              <Image 
                src="/images/luxury-gift-boxes-pillar-hero.webp" 
                alt="Luxury Gift Boxes Manufacturer - Custom Wholesale Packaging" 
                width={800} 
                height={800} 
                priority 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}>
                <Star size={14} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
                Premium Custom Packaging Solutions
              </div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1.1', fontWeight: 700 }}>
                Wholesale Luxury Gift Boxes Manufacturer
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '32px' }}>
                Elevate your brand with bespoke luxury gift boxes designed for ultimate shelf appeal and customer unboxing experience. As a leading manufacturer, we combine precision engineering with high-end finishing to deliver rigid packaging that protects your products and amplifies your brand authority.
              </p>
              
              <div style={{ display: 'flex', gap: '30px', margin: '40px 0' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>500</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>MIN MOQ</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>7-10</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>SAMPLE DAYS</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>ISO</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>CERTIFIED</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>DDP</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>SHIPPING</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="https://wa.me/8618326001631?text=Hi%20LuxePack%20Pro%2C%20I%20am%20looking%20for%20custom%20luxury%20design%20quote." className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  GET A FREE DESIGN QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Luxury Gift Boxes */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>What are Luxury Gift Boxes?</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center' }}>
            Luxury gift boxes are premium rigid packaging solutions defined by their structural integrity and high-end aesthetic appeal. Unlike standard folding cartons, luxury rigid boxes are constructed from **high-density industrial greyboard** that does not collapse, providing absolute protection for premium goods. These boxes serve as a powerful marketing tool, using specialty textures, magnetic closures, and metallic foils to create an unforgettable brand unboxing experience.
          </p>
        </div>
      </section>

      {/* Luxury Gift Boxes Styles */}
      <section className="section" style={{ backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Popular Luxury Gift Box Styles</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '700px', margin: '0 auto' }}>From magnetic closures to sliding drawers, choose the perfect architecture for your brand reveal.</p>
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
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Luxury Finishing Options</h2>
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
                src="/images/luxury-packaging-finishing-details.webp" 
                alt="Luxury Packaging Finishing Details" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="detail-grid" style={{ gap: '80px', alignItems: 'center', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Premium Industry Solutions</h2>
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
                src="/images/luxury-gift-boxes-industry-applications.webp" 
                alt="Luxury Gift Boxes Industry Applications" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Luxupackage */}
      <section className="section" style={{ backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600, display: 'block', marginBottom: '10px' }}>WHY LUXUPACKAGE</span>
            <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>The Gold Standard in Luxury Packaging</h2>
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
            <h2 style={{ fontSize: '2.5rem' }}>Luxury Packaging FAQ</h2>
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>ISO 9001 Certified Quality Control</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BadgeCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Sustainable Materials</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Truck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Fast DDP Shipping Worldwide</span>
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Ready to Elevate Your Packaging?</h2>
          <Link href="/#rfq" className="btn btn-primary" style={{ padding: '18px 50px', fontSize: '1.1rem' }}>
            Get Your Free Wholesale Quote
          </Link>
        </div>
      </div>

      <FloatingContact />
      
      {/* JSON-LD for AEO/SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Luxury Gift Boxes Wholesale",
        "image": [
          "https://luxupackage.com/images/luxury-gift-boxes-pillar-hero.webp"
        ],
        "description": "High-end custom luxury gift boxes manufacturer. Wholesale rigid packaging with magnetic closure and premium finishing for jewelry, cosmetics, and apparel.",
        "brand": {
          "@type": "Brand",
          "name": "Luxupackage"
        },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "1",
          "lowPrice": "0.50",
          "highPrice": "5.00",
          "priceCurrency": "USD"
        }
      })}} />
    </main>
  );
}
