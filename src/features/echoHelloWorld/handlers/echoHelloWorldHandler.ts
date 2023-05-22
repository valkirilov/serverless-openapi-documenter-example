import { EchoHelloWorldCommand } from '../commands/EchoHelloWorldCommand'
import { RequestEvent } from '../../../types/types'
import { EchoHelloWorldRequest, EchoHelloWorldResponse } from '../types/echoHelloWorld'

export default async function echoHelloWorldHandler(
    event: RequestEvent<null, EchoHelloWorldRequest>
): Promise<EchoHelloWorldResponse> {
    const { pathParameters } = event

    return EchoHelloWorldCommand.execute(pathParameters)
}
