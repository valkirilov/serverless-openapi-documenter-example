import { APIGatewayProxyEvent } from 'aws-lambda'

export type RequestEvent<TBody, TPath> = APIGatewayProxyEvent & {
    headers: {
        Authorization: string
        account_id: string // TODO: Not sure about that, maybe we can remove it and simplify the request?
    }
    body?: TBody
    pathParameters?: TPath
}

