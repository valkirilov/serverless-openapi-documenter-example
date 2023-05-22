import { EchoHelloWorldRequest, EchoHelloWorldResponse } from '../types/echoHelloWorld'

export class EchoHelloWorldCommand {
    public static async execute(echoHelloWorldRequest: EchoHelloWorldRequest): Promise<EchoHelloWorldResponse> {
        const { name } = echoHelloWorldRequest

        return {
            message: `Hello world, ${name}!`,
        }
    }
}
