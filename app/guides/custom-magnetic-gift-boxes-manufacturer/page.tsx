'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, HelpCircle, Landmark, ShieldCheck, ChevronRight, FileText, Settings, BadgeDollarSign, Truck, Sparkles } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomMagneticGiftBoxesManufacturerGuide() {
  const sections = [
    {
      title: "1. Core Structural Anatomy & Materials",
      content: "The foundation of an elite rigid magnetic gift box lies in its internal board selection. A standard manufacturer utilizes cheap, single-ply chipboards which bend under temperature changes. LuxePack Pro uses Grade-AA high-density recycled grayboard (typically 1200g to 1800g, equivalent to 2.0mm to 3.0mm thickness). This rigid core is wrapped with heavy premium art papers or custom-embossed specialty wrap papers, preventing warping and providing a solid, heavy-weight, luxurious feel in the hands of your buyers."
    },
    {
      title: "2. Precision V-Groove Engineering vs. Die-Cutting",
      content: "Why do some magnetic boxes look perfectly rectangular, while others have rounded, puffy edges? It comes down to V-Grooving. Standard cheap gift boxes are die-cut and folded. At LuxePack Pro, our automated V-grooving machines cut sharp, 90-degree channels into the grayboard. When folded, this allows all four corners to meet at crisp, razor-sharp 90-degree angles, creating the modern flat-folding collapsible or rigid box silhouette favored by luxury perfume and cosmetics brands."
    },
    {
      title: "3. Magnet Calibration & Satisfying Closure Mechanics",
      content: "The magnetic closure is the 'emotional climax' of your customer's unboxing journey. If the magnet is too weak, the lid misaligns; if it is too strong, opening it becomes difficult and claws at the paper wrapper. We embed dual high-strength N52 Neodymium magnets (ranging from 1500 to 1800 Gauss) seamlessly underneath the face paper liner. Our engineers calibrate magnet placement to the exact millimeter, ensuring a smooth, repeatable opening sequence and a deep, premium audible 'click' that communicates absolute security."
    },
    {
      title: "4. Flat-Pack Collapsible Design (Save 75% Shipping Costs)",
      content: "The biggest shipping challenge of traditional rigid boxes is volume. You are essentially paying massive international sea or air freight to ship empty air. LuxePack Pro specializes in folding collapsible magnetic structures. Engineered with precision-scored micro-folds and pre-applied industrial double-sided adhesive corner tapes, these boxes ship 100% flat. This cuts container storage and ocean shipping expenses by up to 75%, allowing you to procure premium rigid boxes at high-volume tiers without sacrificing warehouse space."
    },
    {
      title: "5. Luxury Print Embellishments & Custom Finishes",
      content: "To build solid brand authority, we offer direct-factory hot foil stamping (in gold, rose-gold, silver, and copper), raised spot UV gloss lamination (which adds a mirror-like dimensional varnish over debossed areas), and custom linen or soft-touch anti-fingerprint matte coatings. Every ink we use is food-grade, non-toxic, and soy-based, certified by SGS and compliant with global environmental laws."
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Back button */}
          <Link href="/#resources" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', marginBottom: '32px', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}>
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '16px', fontWeight: 600 }}>
            <BookOpen size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
            Pillar Sourcing Guide
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Custom Magnetic Gift Boxes Manufacturer: Sourcing & Structural Guide
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            A comprehensive manufacturing deep dive on rigid magnetic boxes. Learn how premium global brands balance grayboard thickness, precision V-grooving, Neodymium magnet Gauss ratings, flat-pack folding mechanics, and sustainable luxury materials to lower shipping costs while achieving the absolute gold-standard unboxing experience.
          </p>

          <Image 
            src="/images/custom-magnetic-rigid-gift-box-manufacturer.webp" 
            alt="Custom Magnetic Gift Boxes Sourcing Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <div style={{ display: 'grid', gap: '35px' }}>
            {sections.map((sec, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', padding: '35px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                <h3 style={{ color: '#d4af37', fontSize: '1.3rem', marginBottom: '16px', fontWeight: 600 }}>{sec.title}</h3>
                <p style={{ color: '#c0c0c0', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>{sec.content}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '50px', backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request a Custom Direct-Factory Quote</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Our design and structural engineering experts provide 100% free digital 3D mockups and technical die-line templates within 24 hours. Connect with our B2B wholesale team today.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Connect with Packaging Engineers
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
