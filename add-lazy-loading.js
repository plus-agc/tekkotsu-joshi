const fs = require("fs");
const path = require("path");

// 対象とするHTMLファイルが存在するディレクトリ
const htmlDir = "."; // カレントディレクトリ

// ディレクトリ内のすべてのHTMLファイルを取得
fs.readdir(htmlDir, (err, files) => {
  if (err) {
    console.error("ディレクトリの読み込みエラー:", err);
    return;
  }

  // 拡張子が .html のファイルをフィルタリング
  const htmlFiles = files.filter((file) => path.extname(file) === ".html");

  if (htmlFiles.length === 0) {
    console.log("HTMLファイルが見つかりません。");
    return;
  }

  // 各HTMLファイルに対して処理を実行
  htmlFiles.forEach((file) => {
    const filePath = path.join(htmlDir, file);

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`ファイル読み込みエラー: ${file}`, err);
        return;
      }

      // 既に loading 属性が付与されている <img> タグを除外して処理
      const updatedData = data.replace(
        /<img(?![^>]*\bloading\b)([^>]*)>/gi,
        '<img loading="lazy"$1>'
      );

      // 変更をファイルに書き戻す
      fs.writeFile(filePath, updatedData, "utf8", (err) => {
        if (err) {
          console.error(`ファイル書き込みエラー: ${file}`, err);
        } else {
          console.log(`${file} に loading="lazy" を付与しました。`);
        }
      });
    });
  });
});
