import { ApiClient } from "..";

interface IExchange {
    getCurrencies: {
        rate: number;
        currencyFrom: string;
        currencyTo: string;
        minAmountFrom: number;
        maxAmountFrom: number;
        minAmountTo: number;
        maxAmountTo: number;
        amountScaleFrom: number;
        amountScaleTo: number;
        lock: false,
        allAmountFrom: number;
        rateScale: number;
    }[]
    createOffer: {
        offerId: number;
        expirationDateTime: string;
        exchangeRate: number;
        validSeconds: number;
        sourceCurrencyAmount: {
            amount: number;
            currencyCode: string;
            targetCurrencyAmount: {
                amount: number;
                currencyCode: string;
            }
        }
    }
    updateOffer: {
        offerId: number;
        expirationDateTime: string;
        exchangeRate: number;
        validSeconds: number;
        sourceCurrencyAmount: {
            amount: number;
            currencyCode: string;
        }
        targetCurrencyAmount: {
            amount: number;
            currencyCode: string;
        }
    }
    activateOffer: {
        status: string;
        offerId: number;
    }
}

// Exchange Container
export class Exchange extends ApiClient {

    async getCurrencies(): Promise<IExchange['getCurrencies']> {
        return this.sendRequest('GET', '/v2/exchange/currencies');
    }
    async createOffer(data: {
        amountTo: number;
        amountFrom: number;
        currencyTo: string;
        currencyFrom: string;
    }): Promise<IExchange['createOffer']> {
        return this.sendRequest('POST', '/v1/mobile/exchange/offer', data);
    }
    async updateOffer(data: { offerId: number; currencyFrom: string; currencyTo: string; amountFrom: number; amountTo: number }): Promise<IExchange['updateOffer']> {
        return this.sendRequest('PUT', '/v2/wallets', data);
    }
    async activateOffer(data: { offerId: number }): Promise<IExchange['activateOffer']> {
        return this.sendRequest('PUT', '/v2/wallets', data);
    }
}