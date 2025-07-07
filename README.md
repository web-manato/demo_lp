# 小説執筆ツール デモページ

## 概要

このプロジェクトは、小説執筆を効率化するためのWebデモページです。レスポンシブデザインに対応し、モダンな UI/UX を提供します。

## 特徴

- **レスポンシブデザイン**: PC・タブレット・スマートフォンに対応
- **モダンなアニメーション**: GSAP を使用したスムーズなアニメーション
- **セマンティック HTML**: アクセシビリティに配慮したマークアップ
- **SASS/SCSS**: 効率的な CSS 管理（@use 構文使用）
- **（※お問い合わせフォーム/PHPは本リポジトリには含まれていません）**

## 技術スタック

### フロントエンド

- **HTML5**: セマンティックなマークアップ
- **CSS3/SASS**: モダンなスタイリング（@use 構文使用）
- **JavaScript (ES6+)**: モジュール形式でのインタラクティブ機能
- **GSAP**: アニメーションライブラリ

### フォント

- **Lato**: 英語テキスト用
- **Noto Sans JP / Noto Serif JP**: 日本語テキスト用

## プロジェクト構造

```
demo_lp/
├── index.html                # メインページ
├── css/                      # コンパイル済みCSS
│   ├── styles.css            # メインCSS
│   ├── styles.css.map        # ソースマップ
│   ├── styles.min.css        # 圧縮版CSS
│   └── styles.min.css.map    # 圧縮版ソースマップ
├── sass/                     # SASS/SCSSファイル
│   ├── styles.scss           # メインSASSファイル（@use構文）
│   ├── _variable.scss        # 変数定義
│   ├── _mixin.scss           # ミックスイン
│   ├── _header.scss          # ヘッダー関連スタイル
│   ├── _footer.scss          # フッター関連スタイル
│   ├── _common.scss          # 共通スタイル
│   ├── _index.scss           # メインページスタイル
│   └── _404.scss             # 404ページスタイル
├── js/                       # JavaScriptファイル（ES6モジュール）
│   ├── main.js               # メインJSファイル
│   ├── hamburger.js          # ハンバーガーメニュー
│   ├── fadeIn.js             # フェードインアニメーション
│   ├── kv_an.js              # キービジュアルアニメーション
│   └── cta_an.js             # CTAアニメーション
├── img/                      # 画像ファイル（最適化済み）
│   ├── pc_feature_img-2500px.png
│   ├── pc_feature_img-3000px.png
│   ├── pc_feature_img-3500px.png
│   ├── pc_feature_img-2500px.png.webp
│   ├── pc_feature_img-3000px.png.webp
│   ├── pc_feature_img-3500px.png.webp
│   ├── sp_feature_img-1000px.png
│   ├── sp_feature_img-1500px.png
│   ├── sp_feature_img-2000px.png
│   ├── sp_feature_img-1000px.png.webp
│   ├── sp_feature_img-1500px.png.webp
│   ├── sp_feature_img-2000px.png.webp
│   ├── pc_header_logo.svg
│   ├── sp_header_logo.svg
│   ├── pc_footer_logo.svg
│   ├── sp_footer_logo.svg
│   ├── sp_kv_bgImg.svg
│   ├── feature_ico.svg
│   ├── feature_ico2.svg
│   ├── feature_ico3.svg
│   ├── feature_ico4.svg
│   └── ...

```

## セクション構成

1. **ヘッダー**: ナビゲーションメニュー（ハンバーガーメニュー対応）
2. **キービジュアル**: メインビジュアルとキャッチコピー
3. **機能・特徴**: 小説執筆支援の各種機能紹介
4. **動画紹介**: YouTube埋め込みによる機能紹介
5. **プラン・料金**: 無料・有料プランの比較
6. **FAQ**: よくある質問
7. **CTA**: 無料体験の案内
8. **フッター**: サイト情報

## セットアップ

### 前提条件

- Web サーバー（静的HTMLで動作）
- Node.js（SASS コンパイル用、必要に応じて）

### インストール手順

1. リポジトリをクローン

```bash
git clone [repository-url]
cd demo_lp
```

2. 依存関係のインストール（SASS コンパイル用）

```bash
npm install -g sass
```

3. SASS ファイルのコンパイル

```bash
sass sass/styles.scss css/styles.css --style compressed
```

4. `index.html` をブラウザで開く

### 開発用コマンド

SASS ファイルの監視（自動コンパイル）:

```bash
sass --watch sass:css
```

## カスタマイズ

### 画像の変更

- `img/` フォルダ内の画像ファイルを置き換え
- ファイル名は既存の命名規則に従ってください

### 色やフォントの変更

- `sass/_variable.scss` で変数を編集
- `sass/_mixin.scss` で共通スタイルを編集

### コンテンツの変更

- `index.html` の各セクション内のテキストを編集
- 画像の alt 属性も適切に更新してください

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

このプロジェクトはデモ用です。商用利用の際は適切なライセンスを確認してください。

## 作者

まなと

## 更新履歴

詳細な更新履歴は[CHANGELOG.md](./CHANGELOG.md)をご確認ください。