module.exports = (appHTML, initialState) => (
  `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href='/public/css/main.css' rel='stylesheet' type='text/css' />
    <title>${initialState.title}</title>
  </head>
  <body>
    <div id="app">${appHTML}</div>
  </body>
  <script>
    window.__GLOBAL_INITIAL_STATE__ = ${JSON.stringify(initialState)}
  </script>
  <script src="/public/js/main.js"></script>
  </html>
  `
);
