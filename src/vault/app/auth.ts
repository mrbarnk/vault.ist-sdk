import { ApiClient } from "..";
import { IAuth } from "../interfaces/auth";


// Auth Container
export class Auth extends ApiClient {

    async createAccount(data: { phone: string; password: string }): Promise<any> {
        return this.sendRequest('POST', '/v2/mobile/signup', data);
    }

    async verifyPhone(data: { phone: string; code: string }): Promise<IAuth['signIn']> {
        return this.sendRequest('POST', '/v2/mobile/phone/confirm', data);
    }


    async changePassword(currentPassword: string,
        newPassword: string): Promise<{ result: string }> {
        return this.sendRequest('put', '/v2/mobile/password/change', { currentPassword, newPassword });
    }

    async requestPasswordOTP(phone: string): Promise<{ result: string }> {
        return this.sendRequest('POST', '/v2/mobile/password/reset', { phone });
    }

    async confirmSMSCodeForNewPassword(phone: string, code: string): Promise<{ result: string }> {
        return this.sendRequest('POST', '/v2/mobile/password/reset/confirm/code', { phone, code });
    }
    async setNewPassword(phone: string, code: string, password: string): Promise<{
        access_token: string;
        token_type: string;
        refresh_token: string;
        expires_in: number;
        scope: string;
    }> {
        return this.sendRequest('POST', '/v2/mobile/password/reset/confirm', { phone, code, password });
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