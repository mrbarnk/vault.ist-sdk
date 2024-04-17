import { ApiClient } from "..";

interface IAuth {
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

// Auth Container
export class Auth extends ApiClient {

    async createAccount(data: { phone: string; password: string }): Promise<any> {
        return this.sendRequest('POST', '/v2/mobile/signup', data);
    }

    async verifyPhone(data: { phone: string; smsCode: string }): Promise<IAuth['signIn']> {
        return this.sendRequest('POST', '/v2/mobile/phone/confirm', data);
    }

    async resendOtp(phone: string): Promise<IAuth['resendCode']> {
        return this.sendRequest('POST', '/v2/mobile/phone/verify/resend', { phone });
    }

    async addEmail(data: { email: string }): Promise<IAuth['addEmail']> {
        return this.sendRequest('POST', '/v2/mobile/email/add', data);
    }

    async confirmEmail(data: { email: string, event: string, token: string }): Promise<IAuth['confirmEmail']> {
        return this.sendRequest('GET', '/v2/mobile/email/confirm', data);
    }

    async signIn(data: { password: string, number: string; grant_type: 'mobile_phone' | 'email' }): Promise<IAuth['signIn']> {
        return this.sendRequest('POST', '/oauth/token', data, {
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    }

    async signOut(): Promise<IAuth['signOut']> {
        return this.sendRequest('POST', '/signout');
    }
}