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
                <div style={{ width: '280px', height: '330px', background: '#ccc', borderRadius: '4px' }} />
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
                { num: '1', title: 'Service / Hospitality', subtitle: '技術と心の両輪を整える', desc: '言葉遣い・声の温度・間の使い方、所作・立ち姿・手の動きなど、茶道の身体技法を応用したサービス体系の構築と実践。' },
                { num: '2', title: 'Culture / Identity', subtitle: '存在理由を言語化し、文化を浸透', desc: 'ミッション・ビジョンの整理、価値観にもとづく判断基準の設定。店の哲学を共有し、自走する組織へと導きます。' },
                { num: '3', title: 'Operation / Team Support', subtitle: '動線と役割を最適化し再現性を確保', desc: '作業の重複・無駄を減らす配置設計、役割分担の明確化、品質チェック体制の構築。効率と品質の両立を実現します。' },
                { num: '4', title: 'Communication / Relationship', subtitle: '体験前後まで設計し、関係性を育てる', desc: '予約〜退店後までの体験設計、言葉のトーン統一、自然な紹介・再訪につながる接点づくり。地域・生産者との共創を促進します。' }
              ].map((service) => (
                <div key={service.num} style={{ border: '2px solid rgba(61, 90, 60, 0.2)', borderRadius: '8px', padding: '30px', background: 'white' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--forest-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>{service.num}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)', fontWeight: '500', marginBottom: '15px' }}>{service.subtitle}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7-10. サービス詳細ページ（スキップ可能） */}
        {/* 簡略化のため省略 */}
        <section id="page-6" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)' }}>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-gray)' }}>サービス詳細①</p>
        </section>
        <section id="page-7" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)' }}>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-gray)' }}>サービス詳細②</p>
        </section>
        <section id="page-8" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)' }}>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-gray)' }}>サービス詳細③</p>
        </section>
        <section id="page-9" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)' }}>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-gray)' }}>サービス詳細④</p>
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
                { name: 'スポットトレーニング', price: '¥30,000〜', duration: '1回（約2時間）', highlight: false },
                { name: '終日サポート', price: '¥100,000', duration: '1日（約8時間）/ 回', highlight: true },
                { name: 'チーム育成サポート', price: '¥200,000〜400,000', duration: '月額制（4〜6回の訪問）', highlight: false }
              ].map((plan, index) => (
                <div key={index} style={{ border: plan.highlight ? '3px solid var(--gold)' : '2px solid #ddd', borderRadius: '12px', padding: '35px 25px', background: 'white', textAlign: 'center', position: 'relative', transform: plan.highlight ? 'scale(1.05)' : 'scale(1)', boxShadow: plan.highlight ? '0 8px 24px rgba(0,0,0,0.15)' : 'none' }}>
                  {plan.highlight && <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: 'white', padding: '5px 20px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>おすすめ</div>}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '25px', color: 'var(--text-dark)' }}>{plan.name}</h3>
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--gold)', marginBottom: '10px' }}>{plan.price}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '30px' }}>{plan.duration}</p>
                  <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', fontSize: '0.85rem', color: 'var(--text-dark)', textAlign: 'left', lineHeight: '1.8' }}>
                    <p>詳細はお問い合わせください</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-gray)', marginTop: '40px' }}>
              ※ 料金は店舗規模や内容により調整いたします。まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* 13. お問い合わせ */}
        <section id="page-12" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', scrollSnapAlign: 'start', background: 'var(--beige)', padding: '80px 60px' }}>
          <CornerBoxes />
          <div style={{ maxWidth: '900px', width: '100%' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>お問い合わせ</h2>
            <GoldUnderline />
            <div style={{ marginTop: '60px', border: '3px solid var(--gold)', borderRadius: '12px', padding: '50px', background: 'white' }}>
              <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '10px', color: 'var(--forest-green)' }}>川畑 和弘</h3>
              <p style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--text-gray)', marginBottom: '40px' }}>Service Hospitality Trainer</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1rem', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.2rem' }}>📱</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: '500' }}>Mobile: </span>
                    <a href="tel:090-1035-8186" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>090-1035-8186</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.2rem' }}>✉️</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: '500' }}>Mail: </span>
                    <a href="mailto:info@kawabata-service.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>info@kawabata-service.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.2rem' }}>📍</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: '500' }}>Office: </span>
                    <span>〒212-0054 神奈川県川崎市幸区小倉2-31-15 Villa Blanche 508</span>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: '2px solid var(--gold)', paddingTop: '30px', borderLeft: '4px solid var(--forest-green)', paddingLeft: '20px', background: 'var(--beige)', padding: '25px' }}>
                <p style={{ fontSize: '0.95rem', textAlign: 'center', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                  サービス向上や組織づくりに関するご相談は、どうぞ気軽にお声がけください。<br />
                  お店に寄り添いながら、より良い未来づくりをお手伝いいたします。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
