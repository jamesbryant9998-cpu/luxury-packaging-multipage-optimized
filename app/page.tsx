'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { 
  Box, 
  Award, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Users, 
  CheckCircle, 
  UploadCloud, 
  Clock, 
  Workflow, 
  FileText, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';
import FloatingContact from '../components/FloatingContact';
import Header from '../components/Header';
import ReviewsSlider from '../components/ReviewsSlider';

export default function Home() {
  // RFQ 表单状态管理
  const [productType, setProductType] = useState('Magnetic Gift Boxes');
  const [quantity, setQuantity] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('');
  const [material, setMaterial] = useState('Premium Art Paper + Rigid Grayboard');
  const [notes, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 模拟产品数据 (带多路由页面跳转)
  const products = [
    {
      name: 'Custom Magnetic Rigid Gift Boxes',
      desc: 'Bespoke high-end rigid folding boxes from direct-factory manufacturer, featuring concealed N52 dual magnets.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Direct Factory Custom Branding',
      badge: 'Direct Manufacturer',
      path: '/products/custom-magnetic-rigid-gift-box-manufacturer',
      image: '/images/custom-magnetic-rigid-gift-box-manufacturer.webp'
    },
    {
      name: 'Premium Magnetic Gift Boxes',
      desc: 'Elegant book-style folding box with secure concealed magnetic closure, perfect for high-end retail.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Foil Stamping & Matte Lamination',
      badge: 'Best Seller',
      path: '/products/magnetic-boxes',
      image: '/images/premium-magnetic-gift-boxes-luxury-packaging.webp'
    },
    {
      name: 'Luxury Cosmetics Packaging',
      desc: 'Custom-engineered makeup & perfume packaging boxes with eco-friendly EVA protective inserts.',
      moq: '2,000 Pcs',
      leadTime: '10 Days',
      craft: 'Spot UV & Soft-Touch Film',
      badge: 'Hot Product',
      path: '/products/cosmetic-boxes',
      image: '/images/luxury-cosmetics-packaging-boxes.webp'
    },
    {
      name: 'Bespoke Jewelry Drawers',
      desc: 'High-end slide-out sliding packaging with custom ribbon pulls and premium microfiber trays.',
      moq: '1,000 Pcs',
      leadTime: '14 Days',
      craft: 'Embossing & Velvet Lining',
      badge: 'Bespoke',
      path: '/products/jewelry-boxes',
      image: '/images/bespoke-jewelry-drawer-packaging-boxes.webp'
    },
    {
      name: 'Eco Kraft Courier Packaging',
      desc: 'Biodegradable, heavy-duty corrugated mailers printed with eco-friendly soy inks for high-end e-commerce.',
      moq: '1,000 Pcs',
      leadTime: '8 Days',
      craft: 'Soy-Ink flexographic printing',
      badge: 'Eco-Friendly',
      path: '/products/gift-boxes',
      image: '/images/eco-kraft-courier-packaging-boxes.webp'
    },
    {
      name: 'Luxury Wine Gift Packaging',
      desc: 'Premium rigid wine presentation boxes with satin inserts and magnetic closure for winery branding.',
      moq: '1,500 Pcs',
      leadTime: '11 Days',
      craft: 'Gold Foil & UV Coating',
      badge: 'Luxury',
      path: '/products/wine-boxes',
      image: '/images/luxury-wine-gift-packaging-boxes.webp'
    },
    {
      name: 'Custom Perfume Rigid Boxes',
      desc: 'High-end perfume packaging with EVA foam protection and elegant textured paper finishing.',
      moq: '2,000 Pcs',
      leadTime: '9 Days',
      craft: 'Soft Touch Lamination',
      badge: 'Trending',
      path: '/products/perfume-boxes',
      image: '/images/custom-perfume-rigid-packaging-boxes.webp'
    },
    {
      name: 'Luxury Watch Packaging',
      desc: 'Rigid watch gift boxes with velvet cushions and custom logo embossing for premium collections.',
      moq: '1,000 Pcs',
      leadTime: '13 Days',
      craft: 'Embossing & Hot Stamping',
      badge: 'Premium',
      path: '/products/watch-boxes',
      image: '/images/luxury-watch-packaging-gift-boxes.webp'
    },
    {
      name: 'Boutique Apparel Gift Boxes',
      desc: 'Elegant foldable apparel packaging boxes designed for luxury fashion and boutique retail brands.',
      moq: '1,500 Pcs',
      leadTime: '10 Days',
      craft: 'Matte Lamination',
      badge: 'Fashion',
      path: '/products/rigid-boxes',
      image: '/images/boutique-apparel-gift-packaging-boxes.webp'
    },
    {
      name: 'Luxury Chocolate Packaging',
      desc: 'Food-grade chocolate gift boxes with premium tray inserts and sophisticated luxury finishes.',
      moq: '2,000 Pcs',
      leadTime: '12 Days',
      craft: 'Food-Grade Printing',
      badge: 'New Arrival',
      path: '/products/drawer-boxes',
      image: '/images/luxury-chocolate-packaging-gift-boxes.webp'
    },
    {
      name: 'Bespoke Handcrafted Leather Boxes',
      desc: 'Hand-stitched PU/Genuine leather gift boxes with solid MDF wooden cores and custom metal locks for prestigious luxury gifts.',
      moq: '500 Pcs',
      leadTime: '15 Days',
      craft: 'Debossing & Gold Stamping',
      badge: 'Artisanal Prestige',
      path: '/products/leather-boxes',
      image: '/images/bespoke-leather-gift-boxes.webp'
    },
    {
      name: 'Eco Sustainable Molded Pulp Packaging',
      desc: 'Zero-plastic 100% biodegradable bamboo and sugarcane bagasse molded pulp fiber trays with organic tactile texture and deep debossing.',
      moq: '2,000 Pcs',
      leadTime: '10 Days',
      craft: '3D Mold pressing & Debossing',
      badge: '100% Eco-Friendly',
      path: '/products/pulp-boxes',
      image: '/images/eco-sustainable-molded-pulp-boxes.webp'
    },
    {
      name: 'Gold-Border Premium Matte Black Magnetic Box',
      desc: 'Ultra-luxurious rigid matte black gift box with a secure magnetic closure, highlighted by elegant gold hot-stamped gilded borders and inner logo.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Gold Hot Stamping & Gilded Edges',
      badge: 'Premium Gold Border',
      path: '/products/gold-border-magnetic-box',
      image: '/images/magnetic-closure-box-gold-border.webp'
    },
    {
      name: 'Forest Green Custom Magnetic Box',
      desc: 'Bespoke deep forest green matte packaging box featuring a custom gold printed brand logo and custom printed envelope-style tissue paper liner.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Custom Brand Logo & White Liner Paper',
      badge: 'Fully Customizable',
      path: '/products/forest-green-custom-magnetic-box',
      image: '/images/custom-magnetic-box-forest-green.webp'
    },
    {
      name: 'Bespoke Especially For You Magnetic Gift Box',
      desc: 'Premium book-style rigid matte black gift box with gold hot-stamped gilded framing and custom branded interior, pre-assembled with black tissue lining and gold sticker seal.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Gilded Frame & Interior Hot Stamping',
      badge: 'Elegant Presentation',
      path: '/products/especially-for-you-magnetic-gift-box',
      image: '/images/magnetic-gift-box-especially-for-you.webp'
    },
    {
      name: 'Polka Dot Especially For You Gift Bag',
      desc: 'Delightful pastel pink paper gift bag with metallic gold polka dots, thick gold rope handles, a heart tag, and beautiful multi-colored tissue paper inserts.',
      moq: '2,000 Pcs',
      leadTime: '10 Days',
      craft: 'Pastel Tinted & Gold Foil Polka Dots',
      badge: 'Especially For You',
      path: '/products/polka-dot-especially-for-you-gift-bag',
      image: '/images/polka-dot-especially-for-you-gift-bag.webp'
    },
    {
      name: 'Bespoke Personalized Floral Ribbon Gift Bag',
      desc: 'Elite custom cream-colored gift bag with navy blue star-accented sides, custom gold script lettering, botanical blue-and-gold borders, dark blue satin ribbon handles, and gold glitter tissue wrapping paper.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Custom Script Foil & Satin Ribbon Handle',
      badge: 'Bespoke Custom Bag',
      path: '/products/bespoke-personalized-floral-ribbon-gift-bag',
      image: '/images/bespoke-personalized-floral-ribbon-gift-bag.webp'
    },
    {
      name: 'Custom Corrugated Mailer Boxes',
      desc: 'High-strength corrugated shipping mailer boxes printed inside and outside with beautiful colors, perfect for subscription boxes, e-commerce deliveries, and durable retail presentation.',
      moq: '1,000 Pcs',
      leadTime: '10 Days',
      craft: 'Full-Color Outside & Inside Printing',
      badge: 'Eco-Friendly Mailer',
      path: '/products/custom-corrugated-mailer-boxes',
      image: '/images/custom-corrugated-mailer-boxes.webp'
    },
    {
      name: 'Luxury Cosmetics Serum Dropper Box',
      desc: 'Elite custom cream-colored rigid skincare box with integrated custom-fit paperboard insert cradling a premium glass serum dropper bottle, embellished with subtle botanical gold foil stamping.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Foil Stamping & Custom Die-Cut Insert',
      badge: 'Luxury Skincare Kit',
      path: '/products/luxury-cosmetics-serum-dropper-box',
      image: '/images/luxury-cosmetics-serum-dropper-box.webp'
    },
    {
      name: 'Premium Ribbon-Tied Rigid Gift Boxes',
      desc: 'Bespoke rigid lid-and-base and shoulder-neck gift boxes decorated with hand-tied satin bow ribbons, ideal for premium apparel, high-end corporate gifts, and festive seasonal presentation.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Hand-Tied Satin Ribbon & Gift Tag',
      badge: 'Premium Ribbon Box',
      path: '/products/premium-ribbon-tied-rigid-gift-boxes',
      image: '/images/premium-ribbon-tied-rigid-gift-boxes.webp'
    },
    {
      name: 'Minimalist Luxury Hot-Foil Paper Carrier Bags',
      desc: 'Bespoke solid-color white cardboard and kraft paper bags featuring gold-stamped custom brand marks, thick ribbon loops, or padded cotton flat handles for an elite retail carrying experience.',
      moq: '2,000 Pcs',
      leadTime: '10 Days',
      craft: 'Premium Matte Finish & Hot Foil Stamp',
      badge: 'Luxury Carrier Bag',
      path: '/products/minimalist-luxury-hot-foil-paper-carrier-bags',
      image: '/images/minimalist-luxury-hot-foil-paper-carrier-bags.webp'
    },
    {
      name: 'Luxury Velvet-Lined Jewelry Showcase Rigid Box',
      desc: 'Elite custom matte black rigid jewelry presentation box, pre-fitted with a plush, anti-tarnish black velvet insert securely holding a necklace and matching earrings set, complete with gold foil stamping.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Gold Foil Logo & Non-Tarnish Velvet',
      badge: 'Jewelry Showcase',
      path: '/products/luxury-velvet-lined-jewelry-showcase-rigid-box',
      image: '/images/luxury-velvet-lined-jewelry-showcase-rigid-box.webp'
    },
    {
      name: 'Pastel Magnetic Ribbon-Closure Gift Boxes',
      desc: 'Delightful collapsible pastel-colored magnetic rigid boxes complete with front-tied satin bow ribbon closures, pre-fitted with shredded protective raffia paper bed for secure jewelry and gift presentation.',
      moq: '1,000 Pcs',
      leadTime: '10 Days',
      craft: 'Pastel Matte Lamination & Ribbon Closure',
      badge: 'Pastel Ribbon Flap',
      path: '/products/pastel-magnetic-ribbon-closure-gift-boxes',
      image: '/images/pastel-magnetic-ribbon-closure-gift-boxes.webp'
    },
    {
      name: 'Westhaver University Luxury Graduation Gift Set Box',
      desc: 'Bespoke high-end rigid magnetic box containing a complete graduation memorabilia set including apparel, drinkware, and stationery, paired with a matching luxury paper carrier bag.',
      moq: '500 Sets',
      leadTime: '15 Days',
      craft: 'Gold Foil Crest & Custom Foam Insert',
      badge: 'Alumni Collection',
      path: '/products/graduation-gift-set-rigid-box',
      image: '/images/westhaven-university-graduation-gift-set-box.webp'
    },
    {
      name: 'Harrys + Uncrate Men Grooming Kit Rigid Shoulder Box',
      desc: 'Sleek minimalist rigid shoulder-neck box featuring a unique button-stud closure, custom laser-cut EVA foam insert for grooming tools, and bold interior brand typography.',
      moq: '1,000 Pcs',
      leadTime: '12 Days',
      craft: 'Button Closure & Rigid Shoulder Frame',
      badge: 'Limited Edition',
      path: '/products/men-grooming-kit-rigid-shoulder-box',
      image: '/images/harrys-uncrate-men-grooming-kit-box.webp'
    }
  ];

  // 包装定制六步法流程
  const steps = [
    { num: '01', name: 'Submit Inquiry', desc: 'Provide dimensions, product type, and quantity to get an instant quote.' },
    { num: '02', name: 'Free 3D Mockup', desc: 'Our designers generate digital 3D rendering of your custom layout.' },
    { num: '03', name: 'Rapid Sample', desc: 'We deliver physical prototypes in 3-5 days for your material approval.' },
    { num: '04', name: 'Mass Production', desc: 'Fully automated rigid box assembly under strict ISO9001 workflow.' },
    { num: '05', name: '100% Quality QC', desc: 'Two-stage manual full-check to guarantee zero-defect luxury products.' },
    { num: '06', name: 'Global Logistics', desc: 'Flexible FOB/CIF/DDP solutions with robust protective seaworthy packing.' }
  ];

  // 处理文件上传点击
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // 处理 RFQ 提交
  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !quantity) {
      alert('Please fill in your Email and Quantity.');
      return;
    }
    setIsSubmitting(true);
    // 模拟 API 数据通信
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 极简精致 Header */}
      <Header />

      {/* 全屏横幅图片 (Hero Banner Section) */}
      <section 
        id="hero" 
        style={{
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#050505',
          overflow: 'hidden',
          padding: '120px 0 80px',
        }}
      >
        {/* 背景图：luxopack-hero-boxes.webp */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <Image 
            src="/images/luxopack-hero-boxes.webp" 
            alt="Custom Luxury Gift Box Manufacturer In China Showcase" 
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'right center' }}
          />
        </div>

        {/* 暗色渐变罩：确保左侧文字高对比度可读性 */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(5, 5, 5, 0.95) 40%, rgba(5, 5, 5, 0.6) 70%, rgba(5, 5, 5, 0.3) 100%)',
            zIndex: 2,
          }}
        />

        {/* 整个横幅的热区可点击，直接连接到 WhatsApp */}
        <a 
          href="https://wa.me/8618326001631?text=Hi%20LuxePack%20Pro%2C%20I%20am%20looking%20for%20custom%20premium%20boxes."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            cursor: 'pointer',
          }}
          title="Click to Chat on WhatsApp"
        />

        {/* 横幅文字内容 */}
        <div className="container" style={{ position: 'relative', zIndex: 4, pointerEvents: 'none' }}>
          <div style={{ maxWidth: '650px', textAlign: 'left' }}>
            {/* 顶徽章 */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                backgroundColor: 'rgba(212, 175, 55, 0.05)',
                padding: '6px 16px',
                borderRadius: '50px',
                marginBottom: '24px',
                pointerEvents: 'auto',
              }}
            >
              <span 
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: '#d4af37',
                  textTransform: 'uppercase',
                }}
              >
                • China's #1 Gift Box Manufacturer • Est. 2010
              </span>
            </div>

            {/* 大标题 */}
            <h1 
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
              }}
            >
              Custom Luxury<br />
              Gift Box<br />
              Manufacturer In<br />
              China
            </h1>

            {/* 副标题 */}
            <p 
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#e0e0e0',
                lineHeight: 1.4,
                marginBottom: '10px',
              }}
            >
              Factory-Direct Magnetic, Rigid, Drawer & Mailer Boxes with Logo
            </p>

            {/* 小字说明 */}
            <p 
              style={{
                fontSize: '0.9rem',
                color: '#d4af37',
                marginBottom: '32px',
                fontWeight: 500,
              }}
            >
              MOQ from 100 pcs • Free 3D Mockup • Global Shipping
            </p>

            {/* 特色药丸 Pills */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '40px',
              }}
            >
              {['MOQ: 100 pcs', 'Lead Time: 15 Days', 'Shipping to 50+ Countries', 'Free Design Service'].map((pill, idx) => (
                <span 
                  key={idx} 
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#a0a0a0',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA 按钮直接指向 WhatsApp */}
            <a 
          href="https://wa.me/8618326001631?text=Hi%20LuxePack%20Pro%2C%20I%20am%20looking%20for%20custom%20premium%20boxes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px 32px',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#050505',
                backgroundColor: '#d4af37',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                textDecoration: 'none',
                pointerEvents: 'auto',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3e5ab';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d4af37';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              → Get Factory Pricing (Save 30-50%)
            </a>
          </div>
        </div>
      </section>

      {/* 2. PRODUCTS (高端产品卡片网格 - 深度关联多子页面) */}
      <section id="products" className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-desc">Fully Customizable Packaging Box Styles Engineered for Luxury Brands. MOQ Starts from 1,000 Pcs. Click to explore specific categories.</p>
          </div>
          
          <div className="product-grid">
            {products.map((p, idx) => (
              <div key={idx} className="product-card">
                <div className="product-img-box">
                  <span className="product-badge">{p.badge}</span>
                  {p.image ? (
                    <Image src={p.image} alt={p.name} fill className="product-image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                  ) : (
                    <Box className="product-img-placeholder" size={72} />
                  )}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.desc}</p>
                  
                  <div style={{ fontSize: '0.8rem', color: '#d4af37', marginBottom: '20px', fontWeight: 600 }}>
                    Craft: <span style={{ color: '#fff' }}>{p.craft}</span>
                  </div>

                  <div className="product-meta" style={{ marginBottom: '20px' }}>
                    <div className="product-moq">
                      MOQ: <span>{p.moq}</span>
                    </div>
                    <div className="product-lead">
                      Lead Time: <span>{p.leadTime}</span>
                    </div>
                  </div>

                  {/* 引导跳转子详情页面 */}
                  <Link href={p.path} className="btn btn-outline" style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}>
                    View Custom Options
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* 其他 4 个二级分类快捷入口 */}
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: '#a0a0a0', marginBottom: '16px' }}>Also specializing in:</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/products/perfume-boxes" className="cert-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>Perfume Boxes</Link>
              <Link href="/products/watch-boxes" className="cert-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>Watch Boxes</Link>
              <Link href="/products/rigid-boxes" className="cert-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>Rigid Boxes</Link>
              <Link href="/products/drawer-boxes" className="cert-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>Drawer Boxes</Link>
              <Link href="/products/jewelry-boxes" className="cert-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>Jewelry Boxes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACTORY STRENGTH (两列式大厂实力背书) */}
      <section id="factory" className="section" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container">
          <div className="factory-grid">
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                Manufacturing Scale
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.2' }}>
                Uncompromised Raw Capability & Standards
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Equipped with fully automated Italian HEIDELBERG printing lines and automatic rigid box forming machines, LuxePack Pro ensures rapid output with extreme micro-millimeter precision. From structural R&D to material logistics, we operate standard 100% full quality control protocols.
              </p>
              
              <div className="cert-logos">
                <div className="cert-badge">
                  <Award size={16} />
                  <span>FSC Certified Code</span>
                </div>
                <div className="cert-badge">
                  <ShieldCheck size={16} />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="cert-badge">
                  <Layers size={16} />
                  <span>BSCI Compliance</span>
                </div>
              </div>
            </div>

            <div className="factory-stats">
              <div className="stat-item">
                <div className="stat-num">30K ㎡</div>
                <div className="stat-label">Modern Factory Plant</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">500+</div>
                <div className="stat-label">Bespoke Artisans & Workers</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">20+</div>
                <div className="stat-label">Automatic Production Lines</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">12h</div>
                <div className="stat-label">Instant Structural Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.1. CUSTOM GIFT BOX RESOURCES (资源导购板块) */}
      <section id="resources" className="section" style={{ backgroundColor: '#070707', borderTop: '1px solid rgba(212, 175, 55, 0.1)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div style={{ textAlign: 'left', maxWidth: '600px', margin: 0 }}>
              <span style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                Packaging Buying Guides
              </span>
              <h2 className="section-title" style={{ margin: 0, textAlign: 'left', fontSize: '2.5rem' }}>
                Custom Gift Box Resources
              </h2>
              <p className="section-desc" style={{ margin: '15px 0 0 0', textAlign: 'left', maxWidth: '100%' }}>
                Explore our factory-direct guides for magnetic gift boxes, rigid gift boxes, custom gift boxes with logo, MOQ planning and pricing before you request a quote.
              </p>
            </div>
            <Link href="/blog" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, borderBottom: '1.5px solid #d4af37', paddingBottom: '4px', transition: 'opacity 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.opacity='0.8'} onMouseLeave={(e)=>e.currentTarget.style.opacity='1'}>
              View All Guides →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {/* 卡片 1 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Pillar Page</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>Custom Magnetic Gift Boxes Manufacturer</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>MOQ 100 pcs, hidden magnetic closure, gold foil, soft-touch, inserts and global shipping.</p>
              </div>
              <Link href="/guides/custom-magnetic-gift-boxes-manufacturer" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Explore Magnetic Boxes →
              </Link>
            </div>

            {/* 卡片 2 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Pillar Page</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>Custom Rigid Gift Boxes Manufacturer</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Lid and base boxes, shoulder boxes, tray sleeves, premium finishing and custom inserts.</p>
              </div>
              <Link href="/guides/custom-rigid-gift-boxes-manufacturer" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Explore Rigid Boxes →
              </Link>
            </div>

            {/* 卡片 3 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Pillar Page</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>Custom Gift Boxes with Logo</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Logo printing, gold foil stamping, embossing, Pantone matching and free 3D mockups.</p>
              </div>
              <Link href="/guides/custom-gift-boxes-with-logo" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Explore Logo Boxes →
              </Link>
            </div>

            {/* 卡片 4 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Price Guide</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>How Much Do Custom Gift Boxes Cost?</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Compare box types, finishing costs, MOQ price tiers and real factory-direct examples.</p>
              </div>
              <Link href="/guides/how-much-do-custom-gift-boxes-cost" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Read Price Guide →
              </Link>
            </div>

            {/* 卡片 5 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>MOQ Guide</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>Custom Gift Boxes MOQ Guide</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Understand 100 vs 500 vs 1000 pcs, setup costs, sampling and scalability planning.</p>
              </div>
              <Link href="/guides/custom-gift-boxes-moq-guide" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Read MOQ Guide →
              </Link>
            </div>

            {/* 卡片 6 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Comparison Guide</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>Magnetic vs Rigid Gift Box</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Compare cost, structure, unboxing effect and use cases across flat-pack vs standard boxes.</p>
              </div>
              <Link href="/guides/magnetic-vs-rigid-gift-box" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Compare Packaging →
              </Link>
            </div>

            {/* 卡片 7 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Mailer Guide</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>Custom Corrugated Mailer Sourcing</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Understand E-flute/B-flute differences, ECT protective ratings, and inside-lid printing.</p>
              </div>
              <Link href="/guides/custom-corrugated-mailer-boxes-sourcing" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Explore Mailer Guide →
              </Link>
            </div>

            {/* 卡片 8 */}
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
              <div>
                <span style={{ color: '#d4af37', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Cosmetics Guide</span>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600, lineHeight: '1.3' }}>Skincare & Cosmetics Design</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Laser-cut cardstock inserts, glass protection engineering, and gold foil brand markings.</p>
              </div>
              <Link href="/guides/skincare-cosmetics-packaging-design" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '15px' }}>
                Explore Design Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOM PROCESS FLOW (B2B 定制流程) */}
      <section id="process" className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Bespoke Workflow</h2>
            <p className="section-desc">Streamlined step-by-step custom box development from blueprint ideas to direct doorstep delivery.</p>
          </div>

          <div className="process-grid">
            {steps.map((s, idx) => (
              <div key={idx} className="process-step">
                <div className="process-num">{s.num}</div>
                <h3 className="process-name">{s.name}</h3>
                <p className="process-desc">{s.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* 顾客评论板块 (Reviews Slider Section) */}
        <ReviewsSlider />

        {/* 5. INSTANT RFQ FORM (交互式询盘卡片) */}
        <section id="rfq" className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: 'none' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Instant Custom Quote</h2>
            <p className="section-desc">Upload your design file or packaging requirements. Get tailored FOB prices within 12 hours.</p>
          </div>

          <div className="rfq-container">
            {!isSubmitted ? (
              <form onSubmit={handleRfqSubmit}>
                <div className="rfq-grid">
                  {/* 产品类型选择 */}
                  <div className="form-group">
                    <label className="form-label">Product Type</label>
                    <select 
                      className="input-field" 
                      value={productType}
                      onChange={(e)=>setProductType(e.target.value)}
                    >
                      <option value="Magnetic Gift Boxes">Premium Magnetic Gift Boxes</option>
                      <option value="Luxury Cosmetics Packaging">Luxury Cosmetics Packaging</option>
                      <option value="Bespoke Jewelry Drawers">Bespoke Jewelry Drawers</option>
                      <option value="Eco Kraft Courier Packaging">Eco Kraft Courier Packaging</option>
                      <option value="Others">Others (Specify in details)</option>
                    </select>
                  </div>

                  {/* 数量（带校验） */}
                  <div className="form-group">
                    <label className="form-label">Target Quantity (Pcs)</label>
                    <input 
                      type="number" 
                      className="input-field" 
                      placeholder="e.g. 1000" 
                      value={quantity}
                      onChange={(e)=>setQuantity(e.target.value)}
                      required
                    />
                  </div>

                  {/* 尺寸 */}
                  <div className="form-group">
                    <label className="form-label">Custom Dimensions (L x W x H mm)</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="e.g. 200 x 150 x 50 mm" 
                      value={size}
                      onChange={(e)=>setSize(e.target.value)}
                    />
                  </div>

                  {/* 邮箱 */}
                  <div className="form-group">
                    <label className="form-label">Business Email</label>
                    <input 
                      type="email" 
                      className="input-field" 
                      placeholder="e.g. buyer@luxurybrand.com" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* 材质工艺选择 */}
                  <div className="form-group form-group-full">
                    <label className="form-label">Desired Material & Finishing</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="e.g. 157g Art Paper + Foil Gold Stamping + Matte Soft Lamination" 
                      value={material}
                      onChange={(e)=>setMaterial(e.target.value)}
                    />
                  </div>

                  {/* 详细定制需求 */}
                  <div className="form-group form-group-full">
                    <label className="form-label">Custom Specifications & Remarks</label>
                    <textarea 
                      className="input-field" 
                      style={{ minHeight: '120px', resize: 'vertical' }}
                      placeholder="Please elaborate on protective lining material (EVA, Foam, Velvet), surface texture, logo dimensions, or specific certification compliance..."
                      value={notes}
                      onChange={(e)=>setMessage(e.target.value)}
                    />
                  </div>

                  {/* 模拟附件/Logo设计上传 */}
                  <div className="form-group form-group-full">
                    <label className="form-label">Upload Design Blueprints / Logo Files</label>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      style={{ display: 'none' }} 
                      accept=".ai,.pdf,.psd,.cdr,.jpg,.png"
                    />
                    <div className="file-upload-box" onClick={handleUploadClick}>
                      <UploadCloud className="file-upload-icon" />
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: '4px' }}>
                        {fileName ? `File Selected: ${fileName}` : 'Click to Upload Artwork (AI, PDF, PSD, JPG)'}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#a0a0a0' }}>
                        Maximum file size: 50MB. Uploading CAD drafts expedites direct physical sampling.
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="rfq-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Request to Factory...' : 'Submit Inquiry & Get FOB Quote'}
                </button>
              </form>
            ) : (
              /* 提交成功后的反馈 */
              <div className="rfq-success-alert">
                <CheckCircle size={48} style={{ color: '#d4af37', marginBottom: '16px' }} />
                <h3 className="rfq-success-title">Inquiry Submitted Successfully!</h3>
                <p style={{ color: '#fff', marginBottom: '20px', fontSize: '1rem' }}>
                  Thank you. Your request for <strong style={{ color: '#d4af37' }}>{productType}</strong> (Quantity: {quantity} pcs) has been routed to our Lead Design Engineer.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 24px' }}>
                  A customized FOB price breakdown with digital structural blueprint has been scheduled. We will reply to your business email <strong style={{ color: '#fff' }}>{email}</strong> within 12 hours.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setQuantity('');
                    setFileName('');
                  }} 
                  className="btn btn-outline" 
                  style={{ padding: '10px 24px', fontSize: '0.85rem' }}
                >
                  Submit Another RFQ
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 极简精致 Footer */}
      <footer style={{
        padding: '50px 0',
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(212, 175, 55, 0.08)',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#666'
      }}>
        <div className="container">
          <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '12px' }}>
            LUXE<span style={{ color: '#d4af37' }}>PACK</span> PRO
          </p>
          <p style={{ marginBottom: '20px' }}>ISO9001:2015 & FSC Certified Rigid Packing Custom Solutions Supplier.</p>
          <p>© {new Date().getFullYear()} LuxePack Pro Co., Ltd. All Rights Reserved. Designed for premium luxury brands.</p>
        </div>
      </footer>

      {/* 奢华常驻悬浮联络卡片组件 */}
      <FloatingContact />
    </main>
  );
}
