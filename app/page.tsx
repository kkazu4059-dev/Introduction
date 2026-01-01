'use client';

import { useState } from 'react';

// 装飾用のコーナーボックスコンポーネント
const CornerBoxes = () => (
  <>
    <div style={{ position: 'absolute', top: '40px', left: '40px', width: '70px', height: '70px', border: '2px solid var(--forest-green)', borderRadius: '4px' }} />
    <div style={{ position: 'absolute', top: '40px', right: '40px', width: '70px', height: '70px', border: '2px solid var(--forest-green)', borderRadius: '4px' }} />
    <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '70px', height: '70px', border: '2px solid var(--forest-green)', borderRadius: '4px' }} />
    <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '70px', height: '70px', border: '2px solid var(--forest-green)', borderRadius: '4px' }} />
  </>
);

// ゴールドのアンダーラインコンポーネント
const GoldUnderline = () => (
  <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '0 auto' }} />
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const pages = [
    'hero',
    'vision',
    'profile',
    'career',
    'strengths',
    'services',
    'service-detail-1',
    'service-detail-2',
    'service-detail-3',
    'service-detail-4',
    'process',
    'pricing',
    'cases',
    'schedule',
    'contact'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。後ほどご連絡させていただきます。');
  };

  const scrollToPage = (pageIndex: number) => {
    const element = document.getElementById(`page-${pageIndex}`);
    element?.scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(pageIndex);
  };

  return (
    <>
      {/* トップ固定ナビゲーション */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, background: 'rgba(248, 245, 242, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(61, 90, 60, 0.1)' }}>
        <nav style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--forest-green)', cursor: 'pointer' }} onClick={() => scrollToPage(0)}>
            川畑 和弘
          </div>
          <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            {[
              { label: 'ビジョン', page: 1 },
              { label: 'プロフィール', page: 2 },
              { label: 'サービス', page: 5 },
              { label: '実施プロセス', page: 10 },
              { label: '実績・事例', page: 13 }
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToPage(item.page)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '0.95rem',
                    color: 'var(--text-dark)',
                    cursor: 'pointer',
                    fontWeight: '500',
                    padding: '8px 0',
                    borderBottom: '2px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderBottomColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--forest-green)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderBottomColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-dark)';
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollToPage(14)}
                style={{
                  background: 'var(--gold)',
                  border: 'none',
                  fontSize: '0.95rem',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(212, 163, 115, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gold-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 163, 115, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gold)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 163, 115, 0.3)';
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>✉</span>
                お問い合わせ
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* サイドナビゲーション */}
      <nav style={{ position: 'fixed', right: '40px', top: '50%', transform: 'translateY(-50%)', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPage(index)}
            style={{
              width: currentPage === index ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              border: 'none',
              background: currentPage === index ? 'var(--gold)' : 'var(--forest-green)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              opacity: currentPage === index ? 1 : 0.5
            }}
            aria-label={`ページ${index + 1}へ移動`}
          />
        ))}
      </nav>

      <main>
        {/* 1. ヒーローページ */}
        <section id="page-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)' }}>
          <CornerBoxes />
          <div style={{ textAlign: 'center', maxWidth: '900px', padding: '0 40px', position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '80px', background: 'var(--forest-green)' }} />
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '30px', letterSpacing: '0.05em' }}>
              Service Hospitality Trainer
            </h1>
            <GoldUnderline />
            <h2 style={{ fontSize: '2.5rem', color: 'var(--forest-green)', margin: '40px 0 30px', letterSpacing: '0.1em' }}>
