module.exports = appHTML => (
  `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <div id="app">${appHTML}</div>
  </body>
  <script src="/public/js/main.js"></script>
  </html>
  `
);
