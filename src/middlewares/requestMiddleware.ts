import { Callback } from 'aws-lambda'
import { HandlerLambda } from 'middy'

const isDevEnv = process.env.ENV === 'DEV'

export default function requestMiddleware() {
    return {
        before: (handler: HandlerLambda, next: Callback) => {
            console.info('Event object: ', handler.event)
            next()
        },
        after: (handler: HandlerLambda) => {
            if (handler.error) {
                return
            }

            const response = createSuccessfulResponse(handler.response)

            console.info('Response: ', response)
            return handler.callback(null, response)
        },
        onError: (handler: HandlerLambda) => {
            const error: any = handler.error
            console.error(handler.error)
            handler.callback(null, createErrorResponse(error.statusCode, error))
        },
    }
}

function createSuccessfulResponse(response: any) {
    return {
        statusCode: 200,
        body: JSON.stringify(response),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Content-type': 'application/json',
        },
    }
}

function createErrorResponse(statusCode: any, error: any) {
    return {
        statusCode,
        body: isDevEnv ? JSON.stringify(error) : 'Server Error',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
    }
}
