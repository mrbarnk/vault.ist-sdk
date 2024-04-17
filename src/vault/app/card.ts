import { ApiClient } from "..";

// Card Container
export class Card extends ApiClient {

    async requestCard(data: { cardType: 'VIRTUAL'; cardDesignId: 1 | 2 | 3 | 4 | 5 | 6 }): Promise<any> {
        return this.sendRequest('POST', '/v2/card/card-requests', data);
    }

    async addCard(data: { cardId: string }): Promise<any> {
        return this.sendRequest('POST', '/account/add-card', data);
    }

    async chargeCard(data: { cardId: string; amount: number }): Promise<any> {
        return this.sendRequest('POST', '/account/charge-card', data);
    }
}
