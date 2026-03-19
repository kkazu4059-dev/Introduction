# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start

# Lint
npm run lint

# Amplify ローカルサンドボックス（バックエンド開発用）
npx ampx sandbox
```

## Architecture

**Next.js 14 (App Router) + AWS Amplify Gen2** のポートフォリオサイト。

### フロントエンド

- `app/layout.tsx` - ルートレイアウト。Google Analytics（`NEXT_PUBLIC_GA_ID`）と Noto Sans JP フォントを設定
- `app/page.tsx` - メインページ（`'use client'`）。単一ファイルに全セクションを実装したSPA的構成
  - ページは配列 `pages[]` で管理（hero, vision, profile, career, strengths, services, service-detail-x4, process, pricing, cases, schedule, contact）
  - `isMobile`（768px未満）でレスポンシブ切り替え
  - `scrollToPage()` でスムーススクロールナビゲーション
- `app/globals.css` - CSS変数定義（`--forest-green`, `--gold` など）
- スタイリングは CSS-in-JS（インラインスタイル）と globals.css の CSS変数を組み合わせて使用

### バックエンド（AWS Amplify Gen2）

- `amplify/backend.ts` - auth と data を登録するエントリポイント
- `amplify/auth/resource.ts` - Cognito 認証（メールログイン）
- `amplify/data/resource.ts` - AppSync GraphQL + DynamoDB（Todo モデル、APIキー認証）

### デプロイ

- AWS Amplify Hosting でデプロイ（`amplify.yml` で設定）
- バックエンドは `npx ampx pipeline-deploy` でデプロイ
- 環境変数 `NEXT_PUBLIC_GA_ID` を Amplify コンソールで設定

### 環境変数

| 変数名 | 用途 |
|--------|------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 測定ID |
