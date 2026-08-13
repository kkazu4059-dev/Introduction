import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from './case-data';
import { CasesHeader, SLabel, Divider } from './_components';

export const metadata: Metadata = {
  title: 'コンサル事例 | 川畑和弘 | Service Hospitality Trainer',
  description: 'レストラン・ホテル・新規開業店における接客コーチング・組織開発の支援事例をご紹介します。',
  openGraph: {
    title: 'コンサル事例 | 川畑和弘',
    description: 'レストラン・ホテル・新規開業店における支援事例をご紹介します。',
    type: 'website',
  },
};

export default function CasesPage() {
  return (
    <>
      <CasesHeader />
      <main>
        <section style={{ padding: 'clamp(56px, 10vw, 100px) clamp(20px, 5vw, 40px)', background: 'var(--beige)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SLabel t="CASE STUDIES" />
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.3' }}>コンサル事例</h1>
              <Divider />
              <p style={{ marginTop: '24px', fontSize: '0.95rem', lineHeight: '1.85', color: 'var(--text-gray)' }}>
                これまでご支援してきた店舗様の取り組みをご紹介します。
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {caseStudies.map((c) => (
                <Link key={c.slug} href={`/cases/${c.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(61,90,60,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: '100%' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.heroImage} alt={c.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '24px' }}>
                      <span style={{ display: 'inline-block', padding: '4px 14px', background: 'var(--forest-green)', color: 'white', borderRadius: '50px', fontSize: '0.68rem', fontWeight: '700' }}>{c.tag}</span>
                      <p style={{ fontSize: '0.73rem', color: 'var(--text-gray)', margin: '10px 0 6px' }}>{c.category}</p>
                      <h2 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px', lineHeight: '1.5' }}>{c.title}</h2>
                      <p style={{ fontSize: '0.84rem', lineHeight: '1.75', color: 'var(--text-gray)' }}>{c.summary}</p>
                      <span style={{ color: 'var(--forest-green)', fontSize: '0.84rem', fontWeight: '700', marginTop: '12px', display: 'inline-block' }}>詳しく見る →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '56px' }}>
              <Link href="/#contact" style={{
                display: 'inline-block', padding: '14px 36px', background: 'var(--forest-green)',
                color: 'white', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700',
                textDecoration: 'none',
              }}>
                ご相談・お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
