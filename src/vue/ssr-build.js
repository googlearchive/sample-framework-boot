const fs = require('fs')
const path = require('path')
const app = require('../../dist/vue/app.js')
const renderer = require('vue-server-renderer').createRenderer()
const SSRTemplate = fs.readFileSync(path.resolve(__dirname, 'ssr-template.html'), 'utf-8')

fs.createReadStream(path.resolve(__dirname, 'no-ssr.html'))
  .pipe(fs.createWriteStream(path.resolve(__dirname, '../../dist/vue/no-ssr.html')))

renderer.renderToString(app, (err, res) => {
  const output = SSRTemplate.replace('<!-- OUTPUT -->', res)
  fs.writeFileSync(path.resolve(__dirname, '../../dist/vue/ssr.html'), output)
})
