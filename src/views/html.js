module.exports = (appHTML, initialState, jsPath) => (
`<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link href='/public/css/main.css' rel='stylesheet' type='text/css' />
      <title>${initialState.title}</title>
    </head>
    <body>
      <div id="app">${appHTML}</div>
      <script>
        window.__GLOBAL_INITIAL_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
      </script>
      <script src="/public/js/${jsPath}"></script>
    </body>
  </html>`
)
