import { ApiClient } from "..";
import { IHistory } from "../interfaces/history";



// Exchange Container
export class History extends ApiClient {
    async getHistories(): Promise<IHistory['history']> {
        return this.sendRequest('GET', '/v2/history/operations');
    }
}