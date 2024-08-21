import { ApiClient } from "..";
import { IPayOut } from "../interfaces/payout";



// Exchange Container
export class Payout extends ApiClient {

    async getRateAndCards(): Promise<IPayOut['getRatesAndCardData']> {
        return this.sendRequest('GET', '/v4/payout/data');
    }
    async addCard(data: {
        cardNumber: number;
        cardHolder: string;
        cardExpirationYear: number;
        cardExpirationMonth: number;
    }): Promise<IPayOut['addCard']> {
        return this.sendRequest('POST', '/v4/payout/card', data);
    }
    async createOffer(data: {
        cardId: number;
        fromCurrency: string;
        amount: number;
        toCurrency: string;
        operation: 'PAYIN'
    }): Promise<IPayOut['createOffer']> {
        return this.sendRequest('POST', '/v4/payout/offer', data);
    }
    async updateOffer(data: { offerId: number; currencyFrom: string; currencyTo: string; amountFrom: number; amountTo: number }): Promise<IPayOut['updateOffer']> {
        return this.sendRequest('PUT', `/v4/payout/offer/${data.offerId}`, data);
    }
    async activateOffer(data: { offerId: number, cardCVV?: string, successUrl?: string, fingerprint?: string }): Promise<IPayOut['executeOffer']> {
        return this.sendRequest('POST', `/v4/payout/pay/${data.offerId}`, data);
    }
}