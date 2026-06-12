import { ArrowLeft, Calendar, Tag, ChevronRight, Share2, Printer, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import FloatingContact from '../../../components/FloatingContact';
import { newsArticles } from '../data';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for all 6 news articles
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = newsArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Get other recommended articles
  const recommendations = newsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#050505', color: '#fff', paddingTop: '120px' }}>
      <Header />

      {/* Breadcrumb Bar */}
      <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.08)', padding: '16px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#666' }}>
          <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</a>
          <ChevronRight size={12} />
          <a href="/news" style={{ color: '#666', textDecoration: 'none' }}>News & Insights</a>
          <ChevronRight size={12} />
          <span style={{ color: '#d4af37' }}>{article.title}</span>
        </div>
      </div>

      <article style={{ padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="news-detail-grid">
            {/* Left: Main Content Column */}
            <div className="news-detail-main">
              {/* Category & Date */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  color: '#d4af37',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Tag size={12} />
                  {article.category}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '0.85rem' }}>
                  <Calendar size={12} style={{ color: '#d4af37' }} />
                  Published: {article.date}
                </span>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                lineHeight: '1.25',
                color: '#fff',
                marginBottom: '28px',
                fontFamily: '"Playfair Display", serif',
                letterSpacing: '0.02em'
              }}>
                {article.title}
              </h1>

              {/* Cover Image */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.12)',
                backgroundColor: '#101010',
                marginBottom: '32px'
              }}>
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={1200}
                  height={630}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Paragraphs */}
              <div style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#ccc' }}>
                {article.content.map((p, idx) => {
                  if (idx === 0) {
                    return (
                      <p key={idx} style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '24px', lineHeight: '1.8' }}>
                        {p}
                      </p>
                    );
                  }
                  if (idx === 2) {
                    return (
                      <div key={idx}>
                        <blockquote style={{
                          borderLeft: '3px solid #d4af37',
                          backgroundColor: '#0d0d0d',
                          padding: '24px 30px',
                          margin: '32px 0',
                          borderRadius: '0 8px 8px 0',
                          fontSize: '1.15rem',
                          fontStyle: 'italic',
                          color: '#d4af37',
                          lineHeight: '1.6',
                          fontFamily: '"Playfair Display", serif'
                        }}>
                          "Our packaging is engineered to trigger sensory emotions. Every surface grain, every gold debossing element, and the precision magnetic click serves to elevate the perceived value of your masterworks."
                        </blockquote>
                        <p style={{ marginBottom: '24px' }}>{p}</p>
                      </div>
                    );
                  }
                  return <p key={idx} style={{ marginBottom: '24px' }}>{p}</p>;
                })}
              </div>

              {/* Footer */}
              <div style={{
                borderTop: '1px solid rgba(212, 175, 55, 0.08)',
                paddingTop: '24px',
                marginTop: '48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <a 
                  href="/news"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#d4af37',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  <ArrowLeft size={16} />
                  Back to Articles
                </a>

                <div style={{ display: 'flex', gap: '16px', color: '#666' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>
                    <Share2 size={14} /> Share
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>
                    <Printer size={14} /> Print
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Sidebar Column */}
            <div className="news-detail-sidebar">
              {/* Strengths Card */}
              <div style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: '#fff',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                  paddingBottom: '10px',
                  fontFamily: '"Playfair Display", serif'
                }}>
                  LuxePack Pro Strength
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: '#ccc' }}>
                    <CheckCircle size={14} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                    <span>FSC certified forest stewardship raw materials</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: '#ccc' }}>
                    <CheckCircle size={14} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                    <span>ISO 9001:2015 premium quality control standards</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: '#ccc' }}>
                    <CheckCircle size={14} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                    <span>Daily production output: 150,000+ rigid boxes</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: '#ccc' }}>
                    <CheckCircle size={14} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                    <span>Standard OEM/ODM sampling within 3 - 5 days</span>
                  </li>
                </ul>
                <a 
                  href="/#rfq" 
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '0.82rem',
                    borderRadius: '4px',
                    marginTop: '20px',
                    textAlign: 'center',
                    display: 'block'
                  }}
                >
                  Request 3D Physical Mockup
                </a>
              </div>

              {/* Recommendations */}
              <div>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: '#fff',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                  paddingBottom: '10px',
                  fontFamily: '"Playfair Display", serif'
                }}>
                  Recommended Articles
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {recommendations.map((rec) => (
                    <Link key={rec.slug} href={`/news/${rec.slug}`} style={{ textDecoration: 'none', display: 'flex', gap: '12px' }}>
                      <div style={{ width: '80px', height: '80px', overflow: 'hidden', borderRadius: '6px', backgroundColor: '#101010', flexShrink: 0, position: 'relative' }}>
                        <Image 
                          src={rec.image} 
                          alt={rec.title} 
                          fill
                          sizes="80px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h4 style={{
                          fontSize: '0.88rem',
                          fontWeight: 500,
                          lineHeight: '1.3',
                          color: '#fff',
                          margin: '0 0 6px 0',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                        className="rec-title-hover"
                        >
                          {rec.title}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: '#666' }}>{rec.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <FloatingContact />
    </main>
  );
}
