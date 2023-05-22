import addMiddlewares from '../../../middlewares'
import echoHelloWorldHandler from './echoHelloWorldHandler'

module.exports = {
    echoHelloWorldHandler: addMiddlewares(echoHelloWorldHandler),
}
