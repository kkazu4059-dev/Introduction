export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', color: '#333' }}>
      {/* ヒーローセクション */}
      <section style={{ backgroundColor: '#f8f5f2', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>レストランの未来を、共に創る。</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>現場主義のレストランコンサルタント</p>
        <button style={{ backgroundColor: '#d4a373', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
          無料相談はこちら
        </button>
      </section>

      {/* サービス紹介 */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', borderBottom: '2px solid #d4a373', paddingBottom: '10px' }}>Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div style={{ border: '1px solid #eee', padding: '20px' }}>
            <h3>メニュー開発</h3>
            <p>原価率を抑えつつ、お客様に選ばれる看板メニューを提案します。</p>
          </div>
          <div style={{ border: '1px solid #eee', padding: '20px' }}>
            <h3>オペレーション改善</h3>
            <p>無駄のない動線設計で、少人数でも回る現場作りをサポートします。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
