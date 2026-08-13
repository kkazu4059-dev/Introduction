export type Testimonial = {
  name: string;
  role: string;
  comment: string;
};

export type CaseStudy = {
  slug: string;
  category: string;
  tag: string;
  title: string;
  summary: string;
  heroImage: string;
  challenge: string;
  approach: string;
  result: string;
  testimonial?: Testimonial;
  gallery?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'michelin-restaurant',
    category: '高級レストラン',
    tag: '組織開発',
    title: 'ミシュラン三つ星レストランの運営体制構築',
    summary: '支配人として6年間、サービス品質の向上と組織文化の浸透を統括。スタッフ育成プログラムの設計により一貫した顧客体験を実現。グリーンスター獲得を含む持続可能な運営体制を確立しました。',
    heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',
    challenge: 'ミシュラン三つ星という高い評価基準を維持しながら、スタッフ一人ひとりのサービス品質を均一に保つことが課題でした。属人的になりがちな接客の"型"を、誰もが再現できる形に落とし込む必要がありました。',
    approach: '支配人として、スタッフ育成プログラムを体系的に設計。技術面だけでなく、店の世界観や価値観を共有する仕組みを整え、組織文化として浸透させました。6年間にわたり、育成と現場運営の両輪で継続的に改善を重ねました。',
    result: '一貫した顧客体験を実現する運営体制を確立。持続可能な組織づくりが評価され、グリーンスター獲得にもつながりました。',
    gallery: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    ],
  },
  {
    slug: 'resort-hotel-management',
    category: 'リゾートホテル',
    tag: 'マネジメント',
    title: 'ホテル料飲部門の統括マネジメント',
    summary: 'ラウンジ、イタリアン、レストランの3部門を統括し、サービス基準の統一と効率化を実現。スタッフ教育体系の整備により、顧客満足度とリピート率が大幅に向上しました。',
    heroImage: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&q=80',
    challenge: 'ラウンジ、イタリアン、レストランという性格の異なる3部門を抱え、部門ごとにサービス基準や運営スタイルがばらつき、統一感のある顧客体験を提供できていないことが課題でした。',
    approach: '3部門を横断的に統括するマネジメント体制を構築。サービス基準を統一し、部門間の連携を強化。あわせてスタッフ教育体系を整備し、誰が対応しても一定水準のサービスを提供できる仕組みをつくりました。',
    result: '部門間のサービス品質のばらつきが解消され、運営の効率化を実現。顧客満足度とリピート率の大幅な向上につながりました。',
    testimonial: {
      name: 'B様',
      role: 'ホテル支配人',
      comment: '茶道の所作を取り入れた研修は目から鱗でした。立ち姿、手の動き、間の取り方まで、すべてに意味があることを学び、お客様からの評価も明らかに向上しています。',
    },
  },
  {
    slug: 'spanish-bar-opening',
    category: '新規開業店',
    tag: '開業支援',
    title: 'スペインバル立ち上げ・店長就任',
    summary: '新規開業のスペインバルにて、コンセプト設計からオペレーション構築、スタッフ採用・育成まで一貫して担当。幅広い顧客層に対応できる柔軟な接客体制を確立しました。',
    heroImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=80',
    challenge: '新規開業にあたり、コンセプトが明確でない中でオペレーションやスタッフ体制をゼロから構築する必要がありました。幅広い顧客層に対応できる柔軟な接客体制をどう実現するかも課題でした。',
    approach: '店長として、コンセプト設計から着手。それに基づきオペレーションを構築し、スタッフの採用・育成までを一貫して担当しました。多様な客層を想定した接客体制を、開業準備の段階から作り込みました。',
    result: '幅広い顧客層に対応できる柔軟な接客体制を確立し、新規開業を成功に導きました。',
    testimonial: {
      name: 'C様',
      role: 'カフェ経営者',
      comment: '開業前の相談から親身に対応していただきました。コンセプト整理から実際のオペレーション設計まで、現場目線でアドバイスいただけたことで、スムーズな立ち上げができました。',
    },
  },
];
