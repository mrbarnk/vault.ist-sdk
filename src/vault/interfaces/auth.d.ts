export interface IAuth {
    createAccount: {
        result: string
    };
    signIn: {
        access_token: string;
        token_type: 'bearer' | string;
        refresh_token: string;
        expires_in: number;
        scope: string;
        jti: string;
    },
    signOut: {

    },
    resendCode: {
        result: string;
        message: string;
        field: string;
        errorId: number;
        systemId: string
        originalMessage: string
        errorStackTrace: string
        data: {
            additionalProp1: object;
            additionalProp2: object;
            additionalProp3: object;
        }
        error: string;
    },
    addEmail: {
        result: string | 'ok'
    },
    confirmEmail: {
        result: string | 'ok'
    }
}