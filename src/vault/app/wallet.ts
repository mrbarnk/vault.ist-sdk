import { ApiClient } from "..";
import { IWallet } from "../interfaces/wallet";

// Wallet Container
export class Wallet extends ApiClient {
    async createWallet(data: { currencies: string[] }): Promise<IWallet['createWallet']> {
        return this.sendRequest('POST', '/v2/wallets', data);
    }

    async getWallet(): Promise<IWallet['createWallet']> {
        return this.sendRequest('GET', '/v2/wallets');
    }


    async getHistory(): Promise<any> {
        return this.sendRequest('GET', '/v2/history/operations');
    }

    async sendWallet(data: {
        fee: number,
        phone: string;
        amount: number;
        address: string;
        currency: string;
    }): Promise<IWallet['sendCoin']> {
        return this.sendRequest('POST', '/v1/wallet/send', data);
    }

    async validateSend(data: {
        phone: string;
        amount: string;
        address: string;
        currency: string;
    }): Promise<IWallet['validateSend']> {
        return this.sendRequest('POST', '/v1/wallet/send/validate', data);
    }
}