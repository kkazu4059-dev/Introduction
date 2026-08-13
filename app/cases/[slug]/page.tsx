import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '../case-data';
import { CasesHeader, SLabel } from '../_components';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const caseStudy = caseStudies.find((c) => c.slug === params.slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} | コンサル事例 | 川畑和弘`,
    description: caseStudy.summary,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      type: 'article',
      images: [caseStudy.heroImage],
    },
  };
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((c) => c.slug === params.slug);
  if (!caseStudy) notFound();

  return (
    <>
      <CasesHeader />
      <main>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px clamp(20px, 5vw, 40px) 0' }}>
          <Link href="/cases" style={{ color: 'var(--forest-green)', fontSize: '0.88rem', fontWeight: '600', textDecoration: 'none' }}>
            ← 事例一覧に戻る
          </Link>
        </div>

        <section style={{ padding: '32px clamp(20px, 5vw, 40px) 56px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', padding: '4px 14px', background: 'var(--forest-green)', color: 'white', borderRadius: '50px', fontSize: '0.68rem', fontWeight: '700' }}>{caseStudy.tag}</span>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', margin: '12px 0 8px' }}>{caseStudy.category}</p>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '24px', lineHeight: '1.4' }}>{caseStudy.title}</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={caseStudy.heroImage} alt={caseStudy.title} style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', borderRadius: '14px' }} />
          </div>
        </section>

        <section style={{ padding: 'clamp(56px, 8vw, 80px) clamp(20px, 5vw, 40px)', background: 'var(--beige)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid var(--gold)' }}>課題</h2>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.9', color: 'var(--text-gray)' }}>{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid var(--gold)' }}>施策</h2>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.9', color: 'var(--text-gray)' }}>{caseStudy.approach}</p>
            </div>
            <div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid var(--gold)' }}>成果</h2>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.9', color: 'var(--text-gray)' }}>{caseStudy.result}</p>
            </div>
          </div>
        </section>

        {caseStudy.testimonial && (
          <section style={{ padding: 'clamp(56px, 8vw, 80px) clamp(20px, 5vw, 40px)', background: 'white' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <SLabel t="お客様の声" />
              <div style={{ background: 'var(--beige)', padding: '32px', borderRadius: '14px', borderLeft: '4px solid var(--gold)', textAlign: 'left' }}>
                <p style={{ fontSize: '1rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '16px' }}>&ldquo;{caseStudy.testimonial.comment}&rdquo;</p>
                <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>
                  {caseStudy.testimonial.name}
                  <span style={{ fontWeight: '400', color: 'var(--text-gray)' }}> ／ {caseStudy.testimonial.role}</span>
                </p>
              </div>
            </div>
          </section>
        )}

        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <section style={{ padding: 'clamp(40px, 6vw, 60px) clamp(20px, 5vw, 40px)', background: 'var(--beige)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {caseStudy.gallery.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt={`${caseStudy.title} ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }} />
              ))}
            </div>
          </section>
        )}

        <section style={{ padding: 'clamp(56px, 8vw, 80px) clamp(20px, 5vw, 40px)', background: 'linear-gradient(135deg, #182818 0%, #2a4228 45%, #3d5a3c 100%)', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ color: 'white', fontSize: '1.6rem', fontWeight: '700', marginBottom: '16px' }}>同じような課題でお悩みですか？</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>まずはお気軽にご相談ください。</p>
            <Link href="/#contact" style={{
              display: 'inline-block', padding: '14px 36px', background: 'var(--gold)',
              color: 'white', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700',
              textDecoration: 'none',
            }}>
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
