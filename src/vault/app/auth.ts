import { ApiClient } from "..";
import { IAuth } from "../interfaces/auth";


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
        return this.sendRequest('PUT', '/v2/mobile/email/add', data);
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