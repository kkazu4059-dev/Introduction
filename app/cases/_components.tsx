'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export const wrap: React.CSSProperties = { maxWidth: '1200px', margin: '0 auto' };

export function sec(isMobile: boolean, bg: string): React.CSSProperties {
  return { padding: isMobile ? '72px 20px' : '100px 40px', background: bg };
}

export function SLabel({ t }: { t: string }) {
  return (
    <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>{t}</p>
  );
}

export function STitle({ t, isMobile, light }: { t: string; isMobile: boolean; light?: boolean }) {
  return (
    <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.4rem', fontWeight: '700', color: light ? 'white' : 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.3' }}>{t}</h2>
  );
}

export function Divider() {
  return <div style={{ width: '48px', height: '3px', background: 'var(--gold)', margin: '0 auto' }} />;
}

export function CasesHeader() {
  return (
    <header style={{
      borderBottom: '1px solid rgba(61,90,60,0.1)',
      background: 'white',
    }}>
      <nav style={{
        maxWidth: '1400px', margin: '0 auto',
        padding: '18px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Link href="/" style={{
          fontSize: '1.15rem', fontWeight: '700',
          color: 'var(--forest-green)', letterSpacing: '0.05em', textDecoration: 'none',
        }}>川畑 和弘</Link>
        <Link href="/#contact" style={{
          background: 'var(--forest-green)', color: 'white',
          fontSize: '0.85rem', fontWeight: '600',
          padding: '10px 24px', borderRadius: '50px', textDecoration: 'none',
        }}>お問い合わせ</Link>
      </nav>
    </header>
  );
}
