const net = require('net')
const tls = require('tls')
const url = require('url')
const http = require('http')
const agent = require('agent-base')
const HttpProxyAgent = require('http-proxy-agent')

const debug = require('debug')('proxy')

const proxy = 'http://10.5.50.77:8020'
const endpoint = 'http://nodejs.org/api/'
const opts = url.parse(endpoint)


// parsed.agent = agent((req, opts) => {
//   let socket
//   // `secureEndpoint` is true when using the https module
//   if (opts.secureEndpoint) {
//     socket = tls.connect(opts)
//   } else {
//     socket = net.connect(opts)
//   }
//   return socket
// })

opts.agent = new HttpProxyAgent(proxy)

http.get(opts, (res) => {
  debug('res headers', res.headers)
})