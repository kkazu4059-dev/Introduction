'use client';

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

const HERO_IMG = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80';
const PROFILE_IMG = '/profile.jpg';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(61,90,60,0.15)' }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '24px 0', background: 'none',
        border: 'none', cursor: 'pointer', textAlign: 'left',
        fontSize: '1rem', fontWeight: '600', color: 'var(--text-dark)', fontFamily: 'inherit',
      }}>
        <span style={{ flex: 1, paddingRight: '20px', lineHeight: '1.5' }}>
          <span style={{ color: 'var(--gold)', marginRight: '10px', fontWeight: '700' }}>Q</span>
          {question}
        </span>
        <span style={{
          width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
          background: isOpen ? 'var(--forest-green)' : 'transparent',
          border: '2px solid var(--forest-green)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: isOpen ? 'white' : 'var(--forest-green)', fontSize: '1.4rem', lineHeight: '1',
          transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </button>
      <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
        <div style={{ paddingBottom: '24px', paddingLeft: '24px', fontSize: '0.93rem', lineHeight: '1.85', color: 'var(--text-gray)' }}>
          <span style={{ color: 'var(--forest-green)', fontWeight: '700', marginRight: '10px' }}>A</span>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      await client.models.Contact.create({
        name:    formData.name,
        email:   formData.email,
        phone:   formData.phone || undefined,
        message: formData.message,
      });
      setFormStatus('done');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  const navItems = [
    { label: 'プロフィール', id: 'profile' },
    { label: 'サービス', id: 'services' },
    { label: 'プロセス', id: 'process' },
    { label: '料金', id: 'pricing' },
    { label: '実績', id: 'cases' },
    { label: 'FAQ', id: 'faq' },
  ];

  const concerns = [
    { icon: '👥', text: 'スタッフの接客レベルがバラバラで統一できない' },
    { icon: '📉', text: '新人が育たず、すぐに辞めてしまう' },
    { icon: '💬', text: 'お店の世界観をうまくスタッフに伝えられない' },
    { icon: '🔄', text: '開業はしたが、リピーターが増えない' },
    { icon: '🏪', text: 'オーナーが現場を離れると品質が落ちる' },
  ];

  const services = [
    {
      num: '1', title: 'Service / Hospitality', subtitle: '技術と心の両輪を整える',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      desc: '言葉遣い・声の温度・間の使い方、所作・立ち姿・手の動きなど、茶道の身体技法を応用したサービス体系の構築と実践。',
      details: ['言葉遣い・声の温度・間の取り方', '所作・立ち姿・手の動きの整え方', '無駄を減らした動線と提供タイミング', '役割・ポジション・フローの設計', 'テーブルコントロール／予約・席数調整・料理提供のタイミング', '"人として出会う"姿勢（笑顔、安心感）', '相手の状態を読み取り、緊張 → 安心 → 信頼へ導く', '過不足のない"ちょうど良い"配慮でゲストの時間を大切にする'],
    },
    {
      num: '2', title: 'Culture / Identity', subtitle: '存在理由を言語化し、文化を浸透',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      desc: 'ミッション・ビジョンの整理、価値観にもとづく判断基準の設定。店の哲学を共有し、自走する組織へと導きます。',
      details: ['「大切にしたい価値観」を言語化する', 'ゲストにどんな価値を届けるのかを明確にする', '価値観 → 行動基準 に落とし込む', 'スタッフ全員が理解し、再現できる状態にする', '属人化をなくし、再現性のある"型"をつくる', 'スタッフが自分の役割に価値を感じられる状態をつくる', '朝礼・ミーティングを"文化を育てる時間"として再設計'],
    },
    {
      num: '3', title: 'Operation / Team Support', subtitle: '動線と役割を最適化し再現性を確保',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      desc: '作業の重複・無駄を減らす配置設計、役割分担の明確化、品質チェック体制の構築。効率と品質の両立を実現します。',
      details: ['営業中の立ち位置・動き方の整理', 'ピーク時に対応できる動線と配置の設計', 'だれでも迷わず動けるオペレーション表の作成', 'キッチンとサービスの連携強化によるスムーズ化', '役割・担当・作業手順の明確化', 'マネージャー／リーダー育成支援', '新人が迷わない育成ステップの明確化（マニュアル整備）'],
    },
    {
      num: '4', title: 'Communication / Relationship', subtitle: '体験前後まで設計し、関係性を育てる',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      desc: '予約〜退店後までの体験設計、言葉のトーン統一、自然な紹介・再訪につながる接点づくり。地域・生産者との共創を促進します。',
      details: ['予約〜来店〜退店後まで一貫した体験の流れをつくる', '初来店・常連に合わせた声かけやご案内の工夫', '期待感を高める情報発信（SNS／メール／メニュー説明）', '生産者のストーリーを自然に紹介できる仕組み', '地域・コミュニティとの協働の土台づくり', '言葉遣い・トーンの統一と共通言語づくり', '自然な紹介・リピートにつながる接点の設計'],
    },
  ];

  const processSteps = [
    { num: '1', title: 'ヒアリング', desc: 'お店の現状や、大切にしている想いを丁寧に伺います。' },
    { num: '2', title: '現場視察・体験分析', desc: '店舗を訪問し、サービス・空間・顧客体験を多角的に分析します。' },
    { num: '3', title: '改善提案・研修設計', desc: '貴店ならではの"らしさ"が伝わる行動基準と研修プランを設計します。' },
    { num: '4', title: '実施・フォロー', desc: '研修後のフォローを通じて、習慣化とチームの行動変化をサポートします。' },
  ];

  const plans = [
    {
      name: 'スポットトレーニング', price: '¥30,000〜', duration: '1回（約2時間）', highlight: false,
      details: ['現状の課題・目標をヒアリングし、改善ポイントを整理', '店舗の特徴に合った接客・サービス改善案の提示', '所作/声の使い方など"再現しやすい型"のミニレクチャー', '課題テーマに応じた短時間のトレーニング'],
      note: 'まずは気になる部分から整えてまいります。',
    },
    {
      name: '終日サポート', price: '¥100,000', duration: '1日（約8時間）', highlight: true,
      details: ['営業中の現場に同席し、リアルタイムでフィードバック', 'ホール動線・提供の流れ・チーム連携のチェック', 'オペレーション構築のアドバイス・改善案の提示', 'VIP対応・イベントの事前準備から当日最適化まで'],
      note: '実際の現場において成功に導くための支援をいたします。',
    },
    {
      name: 'チーム育成サポート', price: '¥200,000〜400,000', duration: '月額制（4〜6回/月）', highlight: false,
      details: ['定期的な研修・コーチングで着実なスキルアップ', '営業日の実践指導で"現場で使える力"を育成', '振り返りと改善提案で品質を継続的に向上', '中長期的な組織成長・サービス文化づくり'],
      note: '現場の力を底上げし、組織の"サービス文化"を根づかせます。',
    },
  ];

  const cases = [
    { category: '高級レストラン', tag: '組織開発', title: 'ミシュラン三つ星レストランの運営体制構築', desc: '支配人として6年間、サービス品質の向上と組織文化の浸透を統括。スタッフ育成プログラムの設計により一貫した顧客体験を実現。グリーンスター獲得を含む持続可能な運営体制を確立しました。' },
    { category: 'リゾートホテル', tag: 'マネジメント', title: 'ホテル料飲部門の統括マネジメント', desc: 'ラウンジ、イタリアン、レストランの3部門を統括し、サービス基準の統一と効率化を実現。スタッフ教育体系の整備により、顧客満足度とリピート率が大幅に向上しました。' },
    { category: '新規開業店', tag: '開業支援', title: 'スペインバル立ち上げ・店長就任', desc: '新規開業のスペインバルにて、コンセプト設計からオペレーション構築、スタッフ採用・育成まで一貫して担当。幅広い顧客層に対応できる柔軟な接客体制を確立しました。' },
  ];

  const testimonials = [
    { name: 'A様', role: 'レストランオーナー', comment: '川畑さんの指導で、スタッフの意識が劇的に変わりました。「なぜそうするのか」を理解させる手法が素晴らしく、自分で考えて動けるチームになりました。' },
    { name: 'B様', role: 'ホテル支配人', comment: '茶道の所作を取り入れた研修は目から鱗でした。立ち姿、手の動き、間の取り方まで、すべてに意味があることを学び、お客様からの評価も明らかに向上しています。' },
    { name: 'C様', role: 'カフェ経営者', comment: '開業前の相談から親身に対応していただきました。コンセプト整理から実際のオペレーション設計まで、現場目線でアドバイスいただけたことで、スムーズな立ち上げができました。' },
    { name: 'D様', role: '料理長', comment: 'サービスとキッチンの連携がうまくいかず悩んでいましたが、川畑さんの支援によりチーム全体の一体感が生まれました。今では互いをリスペクトし合える関係性が築けています。' },
  ];

  const faqs = [
    { question: 'どのような業態に対応していますか？', answer: 'レストラン、ホテル、カフェ、バー、旅館など飲食・宿泊業全般に対応しています。高級店から町場のお店まで、規模や業態を問わず、それぞれの"らしさ"に合わせてサポートいたします。' },
    { question: '研修は何回くらい必要ですか？', answer: 'お店の現状や目標によって異なります。初回ヒアリングの上でご提案いたします。目安として、基礎的な改善は3〜6ヶ月、文化づくりまで含めると6〜12ヶ月を推奨しています。' },
    { question: '地方でも対応可能ですか？', answer: 'はい、対応可能です。出張費・交通費は別途ご相談となりますが、全国対応しております。オンラインでのヒアリングや事前コンサルも組み合わせることで、効率的にサポートいたします。' },
    { question: 'まずは相談だけでもできますか？', answer: 'もちろんです。まずはお気軽にお問い合わせください。初回のヒアリングは無料で承っております。お店の状況やお悩みをお聞きした上で、最適なプランをご提案いたします。' },
  ];

  const sec = (bg: string): React.CSSProperties => ({ padding: isMobile ? '72px 20px' : '100px 40px', background: bg });
  const wrap: React.CSSProperties = { maxWidth: '1200px', margin: '0 auto' };

  const SLabel = ({ t }: { t: string }) => (
    <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>{t}</p>
  );
  const STitle = ({ t, light }: { t: string; light?: boolean }) => (
    <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.4rem', fontWeight: '700', color: light ? 'white' : 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.3' }}>{t}</h2>
  );
  const Divider = () => <div style={{ width: '48px', height: '3px', background: 'var(--gold)', margin: '0 auto' }} />;

  const navBtn = (label: string, id: string) => (
    <button key={id} onClick={() => scrollTo(id)} style={{
      background: 'none', border: 'none', cursor: 'pointer',
      fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-dark)',
      fontFamily: 'inherit', padding: '4px 0', borderBottom: '2px solid transparent', transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--forest-green)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.color = 'var(--text-dark)'; }}>
      {label}
    </button>
  );

  return (
    <>
      {/* ── HEADER ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'white',
        borderBottom: '1px solid rgba(61,90,60,0.1)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        <nav style={{
          maxWidth: '1400px', margin: '0 auto',
          padding: isMobile ? '16px 20px' : '18px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button onClick={() => scrollTo('hero')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: '700',
            color: 'var(--forest-green)', fontFamily: 'inherit', letterSpacing: '0.05em',
          }}>川畑 和弘</button>

          {isMobile ? (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{
                    width: '24px', height: '2px', background: 'var(--forest-green)', borderRadius: '2px', transition: 'all 0.3s',
                    transform: i === 0 && isMenuOpen ? 'rotate(45deg) translateY(7px)' : i === 2 && isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                    opacity: i === 1 && isMenuOpen ? 0 : 1,
                  }} />
                ))}
              </div>
            </button>
          ) : (
            <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
              {navItems.map((item) => <li key={item.id}>{navBtn(item.label, item.id)}</li>)}
              <li>
                <button onClick={() => scrollTo('contact')} style={{
                  background: 'var(--forest-green)', border: 'none', cursor: 'pointer',
                  fontSize: '0.88rem', fontWeight: '600', color: 'white',
                  padding: '10px 26px', borderRadius: '50px', fontFamily: 'inherit',
                  transition: 'all 0.3s ease', boxShadow: '0 4px 14px rgba(61,90,60,0.3)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(61,90,60,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(61,90,60,0.3)'; }}>
                  お問い合わせ
                </button>
              </li>
            </ul>
          )}
        </nav>

        {isMobile && isMenuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid rgba(61,90,60,0.1)', padding: '16px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} style={{
                    background: 'none', border: 'none', cursor: 'pointer', width: '100%',
                    textAlign: 'left', padding: '14px 8px', fontSize: '1rem', fontWeight: '500',
                    color: 'var(--text-dark)', fontFamily: 'inherit', borderBottom: '1px solid rgba(61,90,60,0.08)',
                  }}>{item.label}</button>
                </li>
              ))}
              <li style={{ marginTop: '12px' }}>
                <button onClick={() => scrollTo('contact')} style={{
                  background: 'var(--forest-green)', border: 'none', cursor: 'pointer', width: '100%',
                  padding: '14px', fontSize: '1rem', fontWeight: '600', color: 'white', borderRadius: '10px', fontFamily: 'inherit',
                }}>お問い合わせ</button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>

        {/* ── HERO: full-width image with text overlay ── */}
        <section id="hero" style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Background image */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }} />
          {/* Dark overlay — bottom-heavy gradient for text legibility */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,20,10,0.45) 0%, rgba(10,20,10,0.55) 50%, rgba(5,15,5,0.75) 100%)',
          }} />

          {/* Content */}
          <div style={{
            position: 'relative', zIndex: 1,
            textAlign: 'center',
            maxWidth: '860px',
            padding: isMobile ? '120px 28px 80px' : '0 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {/* Top label */}
            <p style={{
              fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.35em',
              color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Service Hospitality Trainer
            </p>

            {/* Name */}
            <h1 style={{
              fontSize: isMobile ? '3rem' : '5.5rem',
              fontWeight: '700', color: 'white',
              lineHeight: '1.05', marginBottom: '0',
              letterSpacing: '0.08em',
              textShadow: '0 2px 24px rgba(0,0,0,0.4)',
            }}>
              川畑 和弘
            </h1>

            {/* Gold divider */}
            <div style={{ width: '56px', height: '2px', background: 'var(--gold)', margin: '28px auto' }} />

            {/* Tagline */}
            <p style={{
              fontSize: isMobile ? '0.95rem' : '1.15rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.82)',
              marginBottom: '28px',
              letterSpacing: '0.06em',
              lineHeight: '1.6',
            }}>
              Delighting People, Cultivating the Future.
            </p>

            {/* Services */}
            <p style={{
              fontSize: isMobile ? '0.82rem' : '0.95rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: '2.1',
              marginBottom: '12px',
              letterSpacing: '0.04em',
            }}>
              接客コーチング&nbsp;/&nbsp;ホスピタリティマネジメント<br />
              レストラン・ホテル開業サポート&nbsp;/&nbsp;組織開発
            </p>

            {/* Subtitle */}
            <p style={{
              fontSize: isMobile ? '0.8rem' : '0.88rem',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '52px',
              lineHeight: '1.8',
              fontStyle: 'italic',
            }}>
              お店の想いに寄り添い、心地よいサービス体験を丁寧に設計いたします。
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('services')} style={{
                padding: isMobile ? '14px 36px' : '16px 48px',
                fontSize: '0.95rem', fontWeight: '600',
                background: 'var(--gold)', color: 'white', border: 'none',
                borderRadius: '50px', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 28px rgba(212,163,115,0.5)',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(212,163,115,0.6)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(212,163,115,0.5)'; }}>
                サービスを見る
              </button>
              <button onClick={() => scrollTo('contact')} style={{
                padding: isMobile ? '14px 36px' : '16px 48px',
                fontSize: '0.95rem', fontWeight: '600',
                background: 'transparent', color: 'white',
                border: '1.5px solid rgba(255,255,255,0.55)',
                borderRadius: '50px', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.3s ease', letterSpacing: '0.04em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; }}>
                無料相談する
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)' }}>SCROLL</p>
            <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
          </div>
        </section>

        {/* ── CONCERNS ── */}
        <section id="concerns" style={{
          padding: isMobile ? '72px 20px' : '100px 40px',
          background: 'linear-gradient(160deg, #1a2b19 0%, #243822 60%, #2e4a2c 100%)',
        }}>
          <div style={wrap}>
            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '52px' : '72px' }}>
              <p style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>CHALLENGES</p>
              <h2 style={{ fontSize: isMobile ? '1.7rem' : '2.4rem', fontWeight: '700', color: 'white', marginBottom: '20px', lineHeight: '1.3' }}>
                こんなお悩みはありませんか？
              </h2>
              <div style={{ width: '48px', height: '2px', background: 'var(--gold)', margin: '0 auto' }} />
            </div>

            {/* Items grid */}
            {isMobile ? (
              /* Mobile: vertical list with separator */
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {concerns.map((c, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '20px',
                    padding: '28px 0',
                    borderBottom: i < concerns.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.05em', flexShrink: 0, minWidth: '28px', marginTop: '2px' }}>
                      0{i + 1}
                    </span>
                    <p style={{ fontSize: '0.97rem', lineHeight: '1.75', color: 'rgba(255,255,255,0.85)', fontWeight: '400' }}>{c.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              /* Desktop: 5-column open grid */
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}>
                {concerns.map((c, i) => (
                  <div key={i} style={{
                    padding: '40px 28px',
                    borderRight: i < concerns.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    position: 'relative',
                  }}>
                    {/* Gold top accent */}
                    <div style={{
                      position: 'absolute', top: 0, left: '28px',
                      width: '32px', height: '2px', background: 'var(--gold)',
                    }} />
                    {/* Number */}
                    <p style={{
                      fontSize: '2.2rem', fontWeight: '700',
                      color: 'rgba(212,163,115,0.25)',
                      marginBottom: '20px', letterSpacing: '0.02em',
                      lineHeight: '1',
                    }}>0{i + 1}</p>
                    {/* Text */}
                    <p style={{
                      fontSize: '0.88rem', lineHeight: '1.85',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: '400',
                    }}>{c.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Solution CTA */}
            <div style={{ marginTop: isMobile ? '52px' : '72px', textAlign: 'center' }}>
              <div style={{
                display: 'inline-block',
                border: '1px solid rgba(212,163,115,0.5)',
                borderRadius: '4px',
                padding: isMobile ? '24px 28px' : '28px 64px',
                marginBottom: '28px',
              }}>
                <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '10px', letterSpacing: '0.05em' }}>
                  その悩み—
                </p>
                <p style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: '700', color: 'white', letterSpacing: '0.04em', lineHeight: '1.4' }}>
                  すべて、解決できます。
                </p>
              </div>
              <div>
                <button onClick={() => scrollTo('contact')} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--gold)', fontWeight: '500', fontSize: '0.88rem',
                  fontFamily: 'inherit', letterSpacing: '0.1em',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}>
                  <span>まずは無料でご相談ください</span>
                  <span style={{ fontSize: '1rem' }}>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION / MISSION / VALUE ── */}
        <section id="vision" style={{
          padding: isMobile ? '72px 20px' : '100px 40px',
          background: 'linear-gradient(160deg, #1a2b19 0%, #243822 60%, #2e4a2c 100%)',
        }}>
          <div style={wrap}>
            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '52px' : '72px' }}>
              <p style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>PHILOSOPHY</p>
              <h2 style={{ fontSize: isMobile ? '1.7rem' : '2.4rem', fontWeight: '700', color: 'white', marginBottom: '20px', lineHeight: '1.3' }}>
                Vision / Mission / Value
              </h2>
              <div style={{ width: '48px', height: '2px', background: 'var(--gold)', margin: '0 auto' }} />
            </div>

            {isMobile ? (
              /* Mobile: vertical */
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  {
                    label: 'Vision', title: 'ビジョン',
                    main: '「人が人を喜ばせることで、幸せが循環する社会を。」',
                    desc: 'おもてなしの力で、人の心がつながり、思いやりの連鎖が生まれる。その連鎖が、地域や社会の豊かさへと広がっていく未来を目指す。',
                    items: null,
                  },
                  {
                    label: 'Mission', title: 'ミッション',
                    main: 'プロのサービスマンとして、人を喜ばせる体験を通じて、サービス業の価値と地位を高める。',
                    desc: '生産者、ゲスト、そして地域がそれぞれの立場で幸せを感じられるように。"歓び"を軸に、人と社会の関係性をより良い形にデザインする。',
                    items: null,
                  },
                  {
                    label: 'Value', title: 'バリュー',
                    main: null, desc: null,
                    items: [
                      { key: '感謝と敬意', desc: '人とのつながりに感謝し、相手への敬意を忘れない。' },
                      { key: '思いやりと誠実', desc: '相手の立場に立ち、心からのサービスを届ける。' },
                      { key: '歓びの循環', desc: '自分の喜びが誰かの喜びへ、社会の喜びへとつながる行動を選ぶ。' },
                    ],
                  },
                ].map((item, i, arr) => (
                  <div key={i} style={{ padding: '28px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <p style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.22em', color: 'var(--gold)', marginBottom: '6px' }}>{item.label}</p>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'white', marginBottom: '14px' }}>{item.title}</h3>
                    {item.main && <p style={{ fontSize: '0.93rem', fontWeight: '600', lineHeight: '1.85', color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>{item.main}</p>}
                    {item.desc && <p style={{ fontSize: '0.86rem', lineHeight: '1.9', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>}
                    {item.items && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {item.items.map((v, j) => (
                          <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '1px' }}>—</span>
                            <div>
                              <p style={{ fontSize: '0.88rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)', marginBottom: '3px' }}>{v.key}</p>
                              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7' }}>{v.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Desktop: 3-column open grid matching CHALLENGES */
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}>
                {[
                  {
                    label: 'Vision', title: 'ビジョン',
                    main: '「人が人を喜ばせることで、幸せが循環する社会を。」',
                    desc: 'おもてなしの力で、人の心がつながり、思いやりの連鎖が生まれる。その連鎖が、地域や社会の豊かさへと広がっていく未来を目指す。',
                    items: null,
                  },
                  {
                    label: 'Mission', title: 'ミッション',
                    main: 'プロのサービスマンとして、人を喜ばせる体験を通じて、サービス業の価値と地位を高める。',
                    desc: '生産者、ゲスト、そして地域がそれぞれの立場で幸せを感じられるように。"歓び"を軸に、人と社会の関係性をより良い形にデザインする。',
                    items: null,
                  },
                  {
                    label: 'Value', title: 'バリュー',
                    main: null, desc: null,
                    items: [
                      { key: '感謝と敬意', desc: '人とのつながりに感謝し、相手への敬意を忘れない。' },
                      { key: '思いやりと誠実', desc: '相手の立場に立ち、心からのサービスを届ける。' },
                      { key: '歓びの循環', desc: '自分の喜びが誰かの喜びへ、社会の喜びへとつながる行動を選ぶ。' },
                    ],
                  },
                ].map((item, i, arr) => (
                  <div key={i} style={{
                    padding: '48px 40px',
                    borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    position: 'relative',
                  }}>
                    {/* Gold top accent */}
                    <div style={{ position: 'absolute', top: 0, left: '40px', width: '32px', height: '2px', background: 'var(--gold)' }} />

                    {/* Large ghost label */}
                    <p style={{
                      fontSize: '2rem', fontWeight: '700',
                      color: 'rgba(212,163,115,0.18)',
                      marginBottom: '20px', letterSpacing: '0.08em', lineHeight: '1',
                    }}>{item.label.toUpperCase()}</p>

                    {/* Title */}
                    <p style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.22em', color: 'var(--gold)', marginBottom: '8px' }}>{item.label}</p>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'white', marginBottom: '22px', lineHeight: '1.3' }}>{item.title}</h3>

                    {item.main && (
                      <p style={{ fontSize: '0.95rem', fontWeight: '600', lineHeight: '1.9', color: 'rgba(255,255,255,0.88)', marginBottom: '16px' }}>
                        {item.main}
                      </p>
                    )}
                    {item.desc && (
                      <p style={{ fontSize: '0.85rem', lineHeight: '1.95', color: 'rgba(255,255,255,0.55)' }}>
                        {item.desc}
                      </p>
                    )}
                    {item.items && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        {item.items.map((v, j) => (
                          <li key={j} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '0.9rem', marginTop: '2px' }}>—</span>
                            <div>
                              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'rgba(255,255,255,0.88)', marginBottom: '4px' }}>{v.key}</p>
                              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.52)', lineHeight: '1.75' }}>{v.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── PROFILE ── */}
        <section id="profile" style={sec('var(--beige)')}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SLabel t="PROFILE" />
              <STitle t="代表プロフィール" />
              <Divider />
            </div>

            {/* Bio */}
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '36px' : '72px', alignItems: isMobile ? 'center' : 'flex-start', marginBottom: '56px' }}>
              <div style={{ flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PROFILE_IMG} alt="川畑 和弘" style={{
                  width: isMobile ? '200px' : '280px', height: isMobile ? '240px' : '340px',
                  objectFit: 'cover', objectPosition: 'top',
                  borderRadius: '4px', border: '1px solid rgba(61,90,60,0.15)',
                  boxShadow: '12px 12px 0 rgba(61,90,60,0.08)',
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.18em', color: 'var(--gold)', marginBottom: '8px' }}>SERVICE HOSPITALITY ADVISOR</p>
                <h3 style={{ fontSize: isMobile ? '1.6rem' : '2.2rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '6px' }}>川畑 和弘</h3>
                <div style={{ width: '40px', height: '3px', background: 'var(--gold)', marginBottom: '28px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem', lineHeight: '1.95', color: 'var(--text-dark)' }}>
                  <p>調理師専門学校卒。箱根のオーベルジュでサービスの礎を築き、ワインバーの店長として現場と運営に携わる。地方のリゾートホテルで"時間をともにするおもてなし"を深め、三つ星レストランでは支配人として空間と体験づくりを統括。</p>
                  <p>異なる環境で積み重ねた経験から、場所や規模に応じた"心に残る接客と仕組み"を構築。レストラン、ホテル、町場、リゾート—様々な現場で培った知見を、組織と顧客体験の向上に活かします。</p>
                  <p>茶道歴10年。「お互いの時間を大切にしあうこと」を出発点に、言葉、立ち居振る舞い、空気づくりを整える作法を、現代のサービス現場で再現可能な形に落とし込んでいます。</p>
                </div>
                <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['調理師免許', 'JSA認定ソムリエ', '茶道歴10年'].map((cert) => (
                    <span key={cert} style={{ padding: '6px 18px', background: 'white', border: '2px solid var(--forest-green)', borderRadius: '50px', fontSize: '0.78rem', fontWeight: '600', color: 'var(--forest-green)' }}>{cert}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Career */}
            <div style={{ background: 'white', borderRadius: '16px', padding: isMobile ? '28px 20px' : '44px 48px', border: '1px solid rgba(61,90,60,0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '36px', textAlign: 'center', letterSpacing: '0.06em' }}>キャリア</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { year: '1999–2007', company: 'オーベルジュ・オー・ミラドー', role: 'ギャルソン、ポーター、シェフ・ド・ラン', desc: 'クラシックなフランス式サービスを体系的に学び、料理を最大限に引き立てる顧客体験を習得。' },
                  { year: '2007–2009', company: 'ブラッスリーH×M モト・ロッソ', role: '店長', desc: '新規開業スペインバルの店長として立ち上げを担当。幅広い顧客層に対応し、教育・運営体制を確立。' },
                  { year: '2009–2016', company: 'ベラビスタ境ガ浜', role: 'ラウンジ、イタリアン、レストランマネージャー → 料飲部統括マネージャー', desc: 'リゾートホテルで"非日常体験"を設計し、高級空間に温かみを与える接客を実践。' },
                  { year: '2016–2025', company: "L'Effervescence", role: 'メートル・ド・テール → アシスタントマネージャー → 支配人', desc: '支配人として三つ星・グリーンスター継続を牽引。ブランド体験とチームマネジメントを統括。' },
                ].map((item, i, arr) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', paddingBottom: i < arr.length - 1 ? '32px' : '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', marginTop: '4px', background: i % 2 === 0 ? 'var(--forest-green)' : 'var(--gold)', border: '3px solid white', boxShadow: `0 0 0 2px ${i % 2 === 0 ? 'var(--forest-green)' : 'var(--gold)'}` }} />
                      {i < arr.length - 1 && <div style={{ width: '2px', flex: 1, background: 'rgba(61,90,60,0.18)', marginTop: '8px' }} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.73rem', color: 'var(--gold)', fontWeight: '700', marginBottom: '4px' }}>{item.year}</p>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '3px' }}>{item.company}</h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-gray)', marginBottom: '8px' }}>{item.role}</p>
                      <p style={{ fontSize: '0.86rem', lineHeight: '1.75', color: 'var(--text-dark)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES with images ── */}
        <section id="services" style={sec('white')}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <SLabel t="SERVICES" />
              <STitle t="提供サービス" />
              <Divider />
              <p style={{ marginTop: '20px', fontSize: '0.93rem', color: 'var(--text-gray)', lineHeight: '1.85', maxWidth: '680px', margin: '20px auto 0' }}>
                文化（Identity）を芯に据え、現場の技術（Service）で体験化。オペレーション（Operation）が再現性を支え、コミュニケーション（Relationship）が関係性とファンを育成します。
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '24px', marginTop: '52px' }}>
              {services.map((service, i) => (
                <div key={i} style={{
                  background: expandedService === i ? 'linear-gradient(135deg, #2a4228, #3d5a3c)' : 'white',
                  border: `2px solid ${expandedService === i ? 'transparent' : 'rgba(61,90,60,0.12)'}`,
                  borderRadius: '16px', overflow: 'hidden', transition: 'all 0.35s ease',
                  boxShadow: expandedService === i ? '0 12px 40px rgba(61,90,60,0.28)' : '0 4px 20px rgba(0,0,0,0.05)',
                }}>
                  {/* Card image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                    {expandedService === i && <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,42,26,0.55)' }} />}
                    <div style={{
                      position: 'absolute', top: '14px', left: '14px',
                      width: '38px', height: '38px', borderRadius: '50%',
                      background: expandedService === i ? 'var(--gold)' : 'rgba(255,255,255,0.92)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.05rem', fontWeight: '700',
                      color: expandedService === i ? 'white' : 'var(--forest-green)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    }}>{service.num}</div>
                  </div>

                  {/* Expand button */}
                  <button onClick={() => setExpandedService(expandedService === i ? null : i)} style={{
                    width: '100%', padding: '22px 24px', display: 'flex', alignItems: 'flex-start',
                    gap: '16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                  }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: expandedService === i ? 'rgba(255,255,255,0.65)' : 'var(--gold)', marginBottom: '5px' }}>{service.subtitle}</p>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: expandedService === i ? 'white' : 'var(--text-dark)', marginBottom: '8px' }}>{service.title}</h3>
                      <p style={{ fontSize: '0.86rem', lineHeight: '1.7', color: expandedService === i ? 'rgba(255,255,255,0.8)' : 'var(--text-gray)' }}>{service.desc}</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '4px', color: expandedService === i ? 'white' : 'var(--forest-green)', transition: 'transform 0.3s ease', transform: expandedService === i ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}>↓</span>
                  </button>

                  {expandedService === i && (
                    <div style={{ padding: '0 24px 24px' }}>
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '16px' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {service.details.map((d, j) => (
                            <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.86rem', color: 'rgba(255,255,255,0.88)', lineHeight: '1.65' }}>
                              <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px', fontWeight: '700' }}>✓</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" style={sec('var(--beige)')}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <SLabel t="HOW IT WORKS" />
              <STitle t="実施プロセス" />
              <Divider />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '28px' : '0', position: 'relative' }}>
              {!isMobile && <div style={{ position: 'absolute', top: '36px', left: '12.5%', right: '12.5%', height: '2px', background: 'linear-gradient(to right, var(--forest-green), var(--gold))', zIndex: 0 }} />}
              {processSteps.map((step, i) => (
                <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: isMobile ? '0' : '0 20px' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--forest-green), #5a7a59)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700', margin: '0 auto 22px', border: '4px solid var(--beige)', boxShadow: '0 4px 18px rgba(61,90,60,0.3)' }}>{step.num}</div>
                  <h3 style={{ fontSize: '0.97rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: '1.4' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.84rem', lineHeight: '1.75', color: 'var(--text-gray)', background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{
          padding: isMobile ? '72px 20px' : '100px 40px',
          background: 'linear-gradient(160deg, #1a2b19 0%, #243822 60%, #2e4a2c 100%)',
        }}>
          <div style={wrap}>
            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '52px' : '72px' }}>
              <p style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>PRICING</p>
              <h2 style={{ fontSize: isMobile ? '1.7rem' : '2.4rem', fontWeight: '700', color: 'white', marginBottom: '20px', lineHeight: '1.3' }}>
                料金・期間の目安
              </h2>
              <div style={{ width: '48px', height: '2px', background: 'var(--gold)', margin: '0 auto 20px' }} />
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>
                お客様のニーズや店舗規模に合わせて、最適なプランをご提案いたします。
              </p>
            </div>

            {isMobile ? (
              /* Mobile: vertical list */
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {plans.map((plan, i) => (
                  <div key={i}
                    onMouseEnter={() => setHoveredPlan(i)}
                    onMouseLeave={() => setHoveredPlan(null)}
                    style={{
                      padding: '36px 16px',
                      borderBottom: i < plans.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      position: 'relative',
                      borderLeft: hoveredPlan === i ? '3px solid var(--gold)' : '3px solid transparent',
                      background: hoveredPlan === i ? 'rgba(212,163,115,0.07)' : 'transparent',
                      transition: 'all 0.3s ease',
                      borderRadius: '4px',
                    }}>
                    {plan.highlight && (
                      <p style={{ fontSize: '0.62rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '12px' }}>— RECOMMENDED</p>
                    )}
                    <p style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.2em', color: plan.highlight ? 'var(--gold)' : 'rgba(255,255,255,0.4)', marginBottom: '6px' }}>PLAN 0{i + 1}</p>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'white', marginBottom: '12px' }}>{plan.name}</h3>
                    <p style={{ fontSize: '2rem', fontWeight: '700', color: plan.highlight ? 'var(--gold)' : 'white', marginBottom: '4px', lineHeight: '1.1' }}>{plan.price}</p>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '24px' }}>{plan.duration}</p>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {plan.details.map((d, j) => (
                        <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '1px' }}>—</span>
                          <span style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)' }}>{d}</span>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.8rem', lineHeight: '1.7', fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', marginTop: '18px' }}>{plan.note}</p>
                  </div>
                ))}
              </div>
            ) : (
              /* Desktop: 3-column open grid */
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}>
                {plans.map((plan, i) => {
                  const isHovered = hoveredPlan === i;
                  return (
                  <div key={i}
                    onMouseEnter={() => setHoveredPlan(i)}
                    onMouseLeave={() => setHoveredPlan(null)}
                    style={{
                      padding: '48px 40px',
                      borderRight: i < plans.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      position: 'relative',
                      background: isHovered ? 'rgba(212,163,115,0.09)' : 'transparent',
                      transition: 'background 0.35s ease, box-shadow 0.35s ease',
                      boxShadow: isHovered ? 'inset 0 -3px 0 rgba(212,163,115,0.6)' : 'none',
                      cursor: 'default',
                    }}>
                    {/* Gold top accent — wider on hover */}
                    <div style={{
                      position: 'absolute', top: 0, left: '40px',
                      width: isHovered ? '80px' : (plan.highlight ? '56px' : '32px'),
                      height: plan.highlight ? '3px' : '2px',
                      background: 'var(--gold)',
                      transition: 'width 0.35s ease',
                    }} />

                    {/* RECOMMENDED badge */}
                    {plan.highlight && (
                      <p style={{ fontSize: '0.62rem', fontWeight: '700', letterSpacing: '0.22em', color: 'var(--gold)', marginBottom: '14px' }}>— RECOMMENDED</p>
                    )}

                    {/* Ghost plan number — brighter on hover */}
                    <p style={{
                      fontSize: '2.2rem', fontWeight: '700',
                      color: isHovered ? 'rgba(212,163,115,0.42)' : 'rgba(212,163,115,0.18)',
                      marginBottom: plan.highlight ? '12px' : '20px',
                      letterSpacing: '0.05em', lineHeight: '1',
                      transition: 'color 0.35s ease',
                    }}>0{i + 1}</p>

                    {/* Plan label */}
                    <p style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.2em', color: plan.highlight || isHovered ? 'var(--gold)' : 'rgba(255,255,255,0.4)', marginBottom: '8px', transition: 'color 0.35s ease' }}>PLAN</p>

                    {/* Plan name */}
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'white', marginBottom: '20px', lineHeight: '1.4' }}>{plan.name}</h3>

                    {/* Price */}
                    <p style={{
                      fontSize: '2.2rem', fontWeight: '700',
                      color: plan.highlight || isHovered ? 'var(--gold)' : 'white',
                      marginBottom: '4px', lineHeight: '1.1',
                      transition: 'color 0.35s ease',
                    }}>{plan.price}</p>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '28px', letterSpacing: '0.03em' }}>{plan.duration}</p>

                    {/* Divider */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {plan.details.map((d, j) => (
                        <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px', fontSize: '0.85rem' }}>—</span>
                          <span style={{ fontSize: '0.84rem', lineHeight: '1.72', color: isHovered ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.72)', transition: 'color 0.35s ease' }}>{d}</span>
                        </div>
                      ))}
                    </div>

                    {/* Note */}
                    <p style={{ fontSize: '0.78rem', lineHeight: '1.72', fontStyle: 'italic', color: 'rgba(255,255,255,0.38)', marginTop: '20px' }}>{plan.note}</p>

                    {/* Hover CTA */}
                    <div style={{
                      marginTop: '28px',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}>
                      <button onClick={() => scrollTo('contact')} style={{
                        width: '100%', padding: '10px 0',
                        fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.12em',
                        color: 'var(--gold)', background: 'transparent',
                        border: '1px solid rgba(212,163,115,0.5)', borderRadius: '50px',
                        cursor: 'pointer', fontFamily: 'inherit',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}>
                        このプランで相談する →
                      </button>
                    </div>
                  </div>
                  );
                })}
              </div>
            )}

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: '48px', letterSpacing: '0.04em' }}>
              ※ 料金は店舗規模や内容により調整いたします。まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* ── CASES & TESTIMONIALS ── */}
        <section id="cases" style={sec('var(--beige)')}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SLabel t="RESULTS" />
              <STitle t="実績・お客様の声" />
              <Divider />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '48px' }}>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '24px', paddingBottom: '12px', borderBottom: '2px solid var(--gold)' }}>サービス事例</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {cases.map((item, i) => (
                    <div key={i} style={{ background: 'white', padding: '24px', borderRadius: '14px', border: '1px solid rgba(61,90,60,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                      <span style={{ display: 'inline-block', marginBottom: '10px', padding: '4px 14px', background: 'var(--forest-green)', color: 'white', borderRadius: '50px', fontSize: '0.68rem', fontWeight: '700' }}>{item.tag}</span>
                      <p style={{ fontSize: '0.73rem', color: 'var(--text-gray)', marginBottom: '6px' }}>{item.category}</p>
                      <h4 style={{ fontSize: '0.97rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px', lineHeight: '1.5' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.84rem', lineHeight: '1.75', color: 'var(--text-gray)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '24px', paddingBottom: '12px', borderBottom: '2px solid var(--gold)' }}>お客様の声</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {testimonials.map((item, i) => (
                    <div key={i} style={{ background: 'white', padding: '22px', borderRadius: '14px', borderLeft: '4px solid var(--gold)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div>
                          <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-dark)' }}>{item.name}</p>
                          <p style={{ fontSize: '0.73rem', color: 'var(--text-gray)' }}>{item.role}</p>
                        </div>
                        <span style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '2px' }}>★★★★★</span>
                      </div>
                      <p style={{ fontSize: '0.84rem', lineHeight: '1.82', color: 'var(--text-gray)', fontStyle: 'italic' }}>"{item.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={sec('white')}>
          <div style={{ ...wrap, maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SLabel t="FAQ" />
              <STitle t="よくある質問" />
              <Divider />
            </div>
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: isMobile ? '72px 20px' : '100px 40px', background: 'linear-gradient(135deg, #182818 0%, #2a4228 45%, #3d5a3c 100%)' }}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SLabel t="CONTACT" />
              <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.4rem', fontWeight: '700', color: 'white', marginBottom: '20px' }}>お問い合わせ</h2>
              <Divider />
              <p style={{ marginTop: '20px', fontSize: '0.93rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.85' }}>サービス向上や組織づくりに関するご相談は、どうぞお気軽にお声がけください。</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px' }}>
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '20px', padding: isMobile ? '28px 20px' : '40px', border: '1px solid rgba(255,255,255,0.13)' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'white', marginBottom: '28px' }}>メッセージを送る</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    { label: 'お名前', key: 'name', type: 'text', required: true },
                    { label: 'メールアドレス', key: 'email', type: 'email', required: true },
                    { label: '電話番号', key: 'phone', type: 'tel', required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: '600', color: 'rgba(255,255,255,0.75)', marginBottom: '8px' }}>
                        {field.label} {field.required && <span style={{ color: 'var(--gold)' }}>*</span>}
                      </label>
                      <input type={field.type} required={field.required}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', fontSize: '0.93rem', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '10px', color: 'white', outline: 'none', transition: 'border-color 0.3s ease', fontFamily: 'inherit', boxSizing: 'border-box' }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: '600', color: 'rgba(255,255,255,0.75)', marginBottom: '8px' }}>
                      お問い合わせ内容 <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5}
                      style={{ width: '100%', padding: '12px 16px', fontSize: '0.93rem', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '10px', color: 'white', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s ease', fontFamily: 'inherit', boxSizing: 'border-box' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
                    />
                  </div>
                  <button type="submit" disabled={formStatus === 'sending'} style={{ padding: '14px', fontSize: '1rem', fontWeight: '700', background: formStatus === 'sending' ? 'rgba(212,163,115,0.5)' : 'var(--gold)', color: 'white', border: 'none', borderRadius: '50px', cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'all 0.3s ease', boxShadow: '0 6px 20px rgba(212,163,115,0.4)' }}
                    onMouseEnter={(e) => { if (formStatus !== 'sending') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(212,163,115,0.52)'; } }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,163,115,0.4)'; }}>
                    {formStatus === 'sending' ? '送信中...' : '送信する'}
                  </button>

                  {formStatus === 'done' && (
                    <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(212,163,115,0.9)', fontWeight: '600' }}>
                      ✓ お問い合わせを受け付けました。後ほどご連絡いたします。
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,120,120,0.9)', fontWeight: '600' }}>
                      送信に失敗しました。再度お試しいただくか、直接メールにてご連絡ください。
                    </p>
                  )}
                </form>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', justifyContent: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'white', marginBottom: '4px' }}>川畑 和弘</h3>
                  <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>Service Hospitality Trainer</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { icon: '📱', label: 'Mobile', value: '090-1035-8186', href: 'tel:090-1035-8186' },
                    { icon: '✉️', label: 'Mail', value: 'info@kawabata-service.com', href: 'mailto:info@kawabata-service.com' },
                    { icon: '📍', label: 'Office', value: '〒212-0054 神奈川県川崎市幸区小倉2-31-15 Villa Blanche 508', href: null },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0, background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2px', fontWeight: '700', letterSpacing: '0.08em' }}>{item.label}</p>
                        {item.href
                          ? <a href={item.href} style={{ fontSize: '0.93rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: '500' }}>{item.value}</a>
                          : <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.78)', lineHeight: '1.55' }}>{item.value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '22px', background: 'rgba(255,255,255,0.06)', borderRadius: '14px', borderLeft: '3px solid var(--gold)' }}>
                  <p style={{ fontSize: '0.88rem', lineHeight: '1.85', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>お店に寄り添いながら、より良い未来づくりをお手伝いいたします。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#111', padding: '44px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.05rem', fontWeight: '700', color: 'white', marginBottom: '6px', letterSpacing: '0.06em' }}>川畑 和弘</p>
        <p style={{ fontSize: '0.72rem', color: 'var(--gold)', marginBottom: '24px', letterSpacing: '0.18em' }}>Service Hospitality Trainer</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'inherit', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}>
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.28)' }}>© 2025 川畑 和弘 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
