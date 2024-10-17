import { ApiClient } from "..";
import { CardTransaction, VCard, VCardResponse } from "../interfaces/card";

// Card Container
export class Card extends ApiClient {

    async requestCard(data:
        {
            cardType: string;
            cardDesignId: 'BLUE' | 'ORANGE' | 'BLACK' | 'GOLD' | 'PURPLE';
            userAgent: string
        }
    ): Promise<any> {
        const headers = {
            'User-Agent': data.userAgent
        }
        try {
            return this.sendRequest('POST', '/v2/card/card-requests', data, headers);
        } catch (error) {
            throw new Error(`Unable to perform card request.`);
        }
    }

    async addCard(data: { cardId: string }): Promise<any> {
        return this.sendRequest('POST', '/v2/account/add-card', data);
    }

    async chargeCard(data: { cardId: string; amount: number }): Promise<any> {
        return this.sendRequest('POST', '/v2/account/charge-card', data);
    }
    async cardTxHistory(cardId: string): Promise<CardTransaction[]> {
        return this.sendRequest('GET', `/v2/history/card/${cardId}?cp=CP_2&offset=0&size=100`)
    }
    async getCardsDetail(): Promise<VCardResponse> {
        return this.sendRequest('GET', '/v2/card/list',);
    }

    async getSMSCodeToShowCardDetails(cardId: string): Promise<any> {
        try {
            return this.sendRequest('GET', `/v2/card/${cardId}/details/code`);
        } catch (error: any) {
            throw new Error(`Unable to request sms code to show card details.`);
        }
    }


    async validateSMSCode(cardId: string, code: string): Promise<any> {
        try {
            return this.sendRequest('POST', `/v2/card/${cardId}/details`, {
                code,
                publicKey: process.env.PublicKey
            });
        } catch (error: any) {
            throw new Error(`Unable to request sms code to show card details.`);
        }
    }


    async updateAddress(
        userAgent: string,
        cardRequestId: string,
        cp: string,
        data: {
            country: string,
            documentCountry: string,
            city: string,
            state: string,
            address: string,
            address2: string,
            postalCode: string | number,
            cardholderName: string
        }): Promise<any> {
        const headers = {
            'User-Agent': userAgent
        }
        try {
            return this.sendRequest('PUT', `/v2/card/card-requests/${cardRequestId}/address?cp=${cp}`, data, headers);
        } catch (error: any) {
            throw new Error(`Unable to updated card address.`);
        }

    }
}
