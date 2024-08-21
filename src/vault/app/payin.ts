import { ApiClient } from "..";
import { IPayIn } from "../interfaces/payin";



// Exchange Container
export class PayIn extends ApiClient {

    async getFiatRates(): Promise<IPayIn['getFiatRate']> {
        return this.sendRequest('GET', '/v3/payin/fiat-rates');
    }

    async getRateAndCards(): Promise<IPayIn['getRatesAndCardData']> {
        return this.sendRequest('GET', '/v3/payin/data');
    }

    async addCard(data: {
        cardNumber: number;
        cardHolder: string;
        cardExpirationYear: number;
        cardExpirationMonth: number;
        billingAddress: {
            zip: string;
            city: string;
            state: string;
            address: string;
            countryCode: string;
        }
    }): Promise<IPayIn['addCard']> {
        return this.sendRequest('POST', '/v3/payin/card', data);
    }
    async createOffer(data: {
        cardId: number;
        fromCurrency: string;
        amount: number;
        toCurrency: string;
        operation: 'PAYIN'
    }): Promise<IPayIn['createOffer']> {
        return this.sendRequest('POST', '/v3/payin/offer', data);
    }
    async updateOffer(data: { offerId: number; currencyFrom: string; currencyTo: string; amountFrom: number; amountTo: number }): Promise<IPayIn['updateOffer']> {
        return this.sendRequest('PUT', `/v3/payin/pay/${data.offerId}`, data);
    }
    async activateOffer(data: { offerId: number, cardCVV?: string, successUrl?: string, fingerprint?: string }): Promise<IPayIn['executeOffer']> {
        return this.sendRequest('POST', `/v3/payin/pay/${data.offerId}`, data);
    }
    async payCallback(data: { offerId: number }): Promise<IPayIn['payCallback']> {
        return this.sendRequest('GET', `/v3/payin/pay-callback?offerId=${data.offerId}`, data);
    }
}