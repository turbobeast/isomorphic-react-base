module.exports = appHTML => (
  `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href='/public/css/main.css' rel='stylesheet' type='text/css' />
    <title></title>
  </head>
  <body>
    <div id="app">${appHTML}</div>
  </body>
  <script src="/public/js/main.js"></script>
  </html>
  `
);
