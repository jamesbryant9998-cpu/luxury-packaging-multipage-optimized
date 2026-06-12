'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Calendar, Tag, ArrowRight, Sparkles, Send } from 'lucide-react';
import Header from '../../components/Header';
import FloatingContact from '../../components/FloatingContact';
import { newsArticles } from './data';

export default function NewsPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#050505', color: '#fff', paddingTop: '120px' }}>
      <Header />

      {/* Hero Header Section */}
      <section style={{ padding: '80px 0 50px', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ 
              color: '#d4af37', 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              letterSpacing: '0.25em', 
              textTransform: 'uppercase', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: '16px' 
            }}>
              <Sparkles size={12} />
              LuxePack Pro Journal
            </span>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 700, 
              letterSpacing: '0.04em', 
              lineHeight: '1.2', 
              marginBottom: '20px',
              fontFamily: '"Playfair Display", serif'
            }}>
              Luxury Packaging <span style={{ color: '#d4af37', fontStyle: 'italic' }}>Intelligence</span>
            </h1>
            <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: '1.7', margin: 0 }}>
              Stay informed with our latest research, design breakthroughs, supply chain sustainability insights, and luxury unboxing psychology analysis.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '40px 30px'
          }}>
            {newsArticles.map((article) => (
              <article 
                key={article.slug}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(212, 175, 55, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Article Image Container */}
                <div style={{ height: '230px', overflow: 'hidden', position: 'relative', backgroundColor: '#141414' }}>
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease-out'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: 'rgba(5, 5, 5, 0.85)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: '#d4af37',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <Tag size={12} />
                    {article.category}
                  </div>
                </div>

                {/* Article Info */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: '#666', 
                    fontSize: '0.8rem', 
                    marginBottom: '12px' 
                  }}>
                    <Calendar size={12} style={{ color: '#d4af37' }} />
                    {article.date}
                  </div>

                  <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    lineHeight: '1.4',
                    marginBottom: '12px',
                    color: '#fff',
                    fontFamily: '"Playfair Display", serif',
                    transition: 'color 0.2s'
                  }}>
                    <Link href={`/news/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                      {article.title}
                    </Link>
                  </h2>

                  <p style={{
                    color: '#888',
                    fontSize: '0.88rem',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    flexGrow: 1
                  }}>
                    {article.summary}
                  </p>

                  <Link href={`/news/${article.slug}`} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#d4af37',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      transition: 'gap 0.2s'
                    }} onMouseEnter={(e) => e.currentTarget.style.gap = '12px'} onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}>
                    Read Article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section style={{ 
        padding: '80px 0', 
        backgroundColor: '#0a0a0a', 
        borderTop: '1px solid rgba(212, 175, 55, 0.08)' 
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            maxWidth: '650px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: '#050505',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '16px',
            padding: '48px 32px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.8)'
          }}>
            <h2 style={{ 
              fontSize: '1.8rem', 
              color: '#fff', 
              marginBottom: '12px', 
              fontFamily: '"Playfair Display", serif' 
            }}>
              Packaging Intelligence
            </h2>
            <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Subscribe to get seasonal trend reports, industrial manufacturing insights, and exclusive invitations to design showcases.
            </p>

            {subscribed ? (
              <div style={{ 
                color: '#d4af37', 
                backgroundColor: 'rgba(212, 175, 55, 0.05)', 
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '6px',
                padding: '16px',
                fontSize: '0.95rem',
                fontWeight: 500
              }}>
                ✓ Thank you! You have been successfully subscribed to our newsletter.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Corporate Email Address"
                  required
                  style={{
                    flexGrow: 1,
                    backgroundColor: '#101010',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    borderRadius: '6px',
                    padding: '14px 20px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.15)'}
                />
                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#d4af37',
                    border: '1px solid #d4af37',
                    color: '#050505',
                    borderRadius: '6px',
                    padding: '14px 28px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1c40f';
                    e.currentTarget.style.borderColor = '#f1c40f';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#d4af37';
                    e.currentTarget.style.borderColor = '#d4af37';
                  }}
                >
                  Subscribe
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
