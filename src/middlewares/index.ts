import * as middy from 'middy'
const { jsonBodyParser } = require('middy/middlewares')

import requestMiddleware from './requestMiddleware'

export default function addMiddlewares(handler: any) {
    return middy(handler).use(jsonBodyParser()).use(requestMiddleware())
}
