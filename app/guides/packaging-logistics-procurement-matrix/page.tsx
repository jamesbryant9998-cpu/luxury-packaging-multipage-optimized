'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Truck, Landmark, BarChart3, ShieldCheck, ChevronRight, Zap, BadgeDollarSign, Sparkles } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function PackagingLogisticsProcurementGuide() {
  const tableData = [
    { type: "Assembled Rigid Box", volume: "100%", cost: "High (Volumetric Surcharge)", warehouse: "Max Space Required", time: "Ready to Use" },
    { type: "Collapsible Magnetic Box", volume: "25%", cost: "Low (75% Saving)", warehouse: "Compact (Minimal Space)", time: "5s Hand Assembly" }
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
            <Truck size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
            B2B Logistics Whitepaper
          </div>
          
          <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2', fontWeight: 700 }}>
            Logistics & Procurement Matrix: Save 75% on Global Packaging Freight
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#e0e0e0', lineHeight: '1.7', marginBottom: '40px', borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            International ocean and air freight for premium packaging is governed by "Volumetric Weight"—meaning you pay to ship empty air. This guide reveals the structural engineering secrets behind collapsible rigid boxes and how brands optimize their landing costs without compromising luxury.
          </p>

          <Image 
            src="/images/packaging-logistics-optimization-flatpack.webp" 
            alt="Packaging Logistics and Freight Cost Optimization Guide" 
            width={900} 
            height={500} 
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '50px' }}
          />

          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px', fontWeight: 600 }}>Volume & Freight Comparison Matrix</h2>
          
          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)' }}>
                  <th style={{ padding: '16px', color: '#d4af37' }}>Packaging Structure</th>
                  <th style={{ padding: '16px', color: '#d4af37' }}>Logistics Volume</th>
                  <th style={{ padding: '16px', color: '#d4af37' }}>Freight Baseline</th>
                  <th style={{ padding: '16px', color: '#d4af37' }}>Warehousing</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>{row.type}</td>
                    <td style={{ padding: '16px', color: '#fff' }}>{row.volume}</td>
                    <td style={{ padding: '16px', color: '#d4af37' }}>{row.cost}</td>
                    <td style={{ padding: '16px', color: '#a0a0a0' }}>{row.warehouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'grid', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '35px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '16px' }}>The Secret of High-Performance V-Grooving</h3>
              <p style={{ color: '#c0c0c0', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                A collapsible box is only as good as its fold. At LuxePack Pro, we utilize automated computerized V-grooving machinery to slice precision channels into the grayboard. This allows the rigid box to fold completely flat for shipping, yet maintain crisp, structural 90-degree corners upon assembly. Without V-grooving, boxes would warp and round at the edges, failing to meet luxury retail standards.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d0d0d', padding: '35px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '16px' }}>DDP Shipping Solutions: China to Your Door</h3>
              <p style={{ color: '#c0c0c0', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                Navigating international customs, VAT, and duties is the primary bottleneck for new brands. We offer end-to-end DDP (Delivered Duty Paid) shipping to the US, Europe, and the UK. Our logistics team handles port clearance and domestic trucking, ensuring that the quote you receive from our factory is the absolute final landing price at your warehouse.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '50px', backgroundColor: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <Sparkles size={36} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Request a Logistics-Optimized Quote</h3>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Submit your box specs today. Our structural engineers will analyze your volume requirements and provide a tiered quote that balances production cost with logistics efficiency.
            </p>
            <Link href="/#rfq" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>
              Connect with Logistics Experts
            </Link>
          </div>

        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
