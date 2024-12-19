# tekkotsu-joshi

このプロジェクトは、鐵骨女子 | 有限会社まるよし工業のウェブサイトです。

## プロジェクト構成

### メインファイル
- `index.html`: ウェブサイトのメインページ
- `scss/style.scss`: SCSSで記述されたスタイル定義
- `css/`: コンパイル済みのCSSファイル
- `js/`: JavaScriptファイル
- `img/`: 画像ファイル

### 設定ファイル
- `.stylelintrc.json`: Stylelintの設定（SCSSのコード品質管理）
- `.markuplintrc`: Markuplintの設定（HTMLの構文チェック）
- `.eslintrc.json`: ESLintの設定（JavaScriptのコード品質管理）
- `package.json`: プロジェクトの依存関係と設定
- `bs-config.js`: Browser-Syncの設定

### ユーティリティスクリプト
- `add-lazy-loading.js`: 画像の遅延読み込み設定
- `convert-images.js`: 画像変換ユーティリティ
- `replace-images.js`: 画像置換ユーティリティ

### その他
- `mail.php`: お問い合わせフォーム処理
- `robots.txt`: クローラー設定
- `sitemap.xml`: サイトマップ
- `favicon.ico`: ファビコン
- `ogp.jpg`: OGP画像

## 開発環境のセットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm start
```

## リンター・フォーマッター

コードの品質を維持するため、以下のリンターを使用しています：
- Stylelint: SCSSのコード品質チェック
- Markuplint: HTMLの構文チェック
- ESLint: JavaScriptのコード品質チェック

各リンターは対応する設定ファイルで管理されています。