川畑 和弘
            </h2>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '40px' }}>
              Delighting People, Cultivating the Future.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '15px', lineHeight: '1.8' }}>
              接客コーチング / ホスピタリーマネジメント / レストラン・ホテル開業サポート / 組織開発
            </p>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-dark)', fontStyle: 'italic' }}>
              お店の想いに寄り添い、心地よいサービス体験を丁寧に設計いたします。
            </p>
          </div>
          {/* ゴールドの曲線装飾 */}
          <div style={{ position: 'absolute', top: '60px', right: '180px', width: '300px', height: '300px', border: '2px solid var(--gold)', borderRadius: '50%', borderLeft: 'none', borderBottom: 'none' }} />
          <div style={{ position: 'absolute', bottom: '60px', left: '40px', width: '200px', height: '200px', border: '2px solid var(--gold)', borderRadius: '50%', borderRight: 'none', borderTop: 'none' }} />
        </section>

        {/* 2. Vision / Mission / Value */}
        <section id="page-1" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Vision / Mission / Value</h2>
            <GoldUnderline />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', marginTop: '80px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '3px', background: 'var(--gold)', margin: '0 auto 30px' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px' }}>Vision（ビジョン）</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '25px', lineHeight: '1.8' }}>
                  「人が人を喜ばせることで、<br />幸せが循環する社会を。」
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', lineHeight: '1.9' }}>
                  おもてなしの力で、人の心がつながり、思いやりの連鎖が生まれる。その連鎖が、地域や社会の豊かさへと広がっていく未来を目指す。
                </p>
              </div>
              <div style={{ textAlign: 'center', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                <div style={{ width: '80px', height: '3px', background: 'var(--gold)', margin: '0 auto 30px' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px' }}>Mission（ミッション）</h3>
                <p style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '25px', lineHeight: '1.8' }}>
                  プロのサービスマンとして、<br />人を喜ばせる体験を通じて、<br />サービス業の価値と地位を高める。
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', lineHeight: '1.9' }}>
                  生産者、ゲスト、そして地域がそれぞれの立場で幸せを感じられるように。"歓び"を軸に、人と社会の関係性をより良い形にデザインする。
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '3px', background: 'var(--gold)', margin: '0 auto 30px' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px' }}>Value（バリュー）</h3>
                <ul style={{ textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: '2.2' }}>
                  <li style={{ marginBottom: '15px' }}>
                    <strong>感謝と敬意</strong> – 人とのつながりに感謝し、相手への敬意を忘れない。
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <strong>思いやりと誠実</strong> – 相手の立場に立ち、心からのサービスを届ける。
                  </li>
                  <li>
                    <strong>歓びの循環</strong> – 自分の喜びが誰かの喜びへ、そして社会の喜びへとつながる行動を選ぶ。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. プロフィール */}
        <section id="page-2" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1100px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>プロフィール</h2>
            <GoldUnderline />
            <div style={{ display: 'flex', gap: '60px', marginTop: '60px', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 auto' }}>
                <img src="/profile.jpg" alt="川畑 和弘" style={{ width: '280px', height: '330px', objectFit: 'cover', borderRadius: '4px', border: '3px solid var(--forest-green)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--forest-green)', marginBottom: '10px', borderBottom: '2px solid var(--gold)', paddingBottom: '10px', display: 'inline-block' }}>
                  川畑 和弘　Service Hospitality Advisor
                </h3>
                <div style={{ marginTop: '30px', fontSize: '0.95rem', lineHeight: '2', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p>
                    調理師専門学校卒。箱根のオーベルジュでサービスの礎を築き、ワインバーの店長として現場と運営に携わる。地方のリゾートホテルで"時間をともにするおもてなし"を深め、三つ星レストランでは支配人として空間と体験づくりを統括。
                  </p>
                  <p>
                    異なる環境で積み重ねた経験から、場所や規模に応じた"心に残る接客と仕組み"を構築。レストラン、ホテル、町場、リゾート—様々な現場で培った知見を、組織と顧客体験の向上に活かします。
                  </p>
                  <p>
                    茶道歴10年。「お互いの時間を大切にしあうこと」を出発点に、言葉、立ち居振る舞い、空気づくりを整える作法を、現代のサービス現場で再現可能な形に落とし込み、おもてなしの軸としています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. キャリア */}
        <section id="page-3" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1100px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>キャリア</h2>
            <GoldUnderline />
            <div style={{ marginTop: '70px', display: 'flex', gap: '40px' }}>
              <div style={{ width: '4px', background: 'var(--forest-green)', position: 'relative' }}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} style={{ position: 'absolute', top: `${i * 25}%`, left: '50%', transform: 'translateX(-50%)', width: '14px', height: '14px', borderRadius: '50%', background: i % 2 === 0 ? 'var(--forest-green)' : 'var(--gold)' }} />
                ))}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {[
                  { year: '1999-2007', company: 'オーベルジュ・オー・ミラドー', role: 'ギャルソン、ポーター、シェフ・ド・ラン', desc: 'クラシックなフランス式サービスを体系的に学び、料理を最大限に引き立てる顧客体験を習得。' },
                  { year: '2007-2009', company: 'ブラッスリーH×M モト・ロッソ', role: '店長', desc: '新規開業店のスペインバルの店長として立ち上げを担当。幅広い顧客層に対応し、教育・運営を確立。' },
                  { year: '2009-2016', company: 'ベラビスタ境ガ浜', role: 'ラウンジ、イタリアン、レストランマネージャー→料飲部統括マネージャー', desc: 'リゾートホテルで"非日常体験"を設計し、高級空間に温かみを与える接客を実践。' },
                  { year: '2016-2025', company: "L'Effervescence", role: 'メートル・ド・テール→アシスタントマネージャー→支配人', desc: '支配人として三つ星・グリーンスター継続を牽引。ブランド体験とチームマネジメントを統括。' }
                ].map((item, index) => (
                  <div key={index} style={{ borderLeft: `4px solid ${index % 2 === 0 ? 'var(--forest-green)' : 'var(--gold)'}`, paddingLeft: '30px' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginBottom: '5px' }}>{item.year}</p>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '3px' }}>{item.company}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginBottom: '10px' }}>{item.role}</p>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-dark)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. 強み・実績 */}
        <section id="page-4" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>強み・実績</h2>
            <GoldUnderline />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '20px', borderBottom: '2px solid var(--forest-green)', paddingBottom: '10px' }}>主な実績</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    'ミシュラン三つ星・グリーンスター獲得を支えた運営設計（6年）',
                    'Impact Report制作主導',
                    '組織開発・チームビルディング（10年以上）',
                    'あらゆる価格帯・業態への適応力',
                    '茶道10年：所作・間・余白の設計をサービス基準化'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem' }}>●</span>
                      <span><strong>{item.split('（')[0]}</strong>{item.includes('（') && `（${item.split('（')[1]}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '20px', borderBottom: '2px solid var(--forest-green)', paddingBottom: '10px' }}>専門性</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    '顧客体験デザイン（CX/EX設計）',
                    '研修・教育プログラム設計',
                    'ブランドづくり・コミュニケーション設計',
                    'アドバイザー/トレーナーとしての伴走支援'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem' }}>●</span>
                      <span><strong>{item}</strong></span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '30px', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '15px', color: 'var(--text-dark)' }}>専門資格</h4>
                  <ul style={{ fontSize: '0.9rem', lineHeight: '2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ color: 'var(--forest-green)' }}>●</span>
                      <span>調理師免許</span>
                    </li>
                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ color: 'var(--forest-green)' }}>●</span>
                      <span>JSA認定ソムリエ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 提供サービス概要 */}
        <section id="page-5" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>提供サービス概要 ｜ 4つの柱</h2>
            <GoldUnderline />
            <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '30px', lineHeight: '1.8', maxWidth: '950px', margin: '30px auto 0' }}>
              文化（Identity）を芯に据え、現場の技術（Service/Hospitality）で体験化。オペレーション（Operation）が再現性を支え、コミュニケーション（Relationship）が関係性とファンを育成。4つの循環で"人が変わっても価値が続く店"を実現します。
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
              {[
                { num: '1', title: 'Service / Hospitality', subtitle: '技術と心の両輪を整える', desc: '言葉遣い・声の温度・間の使い方、所作・立ち姿・手の動きなど、茶道の身体技法を応用したサービス体系の構築と実践。', page: 6 },
                { num: '2', title: 'Culture / Identity', subtitle: '存在理由を言語化し、文化を浸透', desc: 'ミッション・ビジョンの整理、価値観にもとづく判断基準の設定。店の哲学を共有し、自走する組織へと導きます。', page: 7 },
                { num: '3', title: 'Operation / Team Support', subtitle: '動線と役割を最適化し再現性を確保', desc: '作業の重複・無駄を減らす配置設計、役割分担の明確化、品質チェック体制の構築。効率と品質の両立を実現します。', page: 8 },
                { num: '4', title: 'Communication / Relationship', subtitle: '体験前後まで設計し、関係性を育てる', desc: '予約〜退店後までの体験設計、言葉のトーン統一、自然な紹介・再訪につながる接点づくり。地域・生産者との共創を促進します。', page: 9 }
              ].map((service) => (
                <div
                  key={service.num}
                  onClick={() => scrollToPage(service.page)}
                  style={{
                    border: '2px solid rgba(61, 90, 60, 0.2)',
                    borderRadius: '8px',
                    padding: '30px',
                    background: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--forest-green)';
                    e.currentTarget.style.borderColor = 'var(--forest-green)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(61, 90, 60, 0.3)';
                    const title = e.currentTarget.querySelector('h3') as HTMLElement;
                    const subtitle = e.currentTarget.querySelectorAll('p')[0] as HTMLElement;
                    const desc = e.currentTarget.querySelectorAll('p')[1] as HTMLElement;
                    if (title) title.style.color = 'white';
                    if (subtitle) subtitle.style.color = 'rgba(255, 255, 255, 0.9)';
                    if (desc) desc.style.color = 'rgba(255, 255, 255, 0.95)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = 'rgba(61, 90, 60, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    const title = e.currentTarget.querySelector('h3') as HTMLElement;
                    const subtitle = e.currentTarget.querySelectorAll('p')[0] as HTMLElement;
                    const desc = e.currentTarget.querySelectorAll('p')[1] as HTMLElement;
                    if (title) title.style.color = 'var(--text-dark)';
                    if (subtitle) subtitle.style.color = 'var(--text-gray)';
                    if (desc) desc.style.color = 'var(--text-dark)';
                  }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--forest-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>{service.num}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '10px', transition: 'color 0.3s ease' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)', fontWeight: '500', marginBottom: '15px', transition: 'color 0.3s ease' }}>{service.subtitle}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: '1.8', transition: 'color 0.3s ease' }}>{service.desc}</p>
                  <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '1.5rem', color: 'var(--gold)' }}>→</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. サービス詳細① - Service / Hospitality */}
        <section id="page-6" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--forest-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>1</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>Service / Hospitality</h2>
            <GoldUnderline />

            <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px' }}>サービス（技術）</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '2', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    '言葉遣い・声の温度・間の取り方',
                    '所作・立ち姿・手の動きの整え方',
                    '無駄を減らした動線と提供タイミング',
                    '役割・ポジション・フローの設計',
                    'テーブルコントロール／予約・席数調整・料理提供のタイミング'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '30px', background: 'var(--beige-dark)', padding: '25px', borderRadius: '8px', border: '2px solid rgba(212, 163, 115, 0.3)' }}>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)' }}>
                    お客様にとって心地よい"見え方・伝わり方"をつくるため、立ち位置や動作、手の動きまで丁寧に整えます。
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', marginTop: '15px' }}>
                    サービスを「誰がやっても同じ品質で届けられる状態」へと導きます。
                  </p>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px' }}>ホスピタリティ（心）</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '2', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    '"人として出会う" 姿勢（笑顔、安心感）',
                    'ゲストの声に丁寧に耳を傾け、心に安らぎをもたらす',
                    '相手の状態を読み取り、緊張 → 安心 → 信頼へ導く',
                    'まわりへの気づきと、先回りの配慮（言われる前に"必要なひと手間"をして差し上げる）',
                    '過不足のない"ちょうど良い"配慮で、ゲストの時間を大切にする'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '30px', background: 'rgba(255, 255, 255, 0.7)', padding: '25px', borderRadius: '8px', border: '2px solid var(--gold)', borderLeft: '4px solid var(--gold)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '15px', color: 'var(--forest-green)' }}>おもてなしの本質</h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)' }}>
                    料理や空間の価値は、人を通して初めて伝わります。
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', marginTop: '10px' }}>
                    想いを受け取り、丁寧に手渡すその瞬間に、お店の価値が育まれます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. サービス詳細② - Culture / Identity */}
        <section id="page-7" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--forest-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>2</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>Culture / Identity構築</h2>
            <GoldUnderline />

            <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px' }}>ブランドの芯を明確にする</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '2', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    '「大切にしたい価値観」を言語化する',
                    'ゲストにどんな価値を届けるのかを明確にする',
                    '価値観 → 行動基準 に落とし込む',
                    'スタッフ全員が理解し、再現できる状態にする'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '30px', background: 'var(--beige-dark)', padding: '25px', borderRadius: '8px', border: '2px solid rgba(212, 163, 115, 0.3)' }}>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)' }}>
                    お店の価値観や哲学を、誰もが動ける行動レベルに翻訳し、現場に定着させます。
                  </p>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px' }}>文化を共有する仕組み作り</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '2', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    '大切にする価値観を全員で共有する',
                    '接客・サービスの行動基準を明確にする',
                    '属人化をなくし、再現性のある"型"をつくる（ルールブック化）',
                    'スタッフが自分の役割に価値を感じられる状態をつくる',
                    '朝礼・ミーティングを"文化を育てる時間"として再設計'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.7)', padding: '30px', borderRadius: '12px', border: '2px solid var(--gold)', borderLeft: '4px solid var(--forest-green)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px', color: 'var(--forest-green)' }}>自走する組織への転換</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.9', color: 'var(--text-dark)' }}>
                自走する組織とは、価値観と行動基準を明確にし、判断軸を共有することで、各自が主体的に動ける状態をつくることです。
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.9', color: 'var(--text-dark)', marginTop: '10px' }}>
                指示待ちから脱却し、組織として継続的に成果を生み出せる体制へと変わっていきます。
              </p>
            </div>
          </div>
        </section>
        {/* 9. サービス詳細③ - Operation / Team Support */}
        <section id="page-8" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '60px 40px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--forest-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>3</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>Operation / Team Support</h2>
            <GoldUnderline />

            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '20px' }}>提供フローと動線の最適化</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '営業中の立ち位置・動き方の整理',
                    'ピーク時に対応できる動線と配置の設計',
                    '作業の重複や役割の偏りが出ないよう配置を見直す',
                    'だれでも迷わず動けるオペレーション表の作成',
                    'キッチンとサービスの連携強化による提供のスムーズ化'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '20px', background: 'var(--beige-dark)', padding: '20px', borderRadius: '8px', border: '2px solid rgba(212, 163, 115, 0.3)' }}>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                    現場の動きをシンプルに整え、最小の動きで最大の成果が出るオペレーションをつくります。
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'var(--text-dark)', marginTop: '10px' }}>
                    ムダのない流れが生まれることで、チーム全体が落ち着いて働ける環境が整います。
                  </p>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '20px' }}>負担の偏りを防ぐ仕組み</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '役割・担当・作業手順の明確化',
                    '適切な予約数・席数の管理',
                    'サービスと料理の品質チェック体制',
                    '毎日の振り返り → 改善の習慣づくり'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--forest-green)', marginTop: '25px', marginBottom: '20px' }}>品質の再現性をつくる</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'スタッフの能力差に左右されない接客基準づくり',
                    '新人が迷わない育成ステップの明確化（マニュアル整備）',
                    'マネージャー／リーダー育成：スタッフの個人差をならす仕組みづくり'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '30px', background: 'rgba(255, 255, 255, 0.7)', padding: '24px', borderRadius: '12px', border: '2px solid var(--gold)', borderLeft: '4px solid var(--forest-green)' }}>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-dark)', fontWeight: '600' }}>
                誰が入っても同じ"感じの良さ"が再現できる状態をつくります。
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-dark)', marginTop: '10px' }}>
                属人化をなくし、店舗の世界観と品質を安定させるための基盤づくりです。
              </p>
            </div>
          </div>
        </section>

        {/* 10. サービス詳細④ - Communication / Relationship */}
        <section id="page-9" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '60px 40px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--forest-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>4</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>Communication / Relationship</h2>
            <GoldUnderline />

            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '20px' }}>ゲストとの関係を育てる（リピーターづくり）</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '予約〜来店〜退店後まで一貫した体験の流れをつくる',
                    '初来店・常連に合わせた声かけやご案内の工夫',
                    '期待感を高める情報発信（SNS／メール／メニュー説明）',
                    'ゲストが安心して任せられるコミュニケーション設計'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '18px', background: 'var(--beige-dark)', padding: '16px', borderRadius: '8px', border: '2px solid rgba(212, 163, 115, 0.3)' }}>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-dark)', fontStyle: 'italic' }}>
                    初めての方にも常連の方にも、「また来たい」と思ってもらえる体験を整えます。
                  </p>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--forest-green)', marginTop: '28px', marginBottom: '20px' }}>スタッフ間のコミュニケーション強化</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '言葉遣い・トーンの統一',
                    '引き継ぎや共有の仕組みづくり',
                    '情報が曖昧にならないための連携ルール',
                    'スタッフの判断が揃う"共通言語"づくり'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '16px', background: 'var(--beige-dark)', padding: '16px', borderRadius: '8px', border: '2px solid rgba(212, 163, 115, 0.3)' }}>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-dark)', fontStyle: 'italic' }}>
                    スタッフ同士の連携がスムーズになり、サービスの質が安定します。
                  </p>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '20px' }}>生産者・地域とつながる関係性づくり</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '生産者のストーリーを自然に紹介できる仕組み',
                    '地域やコミュニティとの協働の土台づくり',
                    'お客様の「物語」を大切にする姿勢',
                    '店の活動が生産者・地域に還元されていく循環づくり'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--forest-green)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '18px', background: 'var(--beige-dark)', padding: '16px', borderRadius: '8px', border: '2px solid rgba(212, 163, 115, 0.3)' }}>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-dark)', fontStyle: 'italic' }}>
                    "料理の背景" と "地域の力" が伝わり、店の価値が深まり続ける関係性をつくります。
                  </p>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--forest-green)', marginTop: '28px', marginBottom: '20px' }}>背景を語れる店づくり（まとめ）</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.9', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '料理の背景・生産者の想いを言葉にする',
                    '地域とのつながりを見える形で発信する',
                    '「この店で過ごす意味」をお客様に届ける'
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '1.2rem', lineHeight: '1.5' }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '18px', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '8px', border: '2px solid var(--gold)' }}>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-dark)', fontWeight: '600', textAlign: 'center' }}>
                    店の個性と世界観が伝わり、ファンが育つ状態へ。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. 実施プロセス */}
        <section id="page-10" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1300px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>実施プロセス</h2>
            <GoldUnderline />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginTop: '70px' }}>
              {[
                { num: '1', title: 'ヒアリング', subtitle: '現状・想いの把握', desc: 'まずはお店の現状や、経営者・スタッフの皆さまが大切にしている想いを丁寧に伺います。' },
                { num: '2', title: '現場視察・体験分析', subtitle: '強みと改善点を具体化', desc: '実際に店舗を訪問し、サービス、空間、お客様体験を多角的に分析します。' },
                { num: '3', title: '改善提案・研修設計', subtitle: '店"らしさ"を軸に再現可能な型へ', desc: '形式的なマニュアルではなく、貴店ならではの"らしさ"が伝わる行動基準を設計します。' },
                { num: '4', title: '実施・フォロー', subtitle: '定着支援と再評価', desc: '研修後のフォローを通じて、習慣化とチームの行動変化をサポートします。' }
              ].map((step) => (
                <div key={step.num} style={{ textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--forest-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 'bold', margin: '0 auto 20px' }}>{step.num}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '15px', fontWeight: '500' }}>{step.subtitle}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dark)', lineHeight: '1.7', background: 'rgba(255,255,255,0.5)', padding: '15px', borderRadius: '8px', minHeight: '120px' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. 料金プラン */}
        <section id="page-11" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>料金・期間の目安</h2>
            <GoldUnderline />
            <p style={{ textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-gray)', marginTop: '25px' }}>
              お客様のニーズや店舗規模に合わせて、最適なサポートプランをご提案いたします。
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '50px' }}>
              {[
                {
                  name: 'スポットトレーニング',
                  price: '¥30,000〜',
                  duration: '1回（約2時間）',
                  highlight: false,
                  details: [
                    '現状の課題や目標をヒアリングし、改善ポイントを整理',
                    '店舗の特徴に合った接客・サービス改善案の提示',
                    '所作/声の使い方/提供順など"再現しやすい型"のミニレクチャー',
                    '課題テーマに応じた短時間のトレーニング'
                  ],
                  note: 'まずは気になる部分から整えてまいります。'
                },
                {
                  name: '終日サポート',
                  price: '¥100,000',
                  duration: '1日（約8時間）/ 回',
                  highlight: true,
                  details: [
                    '営業中のサービス現場に同席し、リアルタイムでフィードバック',
                    'ホール動線・提供の流れ・チーム連携のチェック',
                    'オペレーション構築のアドバイス/改善案',
                    '特別な場面（VIP対応・イベント）の事前準備から当日の最適化まで'
                  ],
                  note: '実際の現場において成功に導くための支援をいたします。'
                },
                {
                  name: 'チーム育成サポート',
                  price: '¥200,000〜400,000',
                  duration: '月額制（4〜6回の訪問）',
                  highlight: false,
                  details: [
                    '定期的な研修・コーチングで着実なスキルアップを支援',
                    '営業日の実践指導で"現場で使える力"を育成',
                    '振り返りと改善提案を通じて、サービス品質を継続的に向上',
                    '中長期的な組織成長・サービス文化づくり'
                  ],
                  note: '現場の力を底上げし、組織の"サービス文化"が根づく状態を目指します。'
                }
              ].map((plan, index) => (
                <div key={index} style={{ border: plan.highlight ? '3px solid var(--gold)' : '2px solid #ddd', borderRadius: '12px', padding: '30px 20px', background: 'white', textAlign: 'center', position: 'relative', transform: plan.highlight ? 'scale(1.05)' : 'scale(1)', boxShadow: plan.highlight ? '0 8px 24px rgba(0,0,0,0.15)' : 'none' }}>
                  {plan.highlight && <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: 'white', padding: '5px 20px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>おすすめ</div>}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '20px', color: 'var(--text-dark)' }}>{plan.name}</h3>
                  <p style={{ fontSize: '2.3rem', fontWeight: 'bold', color: 'var(--gold)', marginBottom: '8px' }}>{plan.price}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginBottom: '25px' }}>{plan.duration}</p>
                  <div style={{ borderTop: '2px solid var(--gold)', paddingTop: '20px', fontSize: '0.8rem', color: 'var(--text-dark)', textAlign: 'left', lineHeight: '1.7' }}>
                    {plan.details.map((detail, i) => (
                      <p key={i} style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--forest-green)', flexShrink: 0 }}>◆</span>
                        <span>{detail}</span>
                      </p>
                    ))}
                    <div style={{ marginTop: '15px', padding: '15px', background: 'var(--beige)', borderRadius: '6px', borderLeft: '3px solid var(--forest-green)' }}>
                      <p style={{ fontSize: '0.75rem', lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-dark)' }}>{plan.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-gray)', marginTop: '40px' }}>
              ※ 料金は店舗規模や内容により調整いたします。まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* 13. 年間スケジュール（例） */}
        <section id="page-12" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1400px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>年間スケジュール（例）</h2>
            <GoldUnderline />

            <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* タイムライン */}
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr 1fr', gap: '0', borderBottom: '3px solid var(--forest-green)' }}>
                <div style={{ padding: '15px 20px', background: 'var(--forest-green)', color: 'white', fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}></div>
                <div style={{ padding: '15px 20px', background: 'var(--forest-green)', color: 'white', fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', borderLeft: '2px solid white' }}>開始〜3ヶ月</div>
                <div style={{ padding: '15px 20px', background: 'var(--forest-green)', color: 'white', fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', borderLeft: '2px solid white' }}>4〜6ヶ月</div>
                <div style={{ padding: '15px 20px', background: 'var(--forest-green)', color: 'white', fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', borderLeft: '2px solid white' }}>6〜8ヶ月</div>
                <div style={{ padding: '15px 20px', background: 'var(--forest-green)', color: 'white', fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', borderLeft: '2px solid white' }}>9〜12ヶ月</div>
              </div>

              {/* Service Hospitality */}
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr 1fr', gap: '0', borderBottom: '2px solid rgba(61, 90, 60, 0.2)' }}>
                <div style={{ padding: '20px', background: 'rgba(61, 90, 60, 0.1)', fontWeight: '600', fontSize: '0.95rem', display: 'flex', alignItems: 'center', borderRight: '2px solid rgba(61, 90, 60, 0.2)' }}>Service<br/>Hospitality</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>所作・立ち振る舞いの確認<br/>課題抽出<br/>サービスの基準設定</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>接客研修（言葉遣い/所作）<br/>ロールプレイ/フィードバックの設定<br/>来店メソッドによる体験検証</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>サービスクオリティの再現性<br/>チェックシート作成<br/>ロールプレイの習慣化</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)' }}>スタッフが教えられる状態へ<br/>チーム内サービストレーナー育成<br/>内製化の完成</div>
              </div>

              {/* Culture Identity */}
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr 1fr', gap: '0', borderBottom: '2px solid rgba(61, 90, 60, 0.2)' }}>
                <div style={{ padding: '20px', background: 'rgba(61, 90, 60, 0.1)', fontWeight: '600', fontSize: '0.95rem', display: 'flex', alignItems: 'center', borderRight: '2px solid rgba(61, 90, 60, 0.2)' }}>Culture<br/>Identity</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>世界観・哲学の言語化<br/>サービススタンダードの骨組み作成<br/>コミュニケーションライン構築</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>価値観共有/浸透<br/>サービス哲学（"らしさ"）の言語化<br/>文化共有ミーティング設計</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>文化共有ミーティング実施<br/>スタッフ浸透支援<br/>体験への世界観落とし込み</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)' }}>自走状態へ移行<br/>世界観が"人"を通して再現されているかのチェック機構<br/>自走文化の土台づくり</div>
              </div>

              {/* Operation Team Support */}
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr 1fr', gap: '0', borderBottom: '2px solid rgba(61, 90, 60, 0.2)' }}>
                <div style={{ padding: '20px', background: 'rgba(61, 90, 60, 0.1)', fontWeight: '600', fontSize: '0.95rem', display: 'flex', alignItems: 'center', borderRight: '2px solid rgba(61, 90, 60, 0.2)' }}>Operation<br/>Team Support</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>現場動線と業務負荷の確認<br/>ピーク時の流れ分析<br/>チームミーティング設計</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>負担偏りを防ぐオペレーション再設計<br/>動線改善/配置見直し<br/>仕組み・チェックリスト整備</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>マネージャー/リーダー育成支援<br/>改善サイクルの確立<br/>日々の振り返りの習慣化</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)' }}>現場運営を任せる段階へ<br/>自走改善が行われる仕組みへ<br/>内部サイクルの安定化</div>
              </div>

              {/* Communication Relationship */}
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr 1fr', gap: '0', borderBottom: '2px solid rgba(61, 90, 60, 0.2)' }}>
                <div style={{ padding: '20px', background: 'rgba(61, 90, 60, 0.1)', fontWeight: '600', fontSize: '0.95rem', display: 'flex', alignItems: 'center', borderRight: '2px solid rgba(61, 90, 60, 0.2)' }}>Communication<br/>Relationship</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>顧客体験構築の整理<br/>予約・来店・退店フロー<br/>言葉・トーンの分析</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>言葉・トーン・伝え方の統一<br/>SNS/メニュー/メールの表現整備<br/>リレーション設計</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)', borderRight: '1px solid rgba(61, 90, 60, 0.1)' }}>リレーション&コミュニティ構築<br/>生産者/地域とのストーリー接続<br/>顧客理解の強化</div>
                <div style={{ padding: '15px', fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-dark)' }}>自然な紹介/リピート発生の仕組み完成<br/>コミュニティ形成<br/>生産者/地域との循環構築</div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. サービス事例・口コミ */}
        <section id="page-13" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '60px 40px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1300px', width: '100%' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>サービス事例・お客様の声</h2>
            <GoldUnderline />

            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '35px' }}>
              {/* サービス事例 */}
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px', textAlign: 'center', borderBottom: '3px solid var(--gold)', paddingBottom: '12px' }}>サービス事例</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    {
                      category: '高級レストラン',
                      title: 'ミシュラン三つ星レストランの運営体制構築',
                      desc: '支配人として6年間、サービス品質の向上と組織文化の浸透を統括。スタッフ育成プログラムの設計により、一貫した顧客体験を実現。グリーンスター獲得を含む持続可能な運営体制を確立しました。',
                      tag: '組織開発'
                    },
                    {
                      category: 'リゾートホテル',
                      title: 'ホテル料飲部門の統括マネジメント',
                      desc: 'ラウンジ、イタリアン、レストランの3部門を統括し、サービス基準の統一と効率化を実現。スタッフ教育体系の整備により、顧客満足度とリピート率が大幅に向上しました。',
                      tag: 'マネジメント'
                    },
                    {
                      category: '新規開業店',
                      title: 'スペインバル立ち上げ・店長就任',
                      desc: '新規開業のスペインバルにて、コンセプト設計からオペレーション構築、スタッフ採用・育成まで一貫して担当。幅広い顧客層に対応できる柔軟な接客体制を確立しました。',
                      tag: '開業支援'
                    }
                  ].map((item, index) => (
                    <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '2px solid rgba(61, 90, 60, 0.1)', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: '-12px', left: '20px', background: 'var(--forest-green)', color: 'white', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold' }}>{item.tag}</div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginBottom: '6px', marginTop: '5px' }}>{item.category}</p>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '10px', lineHeight: '1.5' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.87rem', color: 'var(--text-dark)', lineHeight: '1.7' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* お客様の声 */}
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '25px', textAlign: 'center', borderBottom: '3px solid var(--gold)', paddingBottom: '12px' }}>お客様の声</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    {
                      name: 'A様',
                      role: 'レストランオーナー',
                      comment: '川畑さんの指導で、スタッフの意識が劇的に変わりました。形式的なマニュアルではなく、「なぜそうするのか」を理解させる手法が素晴らしく、自分で考えて動けるチームになりました。'
                    },
                    {
                      name: 'B様',
                      role: 'ホテル支配人',
                      comment: '茶道の所作を取り入れた研修は目から鱗でした。立ち姿、手の動き、間の取り方まで、すべてに意味があることを学び、お客様からの評価も明らかに向上しています。'
                    },
                    {
                      name: 'C様',
                      role: 'カフェ経営者',
                      comment: '開業前の相談から親身に対応していただきました。お店のコンセプト整理から、実際のオペレーション設計まで、現場目線でアドバイスいただけたことで、スムーズな立ち上げができました。'
                    },
                    {
                      name: 'D様',
                      role: '料理長',
                      comment: 'サービスとキッチンの連携がうまくいかず悩んでいましたが、川畑さんの組織開発支援により、チーム全体の一体感が生まれました。今では互いをリスペクトし合える関係性が築けています。'
                    }
                  ].map((item, index) => (
                    <div key={index} style={{ background: 'linear-gradient(135deg, rgba(248, 245, 242, 1) 0%, rgba(255, 255, 255, 1) 100%)', padding: '18px', borderRadius: '10px', border: '2px solid rgba(212, 163, 115, 0.3)', borderLeft: '4px solid var(--gold)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <div>
                          <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>{item.name}</p>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>{item.role}</p>
                        </div>
                        <div style={{ color: 'var(--gold)', fontSize: '1.3rem' }}>★★★★★</div>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-dark)', lineHeight: '1.7', fontStyle: 'italic' }}>
                        "{item.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 15. お問い合わせ */}
        <section id="page-14" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '60px 40px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>お問い合わせ</h2>
            <GoldUnderline />

            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {/* お問い合わせフォーム */}
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '3px solid var(--gold)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--forest-green)', marginBottom: '20px', textAlign: 'center' }}>お問い合わせフォーム</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>
                      お名前 <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.95rem',
                        border: '2px solid rgba(61, 90, 60, 0.2)',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest-green)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(61, 90, 60, 0.2)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>
                      メールアドレス <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.95rem',
                        border: '2px solid rgba(61, 90, 60, 0.2)',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest-green)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(61, 90, 60, 0.2)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.95rem',
                        border: '2px solid rgba(61, 90, 60, 0.2)',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest-green)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(61, 90, 60, 0.2)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>
                      お問い合わせ内容 <span style={{ color: 'red' }}>*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.95rem',
                        border: '2px solid rgba(61, 90, 60, 0.2)',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest-green)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(61, 90, 60, 0.2)'}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: 'white',
                      background: 'var(--gold)',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      marginTop: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--gold-dark)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 163, 115, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--gold)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    送信する
                  </button>
                </form>
              </div>

              {/* 連絡先情報 */}
              <div>
                <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '3px solid var(--forest-green)', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '10px', color: 'var(--forest-green)' }}>川畑 和弘</h3>
                  <p style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--text-gray)', marginBottom: '20px' }}>Service Hospitality Trainer</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: '1.2rem' }}>📱</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: '500' }}>Mobile: </span>
                        <a href="tel:090-1035-8186" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>090-1035-8186</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: '1.2rem' }}>✉️</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: '500' }}>Mail: </span>
                        <a href="mailto:info@kawabata-service.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>info@kawabata-service.com</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: '1.2rem' }}>📍</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: '500' }}>Office: </span>
                        <span>〒212-0054 神奈川県川崎市幸区小倉2-31-15 Villa Blanche 508</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.7)', padding: '24px', borderRadius: '12px', border: '2px solid var(--gold)', borderLeft: '4px solid var(--forest-green)' }}>
                  <p style={{ fontSize: '0.95rem', textAlign: 'center', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                    サービス向上や組織づくりに関するご相談は、どうぞ気軽にお声がけください。<br />
                    お店に寄り添いながら、より良い未来づくりをお手伝いいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
