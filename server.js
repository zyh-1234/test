const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
  '/api': {
    target: 'http://localhost:3000/api/',
    pathRewrite: {
      '^/api': '/',
    },
    changeOrigin: true,
  },
}

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
})
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }

    server.post('/upload', (req) => {
      console.log(req.body.json())
    })

    server.all('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server')
    console.log('发生错误，无法启动服务器')
    console.log(err)
  })
