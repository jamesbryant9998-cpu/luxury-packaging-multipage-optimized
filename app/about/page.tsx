'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import FloatingContact from '../../components/FloatingContact';

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Award size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />,
      title: 'Artisanal Excellence',
      desc: 'We merge state-of-the-art automated manufacturing with traditional luxury hand-assembly to guarantee micro-millimeter precision on every edge and embossing detail.'
    },
    {
      icon: <ShieldCheck size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />,
      title: 'Uncompromised Quality',
      desc: 'Certified with ISO 9001, FSC Forest Stewardship, and SGS standards. We enforce a rigorous 4-step quality control system from raw paperboards to finished master boxes.'
    },
    {
      icon: <Users size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />,
      title: 'Global Partnership',
      desc: 'Serving high-end luxury brands across North America, Europe, and the Middle East in cosmetics, jewelry, watch, and fragrance sectors with custom OEM/ODM packaging.'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#050505', color: '#fff', paddingTop: '120px' }}>
      <Header />

      {/* Hero Banner Section */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              WHO WE ARE
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '0.05em', lineHeight: '1.2', marginBottom: '24px' }}>
              Defining High-End Packaging <span style={{ color: '#d4af37' }}>Engineering</span>
            </h1>
            <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '0' }}>
              Established with a singular focus on luxury packaging, LUXEPACK PRO is a global leader in custom rigid gift box manufacturing, blending sustainable materials with premium modern embellishment crafts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Profile & Showroom */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }} className="grid-about">
          {/* Text Content */}
          <div style={{ gridColumn: 'span 7' }} className="about-text-col">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.05em' }}>
              Our Facility & Custom Art Showroom
            </h2>
            <p style={{ color: '#a0a0a0', lineHeight: '1.8', marginBottom: '16px' }}>
              With over 25,000 square meters of high-tech production facility and 3 fully automatic rigid box forming lines, we output over 150,000 premium boxes daily. Our facility houses world-class Heidelberg offset printing presses, Swiss automatic hot-foil stamping systems, and high-speed V-grooving machinery.
            </p>
            <p style={{ color: '#a0a0a0', lineHeight: '1.8', marginBottom: '24px' }}>
              In our corporate design studio and product showroom, we display thousands of custom-designed templates and past works for cosmetic brands, boutique jewellers, and luxury distillers. Our expert engineering team assists buyers in developing custom inserts, from luxurious molded velvet to biodegradable EVA foam, ensuring perfect product protection.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px', marginTop: '30px' }}>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#d4af37' }}>15+</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#d4af37' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Eco-Friendly Kraft</div>
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#d4af37' }}>50M+</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Annual Production</div>
              </div>
            </div>
          </div>

          {/* Showroom Image Display */}
          <div style={{ gridColumn: 'span 5' }} className="about-img-col">
            <div style={{
              border: '1px solid rgba(212, 175, 55, 0.15)',
              padding: '12px',
              backgroundColor: '#0d0d0d',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}>
              <Image 
                src="/images/about-showroom.webp" 
                alt="Luxury Packaging Manufacturer Showroom Premium Gift Box Factory" 
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 800px"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '6px',
                  display: 'block'
                }}
              />
              <div style={{ padding: '12px 6px 4px', textAlign: 'center', fontSize: '0.8rem', color: '#888' }}>
                <MapPin size={12} style={{ color: '#d4af37', marginRight: '4px', verticalAlign: 'middle', display: 'inline' }} />
                Corporate High-End Custom Packaging Showroom
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              Our Pillars of Excellence
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#d4af37', margin: '20px auto 0' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="grid-values">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(212, 175, 55, 0.05)',
                  borderRadius: '8px',
                  padding: '40px 30px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.05)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {val.icon}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '14px', letterSpacing: '0.02em' }}>{val.title}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Certification Badges */}
      <section style={{ padding: '80px 0', backgroundColor: '#090909' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }} className="grid-about">
            <div style={{ gridColumn: 'span 4' }} className="about-text-col">
              <h2 style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '16px' }}>
                Eco & Social <span style={{ color: '#d4af37' }}>Certifications</span>
              </h2>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: 0 }}>
                We believe premium aesthetics do not have to come at the expense of the environment. Our production processes adhere to the highest international green manufacturing benchmarks.
              </p>
            </div>
            
            <div style={{ gridColumn: 'span 8' }} className="about-badges-col">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {[
                  { title: 'FSC™ Chain of Custody', desc: '100% traceably sourced wood-pulp papers from responsibly managed sustainable forests.' },
                  { title: 'ISO 9001 & 14001', desc: 'Global quality management standards & eco-friendly energy-saving factory operations.' },
                  { title: 'SGS Food-Grade / Safe Coating', desc: 'Safe non-toxic water-based inks & soy-based adhesives for premium food/cosmetics packaging.' },
                  { title: 'GRS Recycled Standards', desc: 'Incorporating up to 80% recycled post-consumer fiberboards for rigid-box greyboards.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={20} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.5', marginBottom: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', textAlign: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.4rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '20px' }}>
            Elevate Your Brand's Packaging Today
          </h2>
          <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 36px', lineHeight: '1.6' }}>
            Get in touch with our elite custom packaging engineers. We provide free engineering mockups, dielines, and physical samples to speed up your launch.
          </p>
          <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '0.9rem', borderRadius: '4px' }}>
            Request A Free Custom Quote <ArrowRight size={16} style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline' }} />
          </Link>
        </div>
      </section>

      <FloatingContact />

      <style jsx global>{`
        @media (max-width: 768px) {
          .grid-about {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          .about-text-col, .about-img-col, .about-badges-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
          .grid-values {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}